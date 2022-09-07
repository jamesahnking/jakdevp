import React from "react";
import {
  EditorialContainer,
  EditorialImgWrap,
  EditorialWrapper,
  EditorialImgPri,
  EditorialPriTextPCntr,
} from "./ProjectElements";

const ProjectEditorialPriCntQua = ({
  ImagePrimary,
  ImagePrimaryAlt,
  ImagePriText,
  ImageQuatenary,
  ImageQuatenaryAlt,
  ImageQuaText
}) => {
  return (
    <>
      <EditorialContainer>
        <EditorialWrapper>
          <EditorialImgWrap>
            <EditorialImgPri src={ImageQuatenary} alt={ImageQuatenaryAlt} />
          </EditorialImgWrap>
          <EditorialPriTextPCntr> { ImageQuaText } </EditorialPriTextPCntr>
        </EditorialWrapper>
      </EditorialContainer>
    </>
  );
};

export default ProjectEditorialPriCntQua;
