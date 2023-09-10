const apiUrls = {
  jobApplication: {
    countryAndIcfList: "/api/v3/coach-onboarding/onboarding/county-icf-list/", //GET
    coachInformation: "/api/v3/coach-onboarding/onboarding/coach-application/", //POST
  },
  allSessions: {
    upcomingSession:
      "/api/v3/coach-dashboard/clients-scheduled-calls/upcoming/", //GET
    pastSession: "/api/v3/coach-dashboard/clients-scheduled-calls/past/", //GET
    updateCallStatus: "/api/v3/coach-dashboard/call-status-update/", // POST
  },
  payments: {
    list: "/api/v3/coach-dashboard/coach-payment-reports/",
    getPaymentDetail: ({ month, year }) =>
      `/api/v3/coach-dashboard/coach-payment-report-detail/${month}/${year}/`,
  },
  profileSettings: "/api/v3/coach-dashboard/profile-setting-items/",
  areaOfExpertise: "/api/v3/coach-dashboard/profile-update/areas_of_expertise/",
  roleExperience: "/api/v3/coach-dashboard/profile-update/role_experience/",
  professionalIndustryExperience:
    "/api/v3/coach-dashboard/profile-update/professional_industry_experience/",
  coachingIndustryExperience:
    "/api/v3/coach-dashboard/profile-update/coaching_industry_experience/",
  backgroundCheck:
    "/api/v3/coach-dashboard/profile-update/background_check_complete/",
  setVideoSettings:
    "/api/v3/coach-dashboard/profile-update/set_video_settings/",
  clientDashboard: {
    engagementBanner: (clientId) =>
      `/api/v3/coach-dashboard/client/engagement-info/${clientId}`,
    nextSession: (clientId) =>
      `/api/v3/coach-dashboard/client/next-sessions/${clientId}`,
    allUpcomingSessions: (clientId) =>
      `/api/v3/coach-dashboard/client/upcoming-sessions/${clientId}`,
    cancelSession: (clientId, sessionId) =>
      `/api/v3/coach-dashboard/client/session-event/${clientId}/${sessionId}`,
    cancelAllUpcomingSessions: (clientId) =>
      `/api/v3/coach-dashboard/client/cancel-all-sessions/${clientId}`,
    clientTaskStatus: (taskSlug, clientId) =>
      `/api/v3/coach-dashboard/client-task-status/${taskSlug}/${clientId}`,
    remeasurementProgres: (clientId) =>
      `/api/v3/coach-dashboard/client-remeasurement-progress-view/${clientId}`,
    impactReport: (clientId) =>
      `/api/v3/coach-dashboard/client-impact-report-info/${clientId}`,
    clientDetails: (clientId) =>
      `/api/v3/coach-dashboard/client/client-partial-info/${clientId}`,
    companyDocuments: (clientId) =>
      `/api/v3/coach-dashboard/client/company-docs/${clientId}`,
    coachClientNotifications: (clientId) =>
      `api/v3/coach-dashboard/coach-client-notifications/${clientId}/?page_size=3`,
  },
  client: {
    assessment: (clientId) =>
      `/api/v3/coach-dashboard/client-assessment-tabs/${clientId}`,
    viewSuggestedDeltas: (clientId) =>
      `/api/v3/coach-dashboard/view-suggested-deltas/${clientId}`,
    viewFullAssessmentResults: (clientId) =>
      `/api/v3/coach-dashboard/view-full-assessment-results/${clientId}`,
    viewFullAssessmentGroupedResults: (clientId) =>
      `/api/v3/coach-dashboard/view-full-assessment-grouped-results/${clientId}`,
    viewAssessmentAverageResults: (clientId) =>
      `/api/v3/coach-dashboard/view-assessment-average-results/${clientId}`,
    viewTopBottomSkills: (clientId) =>
      `/api/v3/coach-dashboard/view-top-bottom-skills/${clientId}`,
    viewEngagementSurveyResults: (clientId) =>
      `/api/v3/coach-dashboard/view-engagement-survey-results/${clientId}`,
    viewAssessmentCommentsAdditionalFeedback: (clientId) =>
      `/api/v3/coach-dashboard/view-assessment-comments-additional-feedback/${clientId}`,
    client360Settings: (clientId) =>
      `/api/v3/coach-dashboard/client/360-settings/${clientId}`,
    clientCompletedExercise: (clientId) =>
      `/api/v3/coach-dashboard/fetch-client-completed-exercise/${clientId}`,
    agendaQuestions: (clientId, slug, call_id) =>
      `/api/v3/coach-dashboard/agenda-questions/${clientId}/${slug}/${call_id}/`,
    postExperienceExercise: (clientId, slug) =>
      `/api/v3/coach-dashboard/client-exercises/${slug}/${clientId}/`,
    invitee360Data: (clientId) =>
      `api/v3/coach-dashboard/fetch-360-invitee-data/${clientId}/`,
    clientUploads: (clientId) =>
      `/api/v3/coach/dashboard/client-assessments/${clientId}/`,
  },
  coachHome: {
    engagementBanner: "/api/v3/coach-onboarding/onboarding/engagement-info/", //GET
    todoAndCompleted: "/api/v3/coach-dashboard/dashboard-tasks/", //GET
    upcomingSession: "/api/v3/coach-dashboard/upcoming-sessions/", //GET
    sessionReporting: "/api/v3/coach-dashboard/clients-session-reportings/", //GET
    sessionFeedback: "/api/v3/coach-dashboard/client-session-report/", //POST @params /${client_id}/${conference_call_id}/
  },
  message: {
    unreadNotification:
      "/api/v3/coach-dashboard/coach-unread-chat-notification-info/",
    coachChatClientList: "/api/v3/coach-dashboard/coach-chat-client-list/",
    coachClientChatMessages: (clientId) =>
      `/api/v3/coach-dashboard/coach-client-messages/${clientId}/?page=1&page_size=10`,
    coachClientSendMessage: (clientId) =>
      `/api/v3/coach-dashboard/coach-client-send-message/${clientId}/`,
    coachCSMChatList:
      "/api/v3/coach-dashboard/coach-cm-chat/?page=1&page_size=5",
    coachCSMSendMessage: "/api/v3/coach-dashboard/coach-cm-chat/",
    uploadFileInChat: (clientId) =>
      `/api/v3/coach-dashboard/coach-client-add-share-resource/${clientId}/`,
    focusAreaList: "api/v3/coach-dashboard/pluma-focus-areas/",
    addShareResource: (clientId) =>
      `/api/v3/coach-dashboard/coach-client-add-share-resource/${clientId}/`,
    deleteMessage: (msgId) =>
      `/api/v3/coach-dashboard/coach-client-delete-message/${msgId}/`,
    deleteCmMessage: (msgId) =>
      `/api/v3/coach-dashboard/coach-cm-delete-message/${msgId}/`,
  },
  notification: {
    coachNotificationClientList: () =>
      `/api/v3/coach-dashboard/coach-notification-client-list/`,
    coachAllNotificationList: (page = 1, pageSize = 7) =>
      notificationList(pageSize, page),
    coachAllUnreadNotificationList: (page = 1, pageSize = 7) =>
      notificationUnreadList(pageSize, page),
    coachClientIndividualNotificationList: (
      clientId,
      read_by_coach,
      page = 1,
      pageSize = 7
    ) => notificationIndividualList(clientId, read_by_coach, page, pageSize),
    markAsReadNotification: (clientId) => markAsReadNotification(clientId),
  },
};

export const {
  jobApplication,
  allSessions,
  payments,
  profileSettings,
  areaOfExpertise,
  roleExperience,
  professionalIndustryExperience,
  coachingIndustryExperience,
  backgroundCheck,
  setVideoSettings,
  clientDashboard,
  client,
  coachHome,
  message,
  notification,
} = apiUrls;

const notificationList = (pageSize, page) => {
  const allParams = {
    page_size: pageSize,
    page: page,
  };
  const queryString = new URLSearchParams(allParams).toString();
  return `api/v3/coach-dashboard/coach-clients-all-notification-list/?${queryString}`;
};

const notificationUnreadList = (pageSize, page) => {
  const allParams = {
    page_size: pageSize,
    page: page,
  };
  const queryString = new URLSearchParams(allParams).toString();
  return `api/v3/coach-dashboard/coach-clients-all-notification-list/?read_by_coach=false&${queryString}`;
};

const notificationIndividualList = (
  clientId,
  read_by_coach,
  page,
  pageSize
) => {
  const allParams = {
    read_by_coach: read_by_coach,
    page_size: pageSize,
    page: page,
  };
  for (let propName in allParams)
    allParams[propName] ?? delete allParams[propName];
  const queryString = new URLSearchParams(allParams).toString();
  return `api/v3/coach-dashboard/coach-client-notifications/${clientId}/?${queryString}`;
};

const markAsReadNotification = (clientId) => {
  if (clientId) {
    return `/api/v3/coach-dashboard/coach-client-read-notification/${clientId}/`;
  }
  return "/api/v3/coach-dashboard/coach-client-read-notification/";
};
