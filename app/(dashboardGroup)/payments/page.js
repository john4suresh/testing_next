import React from "react";
import { headers } from "next/headers";
import Link from "next/link";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/payments-list`,
      {
        headers: headers(),
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    return null;
  }
}

export default async function Payments() {
  const data = await getData();

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
          <tbody>
            {data?.ready_periods?.map((payment) => (
              <tr key={payment.month}>
                <td className="border-b-2 p-2 text-center">
                  <Link
                    href={`payments/${payment.month}/${payment.year}`}
                    className="text-blue-light"
                  >
                    {payment.formatted}
                  </Link>
                </td>
                <td className="border-b-2 p-2 text-center">
                  ${payment.total_owed.toFixed(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
