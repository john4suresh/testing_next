import Image from "next/image";
import PropTypes from "prop-types";
import Card from "../card";
import complete from "@/public/assets/icons/complete.svg";
import inComplete from "@/public/assets/icons/incomplete.svg";

export default function TaskStatusList({ title, data }) {
  return (
    <Card className="!p-0">
      <ul>
        {title && (
          <li className="h4 border-b border-gray-medium p-4 !font-semibold">
            <p>{title}</p>
          </li>
        )}
        {data?.map((item) => (
          <li
            key={item}
            className="border-b border-gray-medium p-4 last:border-0"
          >
            <span className="flex justify-between">
              <p className="body mr-4 flex-1">{item?.title}</p>
              <p className="body ml-2 break-words">
                <Image
                  alt=""
                  width={24}
                  height={24}
                  src={item?.isCompleted ? complete : inComplete}
                />
              </p>
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

TaskStatusList.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array,
};
