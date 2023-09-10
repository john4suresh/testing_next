import { headers } from "next/headers";
import Task from "@/components/shared/task";
import Accordion from "@/components/shared/accordion";

async function getData() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/home/?section=todoAndCompleted`,
      {
        headers: headers(),
      }
    );
    const data = await response.json();
    return data;
  } catch (e) {
    throw e;
  }
}

export default async function CompletedTask() {
  const data = await getData();
  return (
    <div className="mb-10">
      <Accordion title="Completed">
        {data?.completed?.map((details) => (
          <Task key={details.title} type="completed" details={details} />
        ))}
      </Accordion>
    </div>
  );
}
