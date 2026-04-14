// components/filters/FiltersSidebar.tsx

import { Select } from "../ui/Select";
import { Chip } from "../ui/Chip";
import { Checkbox } from "../ui/Checkbox";

export const FiltersSidebar = () => {
  return (
    <div className="p-6 space-y-6 w-full lg:w-[260px]">
      {/* Sort */}
      <div>
        <p className="text-xs text-textSecondary mb-2">Sort by</p>
        <Select />
      </div>

      {/* Region */}
      <div>
        <p className="text-xs text-textSecondary mb-3">Region</p>
        <div className="flex flex-wrap gap-2">
          {["Americas", "Antarctic", "Africa", "Asia", "Europe", "Oceania"].map(
            (r) => (
              <Chip key={r} label={r} active={r === "Americas"} />
            ),
          )}
        </div>
      </div>

      {/* Status */}
      <div>
        <p className="text-xs text-textSecondary mb-3">Status</p>
        <div className="space-y-3">
          <Checkbox label="Member of the United Nations" />
          <Checkbox label="Independent" checked />
        </div>
      </div>
    </div>
  );
};
