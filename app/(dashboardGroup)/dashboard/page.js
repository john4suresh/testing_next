"use client";
import BarChartComponent from "@/components/shared/charts/bar-chart";
import DonutChart from "@/components/shared/charts/donut-chart";
import React from "react";
import DashboardData from "./mock";
import KPICard from "./kpi-card";
import { Card, CardFooter, CardHeader } from "@/components/shared/card-v2";
import Button from "@/components/shared/button";

const page = () => {
  const {
    coaching_information: {
      clients_sessions_resources,
      type_of_session,
      earnings,
      ratings,
    },
    top_focus_areas,
    top_average_age_clients,
    top_average_industries,
    top_client_roles,
    remeasurement_precentage,
    coaching_plan_precentage,
    focus_areas_precentage,
  } = DashboardData;
  return (
    <div className="mr-6 sm:mr-[100px]">
      <div>
        <h2 className="mb-4 font-bold">Your Coaching information</h2>
        <KPICard
          title="Clients, sessions & resources"
          data={clients_sessions_resources}
          customClass="mb-[40px]"
        />
        <KPICard
          title="Type of session"
          data={type_of_session}
          customClass="mb-[40px]"
        />
        <KPICard title="Earnings" data={earnings} customClass="mb-[40px]" />
        <KPICard title="Ratings" data={ratings} customClass="mb-[40px]" />
      </div>
      <div>
        <h2 className="mb-4 mt-[60px] font-bold">Your coaching analytics</h2>
        <Card className="mt-8">
          <CardHeader>Top focus areas of clients</CardHeader>
          <BarChartComponent
            title="Top focus areas of clients"
            footerText="Based on 55 Clients"
            isExportEnabled
            minValue={0}
            maxValue={600}
            data={top_focus_areas}
          />
          <CardFooter>
            <div className="text-xs text-gray-neutral">Based on 55 Clients</div>
            <Button text="Export" variant="link" />
          </CardFooter>
        </Card>
        <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-3">
          <Card className="mt-8">
            <CardHeader>Average age of your clients</CardHeader>
            <DonutChart
              data={top_average_age_clients}
              category="clients"
              chartIndexValue="age"
              valueFormatter={(number) => `${number.toString()} Clients`}
            />
            <CardFooter>
              <div className="text-xs text-gray-neutral">
                Based on 55 Clients
              </div>
              <Button text="Export" variant="link" />
            </CardFooter>
          </Card>
          <Card className="mt-8">
            <CardHeader>Top industries of your clients</CardHeader>
            <DonutChart
              data={top_average_industries}
              category="clients"
              chartIndexValue="industry"
              valueFormatter={(number) => `${number.toString()} Clients`}
            />
            <CardFooter>
              <div className="text-xs text-gray-neutral">
                Based on 55 Clients
              </div>
              <Button text="Export" variant="link" />
            </CardFooter>
          </Card>
          <Card className="mt-8">
            <CardHeader>Top roles your clients</CardHeader>
            <DonutChart
              data={top_client_roles}
              category="clients"
              chartIndexValue="role"
              valueFormatter={(number) => `${number.toString()} Clients`}
            />
            <CardFooter>
              <div className="text-xs text-gray-neutral">
                Based on 55 Clients
              </div>
              <Button text="Export" variant="link" />
            </CardFooter>
          </Card>
        </div>
        <div className="mt-8 grid grid-cols-1 gap-7 sm:grid-cols-3">
          <Card className="mt-8">
            <CardHeader>Completed remeasurement</CardHeader>
            <DonutChart
              data={remeasurement_precentage}
              category="percentage"
              chartIndexValue="key"
              isSingleValueChart
              showLegends={false}
              valueFormatter={() =>
                `${remeasurement_precentage.percentage.toString()}% complete`
              }
            />
          </Card>
          <Card className="mt-8">
            <CardHeader>Completed coaching plans</CardHeader>
            <DonutChart
              data={coaching_plan_precentage}
              isSingleValueChart
              category="percentage"
              chartIndexValue="key"
              showLegends={false}
              valueFormatter={() =>
                `${coaching_plan_precentage.percentage.toString()}% complete`
              }
            />
          </Card>
          <Card className="mt-8">
            <CardHeader>Selected focus areas</CardHeader>
            <DonutChart
              data={focus_areas_precentage}
              isSingleValueChart
              category="percentage"
              chartIndexValue="key"
              showLegends={false}
              valueFormatter={() =>
                `${focus_areas_precentage.percentage.toString()}% complete`
              }
            />
          </Card>
        </div>
      </div>
    </div>
  );
};

export default page;
