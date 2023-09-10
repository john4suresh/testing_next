import React, { Fragment } from "react";
import Breadcrumbs from "@/components/breadcrumbs";

const FAQLayout = ({ children }) => {
  return (
    <Fragment>
      <Breadcrumbs />
      {children}
    </Fragment>
  );
};

export default FAQLayout;
