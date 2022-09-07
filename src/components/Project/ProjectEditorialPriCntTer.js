import React from "react";
import {
  EditorialContainer,
  EditorialImgWrap,
  EditorialWrapper,
  EditorialImgPri,
  EditorialPriTextPCntr,
} from "./ProjectElements";

const ProjectEditorialPriCntTer = ({
  ImagePrimary,
  ImagePrimaryAlt,
  ImagePriText,
  ImageSecondary,
  ImageSecondaryAlt,
  ImageSecText,
  ImageTertiary,
  ImageTertiaryAlt,
  ImageTerText,
}) => {
  return (
    <>
      <EditorialContainer>
        <EditorialWrapper>
          <EditorialImgWrap>
            <EditorialImgPri src={ImageTertiary} alt={ImageTertiaryAlt} />
          </EditorialImgWrap>
          <EditorialPriTextPCntr> { ImageTerText } </EditorialPriTextPCntr>
        </EditorialWrapper>
      </EditorialContainer>
    </>
  );
};

export default ProjectEditorialPriCntTer;
