import { Search } from "lucide-react";

export const SearchInput = () => {
  return (
    <div className="flex items-center gap-2 bg-muted border border-border rounded-lg px-3 py-2 w-full md:w-[320px]">
      <Search size={16} className="text-textSecondary" />
      <input
        placeholder="Search by Name, Region, Subregion"
        className="bg-transparent outline-none text-sm w-full placeholder:text-textSecondary"
      />
    </div>
  );
};
