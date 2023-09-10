import Link from "next/link";
import Image from "next/image";
import Button from "@/components/shared/button";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";

export default function Completed() {
  return (
    <div className="text-center">
      <p className="h4 !font-semibold">
        Thanks for your application! We will review and get back to you soon.
      </p>
      <div className="pt-16">
        <Link href="/login">
          <Button
            variant="secondary"
            id="back-to-skillsoft-coaching"
            text="Back to Skillsoft Coaching"
            className="inline-flex px-6 py-3 text-2xl font-semibold"
            icon={<Image src={arrowLeft} alt="" width={24} height={24} />}
          />
        </Link>
      </div>
    </div>
  );
}
