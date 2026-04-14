import { SearchInput } from "../ui/SearchInput";

export const TopBar = () => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-6 border-b border-border">
      <p className="text-textSecondary">
        Found <span className="text-textPrimary font-medium">234</span>{" "}
        countries
      </p>

      <SearchInput />
    </div>
  );
};
