import { Checkbox } from "@/components/shared/checkbox";
import MultiTextInput from "@/components/shared/multitext-input";
import { RadioGroup, RadioGroupItem } from "@/components/shared/radio-group";
import Input from "@/components/shared/input";
import Label from "@/components/shared/label";
import CoachingPlanDetails from "./mock";
import Card from "@/components/shared/card";
import Accordion from "@/components/shared/accordion";
import CoachingPlanTranslations from "./translations";

export default function CoachingPlan() {
  const coachingPlanDetails = CoachingPlanDetails;
  const {
    headerTitle,
    headerDescription1,
    headerDescription2,
    goalLabel,
    longtermGoal,
    longtermGoalSubHeading,
    developmentGoal,
    goalTypeLabel,
    focusAreasLabel,
    measureOfSuccessLabel,
    measureOfSuccessSubLabel,
    tacticsLabel,
    tacticsSubLabel,
    shareWithManager,
    shareWithManagerDescription,
    managerComments,
    managerCommentsDescription,
    status,
    waitingForManagerComments,
    notRequested,
    waitingForManagerFeedbackStatus,
    commented,
    requested,
  } = CoachingPlanTranslations;
  const coach_name = "Holly Kulkarni";
  const {
    goalTypes,
    focus_areas,
    coaching_goals,
    shared_with_managers,
    long_term_goal,
  } = coachingPlanDetails;

  return (
    <div className="mx-5">
      <div>
        <h1 className="text-center">{`${headerTitle} ${coach_name}`}</h1>
        <div className="my-5">
          <p>{headerDescription1}</p>
          <p>{headerDescription2}</p>
        </div>
      </div>
      <div>
        <Card className="my-8" type="recommended">
          <MultiTextInput
            label={longtermGoal}
            subLabel={longtermGoalSubHeading}
            value={long_term_goal || ""}
            readOnly
          />
        </Card>
        {coaching_goals.map((goal, index) => {
          return (
            <Card key={index} className="mb-8">
              <Accordion title={`${goalLabel} ${index + 1}`}>
                <div className="mt-9">
                  <Label htmlFor="">{developmentGoal}</Label>
                  <Input
                    value={goal.development_goal}
                    readOnly
                    className="mb-12 mt-2"
                  />
                </div>
                <div className="mb-12">
                  <Label>{goalTypeLabel}</Label>
                  <RadioGroup
                    defaultValue={goal.goal_type}
                    className="ml-7 mt-6 flex flex-wrap gap-x-8"
                  >
                    {goalTypes?.map((g) => {
                      return (
                        <div
                          className="flex items-center space-x-2"
                          key={g.value}
                        >
                          <RadioGroupItem value={g.value} id={g.label} />
                          <Label
                            htmlFor={g.label}
                            className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            {g.label}
                          </Label>
                        </div>
                      );
                    })}
                  </RadioGroup>
                </div>
                <div className="mb-12">
                  <Label>{focusAreasLabel}</Label>
                  <div className="ml-7 mt-6 flex flex-wrap gap-x-8">
                    {focus_areas?.map((f) => (
                      <div
                        className="flex items-center space-x-2"
                        key={f.value}
                      >
                        <Checkbox
                          defaultChecked={goal?.focus_area_modules?.includes(
                            f.value
                          )}
                          id={f.value}
                          value={f.value}
                        />
                        <Label
                          htmlFor={f.label}
                          className="text-base font-normal leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          {f.label}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>
                <MultiTextInput
                  label={measureOfSuccessLabel}
                  subLabel={measureOfSuccessSubLabel}
                  value={goal.measure_of_success}
                  readOnly
                  customeStyles="mb-12"
                />
                <MultiTextInput
                  label={tacticsLabel}
                  subLabel={tacticsSubLabel}
                  value={goal.tactics}
                  readOnly
                  customeStyles="mb-[88px]"
                />
              </Accordion>
            </Card>
          );
        })}
        <Card className="mb-8">
          <Accordion title={shareWithManager}>
            <p>{shareWithManagerDescription}</p>
            {shared_with_managers?.length > 0 ? (
              <>
                {shared_with_managers.map((manager, index) => {
                  return (
                    <div key={index}>
                      {index !== 0 && <hr className="my-3" />}
                      <p>{`${manager.first_name} ${manager.last_name}: ${
                        manager.is_answered ? commented : requested
                      }`}</p>
                    </div>
                  );
                })}
              </>
            ) : (
              <p>{waitingForManagerFeedbackStatus}</p>
            )}
          </Accordion>
        </Card>
        <Card className="mb-14">
          <Accordion title={managerComments}>
            <p>{managerCommentsDescription}</p>
            <h4 className="mb-3 mt-5">{status}</h4>
            {shared_with_managers?.length > 0 ? (
              <>
                {shared_with_managers.map((manager, index) => {
                  const managerFullName =
                    manager?.first_name + manager?.last_name || "";
                  return (
                    <div key={index}>
                      {index !== 0 && <hr className="my-3" />}
                      {manager?.comment ? (
                        <div>
                          <p className="font-bold">{manager.comment}</p>
                          <p>{managerFullName}</p>
                          <p>{manager.answered_on}</p>
                        </div>
                      ) : (
                        <div>{`${waitingForManagerComments} ${managerFullName}.`}</div>
                      )}
                    </div>
                  );
                })}
              </>
            ) : (
              <p>{notRequested}</p>
            )}
          </Accordion>
        </Card>
      </div>
    </div>
  );
}
