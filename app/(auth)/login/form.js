"use client";
import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { dataCenter } from "@/lib/utils";
import Input from "@/components/shared/input";
import Button from "@/components/shared/button";
import Label from "@/components/shared/label";
import { toast } from "@/components/shared/toast/use-toast";
import SkillsoftLogo from "@/public/static/skillsoft-coaching-logo.svg";
import incomplete from "@/public/assets/icons/incomplete.svg";

export default function LoginForm() {
  const { handleSubmit, control, register } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const searchParams = useSearchParams();

  async function onSubmit(data) {
    setIsLoading(true);

    const signInResult = await signIn("credentials", {
      email: data.email,
      password: data.password,
      callbackUrl: searchParams?.get("from") || "/home",
    });

    setIsLoading(false);

    if (!signInResult?.ok) {
      return toast({
        title: "Something went wrong.",
        description: "Your sign in request failed. Please try again.",
        variant: "destructive",
      });
    }
  }

  return (
    <div className="flex flex-1 flex-col">
      <Image
        src={SkillsoftLogo}
        alt="skillsoft logo"
        className="mb-4 min-h-[auto] w-4/5 min-w-[50%]"
      />
      <h1 className="mb-8 text-3xl font-light text-[#10161a]">
        Coach Platform
      </h1>
      <div className="mb-4 flex rounded-md border border-warning bg-yellow-light px-5 py-3">
        <div className="mr-3 h-6 w-6">
          <Image src={incomplete} alt="incomplete" className="mr-6" />
        </div>
        <div className="text-gray-veryDark">
          <p className="text-base tracking-wide">
            You are signing in as a coach to{" "}
            <span className="font-bold">
              {dataCenter()?.isUS ? "US" : "EU"} data center.
            </span>
            <br />
            <a href={dataCenter()?.url} className="font-bold text-blue-light">
              Switch to sign into to {dataCenter()?.isUS ? "EU" : "US"} data
              center.
            </a>
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <Label htmlFor="email" className="mb-2 text-base font-normal">
          Email address
        </Label>
        <Input
          {...register("email")}
          label="Email"
          disabled={isLoading}
          name="email"
          className="mb-4"
        />
        <Label htmlFor="password" className="mb-2 text-base font-normal">
          Password
        </Label>
        <Input
          {...register("password")}
          label="Password"
          disabled={isLoading}
          name="password"
          type="password"
        />
        <Button
          type="submit"
          variant="primary"
          text="Login"
          loading={isLoading}
          className="my-8 w-fit rounded-[5px] px-4 py-2 text-base"
          data-automation-id="log_in"
        >
          Login
        </Button>
      </form>
      <div>
        <Link
          className="text-base font-semibold leading-6 text-blue-light"
          data-automation-id="forgot_password"
          href={"/forget-password"}
        >
          Forgot your password?
        </Link>
        <p className="mt-3 text-gray-veryDark">
          Don&apos;t have an account?{" "}
          <Link
            href="/job-application"
            className="font-semibold text-blue-light"
          >
            Apply Here
          </Link>
        </p>
      </div>
      <div className="mt-auto">
        <a
          className="text-sm font-bold leading-6 text-blue-light"
          href="http://support.skillsoft.com/coaching"
          target="_blank"
          data-automation-id="contact_support"
          rel="noreferrer noopener"
        >
          Contact Support
        </a>
        <p className="mb-8 mt-4 text-[10px] font-normal leading-4">
          © Copyright 2023 Skillsoft Limited - All rights reserved.
        </p>
      </div>
    </div>
  );
}
