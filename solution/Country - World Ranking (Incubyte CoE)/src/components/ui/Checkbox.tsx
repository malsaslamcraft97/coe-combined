export const Checkbox = ({
  label,
  checked,
}: {
  label: string;
  checked?: boolean;
}) => {
  return (
    <label className="flex items-center gap-3 cursor-pointer">
      <div
        className={`w-5 h-5 rounded border flex items-center justify-center ${
          checked ? "bg-accent border-accent" : "border-border"
        }`}
      >
        {checked && <div className="w-2.5 h-2.5 bg-white rounded-sm" />}
      </div>
      <span className="text-sm text-textSecondary">{label}</span>
    </label>
  );
};
