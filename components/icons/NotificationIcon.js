import React from "react";

const NotificationIcon = ({ active = false }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.0017 1C10.137 1 8.3537 1.75903 7.0427 3.102C5.73251 4.44416 5.00061 6.25949 5.00061 8.14743C5.00061 11.59 4.28167 13.7305 3.61767 14.9775C3.28446 15.6033 2.96002 16.0138 2.73474 16.2574C2.62184 16.3794 2.53314 16.4604 2.47974 16.506C2.45303 16.5288 2.43511 16.5428 2.42738 16.5486L2.42448 16.5508C2.07053 16.7999 1.91657 17.2491 2.04462 17.6637C2.17406 18.0828 2.56147 18.3686 3.00008 18.3686H21.0033C21.4419 18.3686 21.8293 18.0828 21.9587 17.6637C22.0868 17.2492 21.9328 16.7999 21.5789 16.5508L21.576 16.5486C21.5682 16.5428 21.5503 16.5288 21.5236 16.506C21.4702 16.4604 21.3815 16.3794 21.2686 16.2574C21.0433 16.0138 20.7189 15.6033 20.3857 14.9775C19.7217 13.7305 19.0027 11.59 19.0027 8.14743C19.0027 6.25949 18.2708 4.44416 16.9606 3.102C15.6496 1.75903 13.8663 1 12.0017 1ZM18.8761 16.3686H5.12725C5.21232 16.2277 5.29785 16.0774 5.38301 15.9175C6.21928 14.3469 7.00061 11.8768 7.00061 8.14743C7.00061 6.77458 7.53321 5.46266 8.47385 4.49908C9.41369 3.53631 10.6832 3 12.0017 3C13.3202 3 14.5896 3.53631 15.5295 4.49908C16.4701 5.46266 17.0027 6.77458 17.0027 8.14743C17.0027 11.8768 17.7841 14.3469 18.6203 15.9175C18.7055 16.0774 18.791 16.2277 18.8761 16.3686ZM11.1415 20.974C10.8693 20.4935 10.2591 20.3245 9.77856 20.5966C9.29798 20.8688 9.12901 21.479 9.40115 21.9595C9.6622 22.4206 10.0386 22.8062 10.495 23.0755C10.9517 23.3449 11.4713 23.4877 12.0016 23.4877C12.532 23.4877 13.0516 23.3449 13.5082 23.0755C13.9646 22.8062 14.341 22.4206 14.6021 21.9595C14.8742 21.479 14.7053 20.8688 14.2247 20.5966C13.7441 20.3245 13.1339 20.4935 12.8618 20.974C12.7711 21.1341 12.6428 21.264 12.4919 21.353C12.3411 21.4419 12.1722 21.4877 12.0016 21.4877C11.8311 21.4877 11.6621 21.4419 11.5114 21.353C11.3605 21.264 11.2321 21.1341 11.1415 20.974Z"
        fill="#141C36"
      />
      {active && <circle cx="18" cy="6" r="6" fill="#0073C4" />}
    </svg>
  );
};

export default NotificationIcon;
