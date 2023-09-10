import Image from "next/image";
import { Fragment } from "react";
import PropTypes from "prop-types";
import { Dialog, Transition } from "@headlessui/react";
import close from "@/public/assets/icons/close.svg";

export default function Modal({ isOpen, title, children, onCloseModal }) {
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => {}}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black opacity-65" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-2xl overflow-hidden rounded-sm bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="w-full text-right">
                  <button onClick={onCloseModal}>
                    <Image src={close} alt="close modal" />
                  </button>
                </div>
                {title && (
                  <Dialog.Title
                    as="h2"
                    className="mb-4 text-center !text-gray-veryDark"
                  >
                    {title}
                  </Dialog.Title>
                )}
                <div>{children}</div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  children: PropTypes.node,
  onCloseModal: PropTypes.func,
};
