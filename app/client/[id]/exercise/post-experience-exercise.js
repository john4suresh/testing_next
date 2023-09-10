import React from "react";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

function PostExperienceExercise({ slug }) {
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${client.postExperienceExercise(clientId, slug)}`
  );
  return (
    <div>
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
            <div className="container mx-auto mt-10 w-11/12">
              {data?.sections?.map((postQuestion) => (
                <ul className="list-decimal">
                  {postQuestion.questions.map((data) => (
                    <li key={data.id}>
                      <p className="mb-2">{data.question_text}</p>
                      <p className="mb-4 p-2 text-base font-normal">
                        {data.answers.map((answers) => answers.answer)}
                      </p>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default PostExperienceExercise;
