import clsx from "clsx";
import Image from "next/image";
import PropTypes from "prop-types";
import Card from "../card";
import Button from "../button";
import complete from "@/public/assets/icons/complete.svg";

// identifiers
const severTypes = ["completed_call", "late_cancel"];
// Pick content based on the identifier
function taskContent(details) {
  return {
    completed_call: {
      title: `Your recent session with ${details.client_name}`,
      description: `Did you have a session on ${details.conference_call_time} ${details.user_timezone_shorthand}?`,
      taskInfo: details.help_text,
    },
    late_cancel: {
      title: `Late cancel with ${details.client_name}`,
      description: "Do you want to count the session as a late cancel?",
      taskInfo: details.help_text,
    },
  };
}

export default function Task({
  type,
  details,
  loading,
  eventHandler,
  ...rest
}) {
  const isToDo = type === "todo";
  const isCompleted = type === "completed";
  const isLateCancel = type === "late_cancel";
  const isCompletedCall = type === "completed_call";
  const isServerTypes = severTypes.includes(type);
  const updatedType = isServerTypes ? "todo" : type;
  const { title, description, taskInfo, suggestedTime } = isServerTypes
    ? taskContent(details)[details.identifier]
    : details;
  return (
    <Card type={updatedType} className="mb-4 w-full" {...rest}>
      <div
        className={clsx("grid grid-cols-1 gap-y-5", {
          "sm:grid-cols-3 sm:gap-x-5": isCompleted,
          "sm:grid-cols-3 sm:gap-x-5 md:grid-cols-3": isToDo,
          "sm:grid-cols-2 sm:gap-x-5 xl:grid-cols-4": isLateCancel,
          "sm:grid-cols-3 sm:gap-x-5 lg:grid-cols-3 lg:!gap-y-0":
            isCompletedCall,
        })}
      >
        <div
          className={clsx({
            "xs:col-span-full sm:col-span-2": isCompleted,
            "xs:col-span-full sm:!col-span-2 lg:!col-span-2": isCompletedCall,
            "xs:col-span-full xl:!col-span-2": isLateCancel,
            "xs:col-span-full sm:col-span-2 md:col-span-2": isToDo,
          })}
        >
          {title && <p className="h3 mb-1 !font-semibold">{title}</p>}
          {description && (
            <p
              className={clsx("body mb-4 !font-normal", {
                "!mb-0": isCompleted,
              })}
            >
              {description}
            </p>
          )}
          {taskInfo && <p className="body !font-normal !italic">{taskInfo}</p>}
        </div>
        <div
          className={clsx("flex items-center justify-end", {
            "col-span-full sm:!col-span-1 md:!col-span-1": isToDo,
            "sm:col-span-1": isCompleted,
            "col-span-full sm:col-span-1 lg:col-span-1": isCompletedCall,
            "flex-col !items-stretch xs:col-span-full sm:flex-row sm:!items-center xl:col-span-2":
              isLateCancel,
          })}
        >
          {isToDo && (
            <>
              {suggestedTime && (
                <p className="caption inline-block pr-4">{suggestedTime}</p>
              )}
              <Button id="begin" text="Begin" onClick={eventHandler} />
            </>
          )}
          {isCompleted && (
            <Image src={complete} alt="" width={32} height={32} />
          )}
          {isCompletedCall && (
            <>
              <Button
                id="no"
                text="No"
                variant="secondary"
                disabled={loading}
                onClick={eventHandler}
              />
              <Button
                id="yes"
                text="Yes"
                variant="secondary"
                className="ml-5"
                disabled={loading}
                onClick={eventHandler}
              />
            </>
          )}
          {isLateCancel && (
            <>
              <Button
                id="lateCancel"
                text="Late cancelled"
                variant="secondary"
                disabled={loading}
                onClick={eventHandler}
              />
              <Button
                id="giveSessionBack"
                text="Give session back"
                variant="secondary"
                disabled={loading}
                className="mt-2.5 sm:!mt-0 sm:ml-2.5 lg:ml-5"
                onClick={eventHandler}
              />
            </>
          )}
        </div>
      </div>
    </Card>
  );
}

Task.propTypes = {
  type: PropTypes.oneOf(["todo", "completed", "completed_call", "late_cancel"])
    .isRequired,
  details: PropTypes.shape({
    title: PropTypes.string,
    taskInfo: PropTypes.string,
    description: PropTypes.string,
    suggestedTime: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool,
  eventHandler: PropTypes.func,
};
