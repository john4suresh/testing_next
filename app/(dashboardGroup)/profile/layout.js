import React, { Fragment } from "react";
import Breadcrumbs from "@/components/breadcrumbs";

const ProfileLayout = ({ children }) => {
  return (
    <Fragment>
      <Breadcrumbs />
      {children}
    </Fragment>
  );
};

export default ProfileLayout;
