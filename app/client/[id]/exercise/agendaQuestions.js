import React from "react";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

function Agenda({ slug, call_id }) {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${client.agendaQuestions(clientId, slug, call_id)}`
  );
  return (
    <>
      {error ? (
        <div className="mb-10 text-center ">
          <Alert type="error">{error?.response?.data?.detail}</Alert>
        </div>
      ) : (
        <>
          {isLoading ? (
            <div className="col-span-11 mb-10 grid grid-flow-row">
              <Skeleton
                count={6}
                className="mt-5 divide-y divide-gray-medium border-gray-medium"
              />
            </div>
          ) : (
            <>
              <ul className="list-decimal">
                {data.questions.map((data, index) => (
                  <li key={index}>
                    <p className="mb-2 text-base font-normal">
                      {data.question_text}
                    </p>
                    <p className="mb-4 p-2 text-base font-normal">
                      {data.answer || "null"}
                    </p>
                  </li>
                ))}
              </ul>
            </>
          )}
        </>
      )}
    </>
  );
}

export default Agenda;
