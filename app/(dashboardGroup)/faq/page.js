import Link from "next/link";
import tileStack from "@/mocks/home-page/faq.json";

const CardComponent = (props) => {
  const { title, description, url } = props;
  return (
    <Link href={url} className="col-span-6 self-stretch">
      <div className="flex h-full flex-col rounded-xl border border-gray-medium p-6">
        <p className="text-xl font-normal">{title}</p>
        <p className="text-sm font-normal">{description}</p>
      </div>
    </Link>
  );
};
export default function FAQ() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-12 items-center">
        <h1 className="col-span-11 mb-6 text-center text-[34px]">
          Coach Training & FAQ
        </h1>
        <div className="col-span-11 grid grid-cols-12 gap-7">
          {tileStack.tileStack.map((item) => (
            <CardComponent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
}
