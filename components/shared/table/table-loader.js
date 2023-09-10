import Skeleton from "react-loading-skeleton";

export default function TableLoader({ rows = 5, columns = 6 }) {
  return (
    <>
      {Array(rows)
        .fill(0)
        .map((_, index) => {
          return (
            <tr key={index}>
              {Array.from({ length: columns }).map((_, idx) => (
                <td key={idx} className="my-4 border-y-[1px] p-4">
                  <Skeleton className="h-[20px] w-[60%] rounded-md pr-2" />
                </td>
              ))}
            </tr>
          );
        })}
    </>
  );
}
