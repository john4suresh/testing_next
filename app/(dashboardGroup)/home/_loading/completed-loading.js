import Skeleton from "react-loading-skeleton";

export default async function CompletedLoading() {
  return (
    <div className="mb-10 flex justify-between  border-b border-gray-medium py-3">
      <div className="w-2/12">
        <Skeleton className="h-6" />
      </div>
      <div className="w-6">
        <Skeleton className="h-6" />
      </div>
    </div>
  );
}
