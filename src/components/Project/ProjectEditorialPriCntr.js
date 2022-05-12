import React from "react";
import {
  EditorialContainer,
  EditorialImgWrap,
  EditorialWrapper,
  EditorialImgPri,
  EditorialPriTextPCntr,
} from "./ProjectElements";

const ProjectEditorialPriCntr = ({
  ImagePrimary,
  ImagePrimaryAlt,
  ImagePriText,
  
}) => {
  return (
    <>
      <EditorialContainer>
        <EditorialWrapper>
          <EditorialImgWrap>
            <EditorialImgPri src={ImagePrimary} alt={ImagePrimaryAlt} />
          </EditorialImgWrap>
          <EditorialPriTextPCntr> { ImagePriText } </EditorialPriTextPCntr>
        </EditorialWrapper>
      </EditorialContainer>
    </>
  );
};

export default ProjectEditorialPriCntr;
