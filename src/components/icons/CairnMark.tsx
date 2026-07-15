type CairnMarkProps = {
  className?: string;
};

export function CairnMark({ className = "" }: CairnMarkProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Cairn"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 51C16 47 27 46 39 47C49 48 56 51 56 54C56 58 45 60 31 59C18 59 8 56 9 51Z"
        fill="#46504E"
      />
      <path
        d="M17 40C23 36 34 35 43 37C49 38 52 41 50 44C47 47 38 48 28 46C19 45 14 43 17 40Z"
        fill="#74746C"
      />
      <path
        d="M26 29C31 27 41 27 46 30C49 32 48 35 44 36C38 38 29 36 25 34C22 32 23 30 26 29Z"
        fill="#B75326"
      />
      <path
        d="M15 23C20 20 29 19 34 21C38 22 39 25 35 27C30 29 20 28 16 26C13 25 13 24 15 23Z"
        fill="#555C59"
      />
      <path
        d="M30 13C34 11 40 12 42 14C44 17 41 19 37 19C32 19 28 17 28 15C28 14 29 13 30 13Z"
        fill="#C66A38"
      />
      <path
        d="M23 7C26 4 31 4 34 6C36 8 34 10 31 11C27 11 23 10 22 9C21 8 22 7 23 7Z"
        fill="#4C5552"
      />
    </svg>
  );
}