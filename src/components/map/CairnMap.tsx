"use client";

import { useEffect, useRef } from "react";
import maplibregl, {
  type GeoJSONSource,
  type Map as MapLibreMap,
} from "maplibre-gl";

const MAP_STYLE_URL = "https://tiles.openfreemap.org/styles/liberty";

const TRAIL_ROUTE: GeoJSON.Feature<GeoJSON.LineString> = {
  type: "Feature",
  properties: {
    name: "Cairn Demo Route",
  },
  geometry: {
    type: "LineString",
    coordinates: [
      [-111.7068, 40.5728],
      [-111.7041, 40.5752],
      [-111.7007, 40.5785],
      [-111.6976, 40.5817],
      [-111.6937, 40.5849],
      [-111.6895, 40.5887],
      [-111.6843, 40.5919],
    ],
  },
};

const CONDITION_POINTS: GeoJSON.FeatureCollection<GeoJSON.Point> = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        condition: "good",
        label: "Trail is clear",
      },
      geometry: {
        type: "Point",
        coordinates: [-111.7007, 40.5785],
      },
    },
    {
      type: "Feature",
      properties: {
        condition: "caution",
        label: "Snow patches",
      },
      geometry: {
        type: "Point",
        coordinates: [-111.6937, 40.5849],
      },
    },
  ],
};

type CairnMapProps = {
  className?: string;
};

export function CairnMap({ className = "" }: CairnMapProps) {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<MapLibreMap | null>(null);

  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) {
      return;
    }

    const map = new maplibregl.Map({
        container: mapContainerRef.current,
        style: MAP_STYLE_URL,
        center: [-111.6975, 40.5815],
        zoom: 12.6,
        pitch: 38,
        bearing: -18,
        attributionControl: false,
        interactive: true,
    });

    mapRef.current = map;

    const resizeObserver = new ResizeObserver(() => {
        map.resize();
    });

    resizeObserver.observe(mapContainerRef.current);

    map.addControl(
      new maplibregl.AttributionControl({
        compact: true,
      }),
      "bottom-right",
    );

    map.on("load", () => {
      map.addSource("cairn-route", {
        type: "geojson",
        data: TRAIL_ROUTE,
      });

      map.addLayer({
        id: "cairn-route-shadow",
        type: "line",
        source: "cairn-route",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#ffffff",
          "line-width": 8,
          "line-opacity": 0.75,
        },
      });

      map.addLayer({
        id: "cairn-route-line",
        type: "line",
        source: "cairn-route",
        layout: {
          "line-cap": "round",
          "line-join": "round",
        },
        paint: {
          "line-color": "#bf501c",
          "line-width": 4,
        },
      });

      map.addSource("condition-points", {
        type: "geojson",
        data: CONDITION_POINTS,
      });

      map.addLayer({
        id: "condition-points-circle",
        type: "circle",
        source: "condition-points",
        paint: {
          "circle-radius": 8,
          "circle-color": [
            "match",
            ["get", "condition"],
            "good",
            "#4f9858",
            "caution",
            "#bf501c",
            "#172934",
          ],
          "circle-stroke-color": "#ffffff",
          "circle-stroke-width": 3,
        },
      });

      map.addLayer({
        id: "condition-points-label",
        type: "symbol",
        source: "condition-points",
        layout: {
          "text-field": ["get", "label"],
          "text-size": 11,
          "text-offset": [0, 1.6],
          "text-anchor": "top",
          "text-allow-overlap": false,
        },
        paint: {
          "text-color": "#172934",
          "text-halo-color": "#ffffff",
          "text-halo-width": 2,
        },
      });
    });

    map.on("click", "condition-points-circle", (event) => {
      const feature = event.features?.[0];
      const coordinates = feature?.geometry;

      if (!feature || coordinates?.type !== "Point") {
        return;
      }

      const label =
        typeof feature.properties?.label === "string"
          ? feature.properties.label
          : "Trail condition";

      new maplibregl.Popup({
        closeButton: false,
        offset: 14,
      })
        .setLngLat(coordinates.coordinates as [number, number])
        .setHTML(
          `<div class="cairn-map-popup">
            <strong>${escapeHtml(label)}</strong>
            <span>Recently reported</span>
          </div>`,
        )
        .addTo(map);
    });

    map.on("mouseenter", "condition-points-circle", () => {
      map.getCanvas().style.cursor = "pointer";
    });

    map.on("mouseleave", "condition-points-circle", () => {
      map.getCanvas().style.cursor = "";
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, []);

  return (
    <div
      ref={mapContainerRef}
      className={`h-full w-full ${className}`}
      aria-label="Interactive Cairn trail conditions map"
    />
  );
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    };

    return entities[character];
  });
}