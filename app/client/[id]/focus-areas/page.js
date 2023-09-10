import Card from "@/components/shared/card";
import Accordion from "@/components/shared/accordion";
import FocusAreasTranslations from "./translations";
import FocusAreasData from "./mock";

export default function CoachingPlan() {
  const {
    headerTitle,
    headerDescription,
    focusAreasTitle,
    selectedFocusAreasTitle,
    mustSelectDisclaimer,
    recommendedDisclaimer,
    plumaRecommendedDisclaimer,
  } = FocusAreasTranslations;
  const focusAreaDetails = FocusAreasData;
  const { selected_modules, all_modules, preselected_modules } =
    focusAreaDetails;
  const coach_name = "Holly Kulkarni";

  return (
    <div className="mx-5 mb-6">
      <div>
        <h1 className="text-center">{headerTitle}</h1>
        <p className="my-5">{headerDescription}</p>
      </div>
      <div>
        <Card className="mb-8 p-8">
          <Accordion title={`${coach_name}${focusAreasTitle}`}>
            <p>{mustSelectDisclaimer}</p>
            <br />
            <p>{recommendedDisclaimer}</p>
            <ul className="ml-6 list-disc">
              {all_modules.map((module) => {
                return (
                  <li
                    key={module.id}
                  >{`${module.name}: ${module.description}`}</li>
                );
              })}
            </ul>
            <br />
            <p>{plumaRecommendedDisclaimer}</p>
            <ul className="ml-6 list-disc">
              {preselected_modules.map((module) => {
                return (
                  <li
                    key={module.id}
                  >{`${module.name}: ${module.description}`}</li>
                );
              })}
            </ul>
          </Accordion>
        </Card>
        <Card>
          <Accordion title={`${coach_name}${selectedFocusAreasTitle}`}>
            <ul className="mb-8 ml-6 mt-4 list-disc">
              {selected_modules.map((module) => {
                return (
                  <li
                    key={module.id}
                  >{`${module.name}: ${module.description}`}</li>
                );
              })}
            </ul>
          </Accordion>
        </Card>
      </div>
    </div>
  );
}
