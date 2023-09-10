import Skeleton from "react-loading-skeleton";

export default function Loading() {
  const rows = Array.from({ length: 8 }, (_, index) => (
    <tr key={index}>
      <td className="border-b-2 p-2 text-center">
        <Skeleton />
      </td>
      <td className="border-b-2 p-2 text-center">
        <Skeleton />
      </td>
    </tr>
  ));

  return (
    <>
      <h1 className="mb-6 text-center">Payment Reports</h1>
      <div className="flex items-center justify-center pr-4 md:pr-0">
        <table className="w-full border-collapse border-2 md:w-1/2">
          <thead>
            <tr>
              <th className="border-b-2 p-2">Month,Year</th>
              <th className="border-b-2 p-2">Compensation</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    </>
  );
}
