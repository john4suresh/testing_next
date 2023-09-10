import Card from "@/components/shared/card";
import PropTypes from "prop-types";

export default function KPICard({ title, data }) {
  return (
    <div className="mb-[40px]">
      {title && <h3 className="mb-3">{title}</h3>}
      <Card className="flex flex-wrap justify-center divide-x-0 divide-gray-medium sm:divide-x-2 ">
        {data.map((item, index) => {
          return (
            <div
              key={index}
              className={"my-2 w-full px-4 text-center font-bold sm:w-1/3"}
            >
              <div className=" text-5xl text-blue-light sm:text-7xl md:text-5xl">
                {item.value}
              </div>
              <div className="mt-4 text-base">{item.label}</div>
            </div>
          );
        })}
      </Card>
    </div>
  );
}

KPICard.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.string,
    })
  ),
};
