import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { StList } from "src/components";
import { ManagementTemplate } from "src/components/common/Managements/ManagementTemplate";
import * as S from "./styled";

export const ManagementPage: React.FC = () => {
  const location = useLocation();
  const manageType = location.pathname.split("/")[2];
  const [bool, setBool] = useState(false);
  return (
    <>
      <ManagementTemplate
        managementType={manageType as any}
        search={
          <>
            <StList />
          </>
        }
        goal={<></>}
      />
    </>
  );
};
