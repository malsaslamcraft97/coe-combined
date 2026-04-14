// components/ui/Chip.tsx

import clsx from "clsx";

export const Chip = ({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) => {
  return (
    <button
      className={clsx(
        "px-3 py-1.5 rounded-lg text-sm transition",
        active
          ? "bg-muted text-white"
          : "bg-transparent text-textSecondary hover:bg-muted",
      )}
    >
      {label}
    </button>
  );
};
