import Image from "next/image";

export default function CoachPlumaGuide() {
  return (
    <div className="container mx-auto max-w-6xl">
      <h1 className="mt-10 text-center text-[34px] text-navy">
        Coach and the Skillsoft Coaching guide
      </h1>
      <div className="flex flex-col p-8">
        <h3 className="text-xl">Coach Pluma Guide:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Your Coach Guide (the Skillsoft chat on your Dashboard) is your live
          human resource and support system for all your coaching on Skillsoft
          Coaching. You should feel free to message your Guide with any
          questions, suggestions or concerns 24/7. We will do our best to
          respond within 24 hours if not sooner.
        </p>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/coach-and-pluma-guide.png"
            alt="getting-started-img"
            className="mb-8"
            width={1000}
            height={1000}
          />
        </div>
        <h3 className="text-xl">Client Skillsoft Coaching Guide:</h3>
        <p className="mb-4 text-base text-gray-veryDark">
          Similar to your Guide your client has a Skillsoft Coaching Guide. They
          guide your clients through their onboarding process and serve as help
          desk support throughout their engagement. Your client&apos;s Skillsoft
          Coaching Guide will pass along relevant information to you via your
          Coach Guide. Not all clients will have the same Skillsoft Coaching
          Guide, but you will have only one Coach Guide.
        </p>
        <div className="flex flex-col items-center justify-center">
          <Image
            src="/images/client-and-pluma-guide.png"
            alt="getting-started-img"
            className="mb-8"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
