"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import PropTypes from "prop-types";
import complete from "@/public/assets/icons/complete.svg";
import arrowRight from "@/public/assets/icons/profileRightArrow.svg";
import profileEdit from "@/public/assets/icons/profileEdit.svg";

const ProfileItem = (props) => {
  const {
    title,
    isCompleted = false,
    onEdit = () => {},
    onNavigate = () => {},
    href = "",
  } = props;
  return (
    <div>
      <Link href={href}>
        <div className="flex items-center justify-center p-4">
          <div className="flex-1">
            <p className="text-xl">{title}</p>
          </div>
          <div className="w-12 md:w-24">
            {isCompleted ? (
              <p className="inline-flex py-2">
                <Image
                  src={complete}
                  alt="Completed"
                  className="mr-2 w-6 md:mr-4 md:w-8"
                />
                <Image src={profileEdit} alt="Edit" onClick={onEdit} />
              </p>
            ) : (
              <p className="inline-flex">
                <Image
                  src={arrowRight}
                  alt="Right Arrow"
                  onClick={onNavigate}
                  className="w-8 md:w-12"
                />
              </p>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default ProfileItem;

ProfileItem.propTypes = {
  title: PropTypes.string.isRequired,
  isCompleted: PropTypes.bool.isRequired,
  href: PropTypes.string.isRequired,
  onEdit: PropTypes.func,
  onNavigate: PropTypes.func,
};
