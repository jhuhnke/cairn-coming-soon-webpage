"use client";

import Link from "next/link";
import type {
  ComponentPropsWithoutRef,
  MouseEventHandler,
} from "react";

import { trackEvent } from "@/lib/analytics";

type NextLinkProps = ComponentPropsWithoutRef<typeof Link>;

type TrackedLinkProps = Omit<NextLinkProps, "onClick"> & {
  eventName: "hero_cta_click" | "footer_cta_click";
  eventSource: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
};

export function TrackedLink({
  eventName,
  eventSource,
  onClick,
  ...linkProps
}: TrackedLinkProps) {
  const handleClick: MouseEventHandler<HTMLAnchorElement> = (event) => {
    trackEvent(eventName, {
      source: eventSource,
    });

    onClick?.(event);
  };

  return <Link {...linkProps} onClick={handleClick} />;
}