import Skeleton from "react-loading-skeleton";

export default function Loading() {
  return (
    <div className="mr-4 rounded-md border border-gray-medium bg-white">
      <div className="w-full p-4" data-automation-id="table-search">
        <div className="flex justify-between">
          <div className="w-3/6">
            <Skeleton className="h-10" />
          </div>
          <div className="w-3/12">
            <Skeleton className="h-10" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table
            className="sticky w-full table-auto border-separate border-spacing-y-4"
            data-automation-id="table"
          >
            <thead>
              <tr>
                {Array(5)
                  .fill("")
                  .map((_, key) => (
                    <th key={key} className="w-1/5 px-2 first:pl-0 last:pr-0">
                      <Skeleton className="h-10" />
                    </th>
                  ))}
              </tr>
            </thead>
            <tbody>
              <tr className="!border !border-red">
                {Array(5)
                  .fill("")
                  .map((_, key) => (
                    <td key={key} className="my-4 border-y-[1px] px-2">
                      <Skeleton count={5} className="my-5 h-10" />
                    </td>
                  ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex w-full justify-center">
          <p className="w-1/2 px-4">
            <Skeleton className="h-5" />
          </p>
        </div>
      </div>
    </div>
  );
}
