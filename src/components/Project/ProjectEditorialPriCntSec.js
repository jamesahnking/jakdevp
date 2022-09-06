import React from "react";
import {
  EditorialContainer,
  EditorialImgWrap,
  EditorialWrapper,
  EditorialImgPri,
  EditorialPriTextPCntr,
} from "./ProjectElements";

const ProjectEditorialPriCntSec = ({
  ImagePrimary,
  ImagePrimaryAlt,
  ImagePriText,
  ImageSecondary,
  ImageSecondaryAlt,
  ImageSecText
}) => {
  return (
    <>
      <EditorialContainer>
        <EditorialWrapper>
          <EditorialImgWrap>
            <EditorialImgPri src={ImageSecondary} alt={ImageSecondaryAlt} />
          </EditorialImgWrap>
          <EditorialPriTextPCntr> { ImageSecText } </EditorialPriTextPCntr>
        </EditorialWrapper>
      </EditorialContainer>
    </>
  );
};

export default ProjectEditorialPriCntSec;
