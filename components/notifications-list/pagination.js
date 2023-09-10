import React from "react";
import Image from "next/image";
import PaginationFirst from "@/public/assets/icons/paginationFirst.svg";
import PaginationLast from "@/public/assets/icons/PaginationLast.svg";
import arrowRight from "@/public/assets/icons/arrow-right.svg";
import arrowLeft from "@/public/assets/icons/arrow-left.svg";
import Select from "../shared/select";

const Pagination = () => {
  return (
    <div className="flex items-center justify-center bg-white py-4">
      <p className="inline-flex items-center justify-center px-4">
        <span className="text-sm font-bold">Notifications per page</span>
        <span>
          <Select
            options={[{ label: 7, value: 7 }]}
            className="form-select ml-2 border-x-0 border-b-2 border-t-0 border-black/10 font-bold text-blue-light focus:outline-none focus:ring-2 focus:ring-blue-light"
          />
        </span>
        <button
          className="px-2"
          onClick={() => {}}
          disabled={false}
          data-automation-id="table-pagination-first"
        >
          <Image src={PaginationFirst} alt="Pagination First" />
        </button>
        <button
          className="px-2"
          onClick={() => {}}
          disabled={false}
          data-automation-id="table-pagination-prev"
        >
          <Image src={arrowLeft} alt="Arrow Left" />
        </button>
        <span className="text-sm font-bold">{`Displaying 1 - 7 of 17`}</span>
        <button
          className="px-2"
          onClick={() => {}}
          disabled={false}
          data-automation-id="table-pagination-next"
        >
          <Image src={arrowRight} alt="Arrow Right" />
        </button>
        <button
          className="px-2"
          onClick={() => {}}
          disabled={false}
          data-automation-id="table-pagination-last"
        >
          <Image src={PaginationLast} alt="Pagination Last" />
        </button>
      </p>
    </div>
  );
};

export default Pagination;
