import React from "react";
import useSWR from "swr";
import Alert from "@/components/shared/alert";
import Skeleton from "react-loading-skeleton";
import { useParams } from "next/navigation";
import { client } from "@/lib/apiUrls";

function CommentsAndFeedback() {
  let displayedSkillCategoryName = "",
    displayedSkillName = "";
  const params = useParams();
  const { id: clientId } = params;
  const { data, error, isLoading } = useSWR(
    `${client.viewAssessmentCommentsAdditionalFeedback(clientId)}`
  );
  if (error) {
    return (
      <div className="mx-auto w-1/4 px-4 py-2">
        <Alert type="error">{error}</Alert>
      </div>
    );
  }
  return (
    <>
      <div className="mt-10 pt-3 text-center">
        <p className="text-base font-semibold text-gray-veryDark">
          Comments received on assessment ratings
        </p>
        <p className="mt-1 text-base font-normal text-gray-veryDark">
          Client sees comments anonymously integrated in their assessment
          results home screen.
        </p>
      </div>
      <div className="mt-10 p-8">
        {isLoading ? (
          <div className="mr-4">
            <Skeleton count={12} className="mt-5" />
          </div>
        ) : (
          <>
            {data && data?.comments_data?.length ? (
              data?.comments_data?.map((assessmentComment, index) => (
                <div key={index}>
                  {displayedSkillCategoryName !==
                    assessmentComment.skill_category &&
                    ((displayedSkillCategoryName =
                      assessmentComment.skill_category),
                    (
                      <p className="mb-2 text-lg font-semibold text-gray-veryDark">
                        {assessmentComment.skill_category}
                      </p>
                    ))}
                  {displayedSkillName !== assessmentComment.skill_name &&
                    ((displayedSkillName = assessmentComment.skill_name),
                    (
                      <h6>
                        <span className="mb-2 text-lg font-semibold text-gray-veryDark">
                          {assessmentComment.skill_name}
                        </span>{" "}
                        :{" "}
                        <span className="text-base font-semibold text-gray-veryDark">
                          {assessmentComment.skill_description}
                        </span>
                      </h6>
                    ))}
                  <p className="mb-5">
                    <p className="text-lg font-bold text-gray-veryDark">
                      <p>{assessmentComment.related_as}:</p>
                    </p>
                    <p>
                      <p>{assessmentComment.comments}</p>
                    </p>
                  </p>
                </div>
              ))
            ) : (
              <p className="text-center">
                None of the respondents have left additional comments.
              </p>
            )}
          </>
        )}
      </div>
      <div className="pt-3 text-center">
        <p className="text-base font-semibold text-gray-veryDark">
          Additional feedback: Client invitee exercise results
        </p>
        <p className="mt-1 text-base font-normal text-gray-veryDark">
          Client does not see roles of respondents in this view.
        </p>
      </div>
      <div className="mt-4 p-8">
        {data?.reviewers_results && data?.reviewers_results.length ? (
          data?.reviewers_results?.map((assessmentComment, index) => (
            <div key={index}>
              <h6>
                <span className="mb-2 text-lg font-semibold text-gray-veryDark">
                  Question: {assessmentComment.question_text}.
                </span>
              </h6>
              <div className="my-6">
                <>
                  {assessmentComment?.reviewers_answers.map((inviteeAnswer) => (
                    <>
                      <p className="mb-5">
                        <p className="text-lg font-bold text-gray-veryDark">
                          <p>{inviteeAnswer.relation}:</p>
                        </p>
                        <p>
                          <p>{inviteeAnswer.answer}</p>
                        </p>
                      </p>
                    </>
                  ))}
                </>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">
            None of the respondents have left additional feedback.
          </p>
        )}
      </div>
    </>
  );
}

export default CommentsAndFeedback;
