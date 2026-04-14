// components/table/SkeletonRow.tsx

export const SkeletonRow = () => {
  return (
    <div className="grid grid-cols-5 items-center py-4 animate-pulse">
      <div className="w-10 h-6 bg-muted rounded" />

      <div className="h-3 w-24 bg-muted rounded" />
      <div className="h-3 w-28 bg-muted rounded" />
      <div className="h-3 w-24 bg-muted rounded" />
      <div className="h-3 w-20 bg-muted rounded" />
    </div>
  );
};
