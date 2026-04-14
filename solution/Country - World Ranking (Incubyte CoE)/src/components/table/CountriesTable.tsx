// components/table/CountriesTable.tsx

import { SkeletonRow } from "./SkeletonRow";
import { TableRow } from "./TableRow";

export const CountriesTable = () => {
  return (
    <div className="flex-1 p-6 overflow-x-auto">
      {/* Header */}
      <div className="grid grid-cols-5 text-xs text-textSecondary pb-3 border-b border-border">
        <span>Flag</span>
        <span>Name</span>
        <span>Population</span>
        <span>Area (km²)</span>
        <span>Region</span>
      </div>

      {/* Rows */}
      <div className="divide-y divide-border">
        <TableRow />
        <TableRow />
        <TableRow />
        <SkeletonRow />
        <SkeletonRow />
      </div>
    </div>
  );
};
