import useSWR from "swr";
import Link from "next/link";
import Alert from "@/components/shared/alert";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export function ClientCoachCount() {
  const { data, error } = useSWR("/api/clients", fetcher);

  if (error) {
    return (
      <div className="mx-auto w-1/4 px-4 py-2">
        <Alert type="error">{error}</Alert>
      </div>
    );
  }

  return (
    <p>
      You currently have {data?.number_of_clients} clients. You have set a{" "}
      <Link href="/profile/set-number-of-clients" className="link">
        {data?.max_client_limit} client limit
      </Link>
      .
    </p>
  );
}
