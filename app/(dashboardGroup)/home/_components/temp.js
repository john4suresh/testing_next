/* eslint-disable tailwindcss/no-custom-classname */
/* eslint-disable no-console */
"use client";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { format } from "date-fns";
import Card from "@/components/shared/card";
import Accordion from "@/components/shared/accordion";
import Button from "@/components/shared/button";
import learn from "@/public/assets/icons/learn.svg";
import Alert from "@/components/shared/alert";
import Task from "@/components/shared/task";
import UpcomingSession from "@/components/upcoming-session";
import arrowDownSmall from "@/public/assets/icons/arrowDownSmall.svg";
import Modal from "@/components/shared/modal";

// mocks
import todo from "@/mocks/home-page/todo.json";
import completed from "@/mocks/home-page/completed";
import recommended from "@/mocks/home-page/recommended.json";
import engagementBanner from "@/mocks/home-page/engagementBanner.json";
import timezone from "@/mocks/home-page/timezone.json";
import sessionReporting from "@/mocks/home-page/sessionReporting.json";
import upcomingSessions from "@/mocks/home-page/upcomingSessions.json";
import useSWR from "swr";

export default function CoachDashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isViewAll, setIsViewAll] = useState(false);
  const [sessionReportingMock, setSessionReportingMock] = useState([]);

  const onOpenModal = () => {
    setIsModalOpen(true);
  };

  const onCloseModal = () => {
    setIsModalOpen(false);
  };

  const onHandleViewAllSessionReports = () => {
    const mock = [...sessionReporting.results];
    setIsViewAll(!isViewAll);
    setSessionReportingMock(!isViewAll ? mock : mock.slice(0, 2));
  };

  const onHandleTodo = () => {
    console.log("todo");
  };

  const onHandleCompleteSession = (e) => {
    /*
            For "completed session" id's are "yes" & "no",
            trigger a function based on a id of the target.
        */
    const { id } = e.target;
    if (id === "no") {
      onOpenModal();
    }
  };

  const onHandleLateCancelSession = () => {
    console.log("late cancel session");
  };

  const onHandleSessionReporting = (identifier) => {
    switch (identifier) {
      case "completed_call":
        return onHandleCompleteSession;
      case "late_cancel":
        return onHandleLateCancelSession;
      default:
        return;
    }
  };

  const onHandleUpcomingSession = (e) => {
    /*
            For "upcoming session" id's are "chat", "join_now",
            "view_agenda", "view_notes", "add_notes" trigger a
            function based on a id of the target.
        */
  };

  useEffect(() => {
    const mock = sessionReporting.results;

    if (mock?.length > 0) {
      setSessionReportingMock(mock.slice(0, 2));
    }
  }, []);

  return (
    <div className="grid grid-cols-12 pb-6 pr-6">
      <div
        className={clsx("col-span-12 xl:col-span-11", {
          "-mt-2": timezone.isSwitchTimeZone === true,
        })}
      >
        {/* Timezone Alert */}
        {timezone.isSwitchTimeZone && (
          <div className="-mt-16">
            <Alert type="warning">
              {timezone.title}
              <Button
                variant="link"
                id="changeTimezone"
                text={timezone.changeTimezone}
              />
            </Alert>
          </div>
        )}
        {/* Engagement Banner */}
        <Card className="mb-9" type="banner">
          <div className="flex flex-col items-center justify-between lg:flex-row">
            <div className="flex flex-col items-center justify-center lg:flex-row">
              <Image
                src={engagementBanner.profileURL}
                alt="profile image"
                width={96}
                height={96}
                className="rounded-full"
              />
              <div className="pb-6 pt-4 text-center lg:py-0 lg:pl-3 lg:text-left">
                <h1 className="break-words">
                  Welcome back, {engagementBanner?.firstName}!
                </h1>
                <p>{format(new Date(), "eeee, MMMM dd, yyyy")}</p>
              </div>
            </div>
            <div className="flex px-16 text-center">
              <div className="w-16">
                <p className="h3 pb-2 text-green-dark">
                  {engagementBanner?.sessionsThisWeek}
                </p>
                <p className="caption !text-navy">Session this week</p>
              </div>
              <div className="mx-6 w-16">
                <p className="h3 pb-2 text-green-dark">
                  {engagementBanner?.activeClients}
                </p>
                <p className="caption !text-navy">Active clients</p>
              </div>
              <div className="w-16">
                <p className="h3 pb-2 text-gray-dark">
                  {engagementBanner?.completedSessions}
                </p>
                <p className="caption !text-navy">Completed Sessions</p>
              </div>
            </div>
          </div>
        </Card>
        {/* Center Part */}
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="xs:col-span-12 lg:col-span-8 xl:col-span-9">
            {/* Session Reporting */}
            <h2 className="mb-4">
              Complete your session reporting ({sessionReporting.count})
            </h2>
            {sessionReportingMock.map((details) => (
              <Fragment key={details.id}>
                <Task
                  type={details?.identifier}
                  details={details}
                  eventHandler={onHandleSessionReporting(details?.identifier)}
                />
              </Fragment>
            ))}
            <div className="inline-flex w-full justify-center">
              <Button
                id={isViewAll ? "viewLess" : "viewAll"}
                text={isViewAll ? "View less" : "View all"}
                icon={
                  <Image
                    src={arrowDownSmall}
                    alt="expand"
                    className={clsx("order-2 mx-1 mt-1", {
                      "rotate-180": isViewAll,
                    })}
                    width={18}
                    height={18}
                  />
                }
                variant="link"
                className="inline-flex font-semibold"
                onClick={onHandleViewAllSessionReports}
              />
            </div>
            {/* Session Reporting Modal: Completed session and late cancel session */}
            <Modal
              isOpen={isModalOpen}
              onCloseModal={onCloseModal}
              title="Session reporting"
            >
              <div className="text-center">
                <p className="body mb-4 !text-navy">
                  <span className="block">
                    Please tell us more about the session
                  </span>
                  <span>
                    Please reach out to your coaching guide if you need help
                    selecting a response.
                  </span>
                </p>
                <div className="mb-4">
                  <Button
                    id="lateCancel"
                    text="Report this session as a late cancel"
                    variant="secondary"
                    className="mb-4"
                  />
                  <Button
                    id="giveSessionBack"
                    text="This was a late cancel or didn't take place, give the session back to the client"
                    variant="secondary"
                  />
                </div>
              </div>
            </Modal>
            {/* Upcoming sessions */}
            <div className="my-10">
              <p className="h2 mb-4">All upcoming sessions</p>
              {upcomingSessions.upcoming_sessions.length > 0 ? (
                <>
                  {upcomingSessions.upcoming_sessions.map((details) => (
                    <Fragment key={details.id}>
                      <UpcomingSession
                        details={details}
                        eventHandler={onHandleUpcomingSession}
                      />
                    </Fragment>
                  ))}
                  <div className="text-center">
                    <Link
                      href="/schedule"
                      className="link"
                      data-automation-id="viewFullSchedule"
                    >
                      View full schedule
                    </Link>
                  </div>
                </>
              ) : (
                <p>You have no upcoming sessions</p>
              )}
            </div>
            {/* To do */}
            <div className="mb-10">
              <Accordion title="To do">
                {todo.todo.map((details) => (
                  <Fragment key={details.title}>
                    <Task
                      type="todo"
                      details={details}
                      eventHandler={onHandleTodo}
                    />
                  </Fragment>
                ))}
              </Accordion>
            </div>
            {/* Completed */}
            <div className="mb-10">
              <Accordion title="Completed">
                {completed.completed.map((details, index) => (
                  <Fragment key={details.title}>
                    <Task type="completed" details={details} />
                  </Fragment>
                ))}
              </Accordion>
            </div>
          </div>
          {/* Recommended */}
          <div className="xs:col-span-12 lg:col-span-4 xl:col-span-3">
            <h2 className="mb-4">Recommended</h2>
            <Card type="recommended">
              <Image src={learn} alt="" className="mx-auto mb-4" />
              <p className="h3 mb-1">{recommended.title}</p>
              <p className="body">{recommended.description}</p>
              <div className="mt-10 text-right">
                <Button
                  id="beginRecommended"
                  text="Begin"
                  variant="secondary"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
