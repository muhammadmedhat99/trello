import { OrganizationList } from "@clerk/nextjs";
import React from "react";

type Props = {};

const CreateOrganizationPage = (props: Props) => {
  return (
    <div>
      <OrganizationList
        hidePersonal
        afterSelectOrganizationUrl="/organization/:id"
        afterCreateOrganizationUrl="/organization/:id"
      />
    </div>
  );
};

export default CreateOrganizationPage;
