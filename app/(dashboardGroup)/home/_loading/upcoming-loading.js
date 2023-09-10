import Card from "@/components/shared/card";
import Skeleton from "react-loading-skeleton";

export default function UpcomingLoading() {
  return (
    <div className="my-10">
      <p className="h2 mb-4">
        <Skeleton className="w-full sm:!w-3/12" />
      </p>
      {Array(2)
        .fill("")
        .map((count) => (
          <Card key={count} type="recommended" className="mb-4 w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2">
              <div className="order-2 xs:col-span-full sm:order-1 sm:col-span-1">
                <p className="h4 mb-1 font-normal uppercase">
                  <Skeleton className="!w-1/2 sm:!w-2/5" />
                </p>
                <p className="h4 font-bold capitalize">
                  <Skeleton className="!w-2/3 sm:!w-3/5" />
                </p>
              </div>
              <div className="order-1 mb-4 text-right xs:col-span-full sm:order-2 sm:col-span-1 sm:!mb-0">
                <Skeleton className="!w-1/4" />
              </div>
            </div>
            <div className="">
              <p className="body my-4 !font-bold !text-blue-light">
                <Skeleton className="w-full sm:!w-3/12" />
              </p>
              <p className="body mb-4">
                <Skeleton className="w-full sm:!w-3/12" />
              </p>
              <div className="flex flex-col items-stretch sm:flex-row">
                <div className="w-full sm:w-auto">
                  <Skeleton className="mb-2 h-11 !rounded-lg xs:w-auto sm:mb-0 sm:mr-2 sm:!w-20" />
                </div>
                <div className="w-full sm:w-auto">
                  <Skeleton className="my-2 h-11 !rounded-lg xs:w-auto sm:mx-2 sm:mt-0 sm:!w-32" />
                </div>
                <div className="w-full sm:w-auto">
                  <Skeleton className="mt-2 h-11 !rounded-lg xs:w-auto sm:mx-2 sm:my-0 sm:!w-28" />
                </div>
              </div>
            </div>
          </Card>
        ))}
      <div className="text-center">
        <Skeleton className="!w-2/6" />
      </div>
    </div>
  );
}
