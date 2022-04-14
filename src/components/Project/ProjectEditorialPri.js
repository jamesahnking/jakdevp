import React from "react";
import {
  EditorialContainer,
  EditorialImgWrap,
  EditorialWrapper,
  EditorialImgPri,
  EditorialPriTextP,
} from "./ProjectElements";

const ProjectEditorialPri = ({
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
          <EditorialPriTextP> { ImagePriText } </EditorialPriTextP>

        </EditorialWrapper>
      </EditorialContainer>
    </>
  );
};

export default ProjectEditorialPri;
