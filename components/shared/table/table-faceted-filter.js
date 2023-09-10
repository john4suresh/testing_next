import { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { ArrowUpIcon, ArrowDownIcon } from "@/components/icons";
import checked from "@/public/static/checkbox-checked.svg";
import unchecked from "@/public/static/checkbox-unchecked.svg";

export default function TableFacetedFilter({
  column,
  disabled,
  options,
  onFilter,
  placeholder = "",
}) {
  const selectedValues = column?.getFilterValue() || [];
  return (
    <Listbox
      value={selectedValues}
      onChange={(e) => {
        if (e.length === 0) {
          return column?.setFilterValue(undefined);
        }
        return onFilter(e);
      }}
      multiple
    >
      <div className="relative">
        <Listbox.Button className="relative mx-0 mb-1 mt-4 flex h-12 min-w-[20rem] max-w-xs  items-center justify-between rounded-xs border border-gray-medium bg-transparent p-3 text-base font-normal leading-[22px] text-gray-veryDark ring-offset-white focus:border-blue-light focus:outline-none focus:ring-1 focus:ring-blue-light disabled:cursor-not-allowed disabled:opacity-50">
          {selectedValues?.length ? (
            <span>{selectedValues.length} selected</span>
          ) : (
            <span className="italic text-gray-dark">{placeholder}</span>
          )}
          <ArrowDownIcon />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute z-50 flex min-w-[20rem] max-w-xs flex-col overflow-hidden rounded bg-white py-1 text-sm font-normal shadow-[2px_3px_7px_0px_rgba(0,0,0,0.08),0px_0px_2px_0px_rgba(0,0,0,0.18)]">
            {options.map((o, idx) => (
              <Listbox.Option
                key={o}
                className={({ active }) =>
                  "relative flex w-full cursor-default select-none items-center py-2.5 pl-10 pr-2 text-sm outline-none hover:bg-gray-100 focus:bg-gray-100 focus:text-gray-900"
                }
                value={o}
              >
                {({ selected }) => (
                  <>
                    <span className={`block truncate`}>{o}</span>
                    {selected ? (
                      <span className="absolute left-2 flex h-6 w-6 items-center justify-center">
                        <Image
                          src={checked}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                          alt=""
                        />
                      </span>
                    ) : (
                      <span className="absolute left-2 flex h-6 w-6 items-center justify-center">
                        <Image
                          src={unchecked}
                          width={24}
                          height={24}
                          className="h-6 w-6"
                          alt=""
                        />
                      </span>
                    )}
                  </>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
}
