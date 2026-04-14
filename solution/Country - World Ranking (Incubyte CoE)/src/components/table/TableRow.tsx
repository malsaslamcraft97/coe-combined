// components/table/TableRow.tsx

export const TableRow = () => {
  return (
    <div className="grid grid-cols-5 items-center py-4 text-sm">
      <img
        src="https://flagcdn.com/w40/cn.png"
        className="w-10 h-6 object-cover rounded-sm"
      />

      <span>China</span>
      <span>1,402,112,000</span>
      <span>9,706,961</span>
      <span className="text-textSecondary">Asia</span>
    </div>
  );
};
