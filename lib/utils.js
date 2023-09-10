import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

/*
    camelize("test string")
    @return "testString"
*/
export function camelize(string) {
  return string
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) => {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

/*
    getInitials("user name")
    @return "U N"
*/
export function getInitials(name) {
  if (name?.length > 0) {
    return name
      ?.match(/(\b\S)?/g)
      .join(" ")
      .toUpperCase();
  }
}
export const relationFind = (relation) => {
  let slidColor = null;
  if (relation.includes("Cross-functional colleague")) {
    slidColor = "bg-blue-flat";
  } else if (relation.includes("Direct report")) {
    slidColor = "bg-radicalRed";
  } else if (relation.includes("Manager")) {
    slidColor = "bg-mountainMist";
  } else {
    slidColor = "bg-persianOrange";
  }
  return slidColor;
};

export function dataCenter() {
  // Todo: when all the instance pathname change coach-app to coach
  // remove pathname here and concat in the UI
  // FIX ME: should not use window
  const currentURL = `${window.location.origin}${window.location.pathname}`,
    dev = "https://skillsoftcoaching-dev.percipio.com/coach/",
    demo = "https://skillsoftcoaching-demo.percipio.com/coach/",
    production = "https://skillsoftcoaching.percipio.com/coach/",
    squadsDev = "https://skillsoftcoaching.develop.squads-dev.com/coach/",
    productionEU = "https://skillsoftcoaching-eu.percipio.com/coach/",
    release = "https://skillsoftcoaching.release.squads-dev.com/coach/",
    master = "https://skillsoftcoaching.master.squads-dev.com/coach/",
    stage = "https://skillsoftcoaching.stage.percipio.com/coach/";
  switch (true) {
    case currentURL === dev:
    case currentURL === squadsDev:
      return { url: productionEU, isUS: true };
    case currentURL === demo:
      return { url: productionEU, isUS: true };
    case currentURL === production:
      return { url: productionEU, isUS: true };
    case currentURL === release:
      return { url: productionEU, isUS: true };
    case currentURL === master:
      return { url: productionEU, isUS: true };
    case currentURL === stage:
      return { url: productionEU, isUS: true };
    case currentURL === productionEU:
      return { url: production, isEU: true };
    default:
      return { url: "#", isUS: true };
  }
}

// function to calculate gridRow for calendar event placements
export function calculateGridRow(start, duration) {
  const span = (duration / 60) * 2 * 6; // calculate the grid-row styling based on the event start and duration
  const hours = Math.floor(start); // Extract the hours (e.g., 14)
  const minutes = (start - hours) * 100; // Extract the minutes (e.g., 0.30 => 30)
  const startTimeInMinutes = Math.round(hours * 60 + minutes);
  return `${startTimeInMinutes / 5 + 1} / span ${span}`;
}

export function mapIdentifierToUrl(identifier) {
  switch (identifier) {
    case "background_check":
      return "background-check";
    case "sign_up_to_receive_payment":
      return "set-payment";
    case "upload_w9":
      return "tax-form";
    case "icf_credentials":
      return "icf-certification";
    case "add_your_educational_background":
      return "educational-background";
    case "languages":
      return "demographic-information";
    case "connect_your_calendars":
      return "connect-calendars";
    case "test_video_settings":
      return "video-settings";
    case "areas_of_expertise":
      return "areas-of-expertise";
    case "coaching_industry_experience":
      return "coaching-industry-experience";
    case "professional_industry_experience":
      return "professional-industry-experience";
    case "role_experience":
      return "role-experience";
    case "max_num_clients":
      return "set-number-of-clients";
    case "additional_questions":
      return "coach-bio";
    default:
      return "dashboard";
  }
}

export function mapUrlToBreadcrumbs(breadcrumb) {
  switch (breadcrumb) {
    case "profile":
      return "Profile settings";
    case "set-number-of-clients":
      return "Maximum number of clients";
    case "set-payment":
      return "Payment setup";
    case "demographic-information":
      return "Demographic information";
    case "tax-form":
      return "Tax Form";
    case "areas-of-expertise":
      return "Areas of expertise";
    case "coaching-industry-experience":
      return "Coaching industry experience ";
    case "professional-industry-experience":
      return "Professional industry experience ";
    case "role-experience":
      return "Function/role";
    case "background-check":
      return "Background check";
    case "coach-bio":
      return "Coach bio";
    case "video-settings":
      return "Video settings";
    case "faq":
      return "FAQ";
    case "getting-started-with-clients":
      return "Getting started with clients";
    case "key-coaching-components":
      return "Getting Started on Skillsoft Coaching";
    case "coach-faq-client-view":
      return "Client view";
    case "coach-faq-pluma-guide":
      return "Coach and Skillsoft Coaching guide";
    case "coach-faq-deliverables":
      return "Deliverables and terms of service";
    case "coach-faq-pla":
      return "Leadership assessment";
    case "coach-faq-digital-coaching-tips":
      return "Digital coaching tips";
    case "coach-faq-video-conferencing-apps":
      return "Conducting a video session";
    case "coach-faq-billing-and-payment":
      return "Billing and payment, referrals and contract";
    default:
      return "Home";
  }
}

export function mapIdToValue(options) {
  return options.map((option) => ({
    value: option.id,
    label: option.option,
  }));
}

export function bytesToSize(bytes) {
  const units = ["byte", "kilobyte", "megabyte"];
  const unit = Math.floor(Math.log(bytes) / Math.log(1024));
  return new Intl.NumberFormat("en", {
    style: "unit",
    unit: units[unit],
  }).format(bytes / 1024 ** unit);
}

export const getFormData = (object) =>
  Object.keys(object).reduce((formData, key) => {
    formData.append(key, object[key]);
    return formData;
  }, new FormData());

export const mapNametoLabel = (options = []) => {
  return options.map((option) => ({
    ...option,
    label: option.skillName,
  }));
};
