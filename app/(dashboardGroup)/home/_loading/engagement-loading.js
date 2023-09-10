import Card from "@/components/shared/card";
import Skeleton from "react-loading-skeleton";

export default function EngagementLoading() {
  return (
    <Card className="mb-9" type="banner">
      <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="flex flex-col items-center justify-center lg:flex-row">
          <Skeleton circle className="!h-24 !w-24" />
          <div className="pb-6 pt-4 text-center lg:py-0 lg:pl-3 lg:text-left">
            <h1>
              <Skeleton className="!w-40" />
            </h1>
            <p>
              <Skeleton className="!w-40" />
            </p>
          </div>
        </div>
        <div className="flex px-16 text-center">
          <div className="w-16">
            <p className="h3 pb-2 text-green-dark">
              <Skeleton />
            </p>
            <p className="caption !text-navy">
              <Skeleton />
            </p>
          </div>
          <div className="mx-6 w-16">
            <p className="h3 pb-2 text-green-dark">
              <Skeleton />
            </p>
            <p className="caption !text-navy">
              <Skeleton />
            </p>
          </div>
          <div className="w-16">
            <p className="h3 pb-2 text-gray-dark">
              <Skeleton />
            </p>
            <p className="caption !text-navy">
              <Skeleton />
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
}
