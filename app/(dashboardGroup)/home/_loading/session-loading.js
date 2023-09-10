import Card from "@/components/shared/card";
import Skeleton from "react-loading-skeleton";

export default function SessionLoading() {
  return (
    <>
      <h2 className="mb-4">
        <Skeleton className="!w-1/2" />
      </h2>
      {Array(2)
        .fill("")
        .map((count) => (
          <Card key={count} className="mb-4 flex !w-full">
            <div className="!w-2/3">
              <p className="h3 mb-1 !font-semibold">
                <Skeleton className="!w-1/4" />
              </p>
              <p className="body mb-4 !font-normal">
                <Skeleton className="!w-1/3" />
              </p>
              <p className="body !font-normal !italic">
                <Skeleton className="!w-1/2" />
              </p>
            </div>
            <div className="flex !w-1/3 items-center justify-end">
              <div className="mx-4 !w-1/4">
                <Skeleton className="!h-11 !rounded-lg " />
              </div>
              <div className="!w-1/4">
                <Skeleton className="!h-11 !rounded-lg " />
              </div>
            </div>
          </Card>
        ))}
      <div className="text-center">
        <Skeleton className="!w-2/6" />
      </div>
    </>
  );
}
