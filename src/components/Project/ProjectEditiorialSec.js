import React from "react";
import {
  EditorialSecWrapper,
  EditorialRow,
  EditorialSecCol1,
  EditorialSecCol2,
  EditorialSecImgWrap,
  EditorialSecImgPri,
  EditorialTextp,
} from "./ProjectElements";

const ProjectEditiorialSec = ({ ImageSecondary, ImageSecondaryAlt, imgStartEd }) => {
  return (
    <>
      <EditorialSecWrapper>
        <EditorialRow imgStartEd={imgStartEd}>
          <EditorialSecCol1>
            <EditorialSecImgWrap>
              <EditorialSecImgPri
                src={ImageSecondary}
                alt={ImageSecondaryAlt}
              />
              
            </EditorialSecImgWrap>
          </EditorialSecCol1>
          <EditorialSecCol2>
            <EditorialTextp>
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </EditorialTextp>
          </EditorialSecCol2>
        </EditorialRow>
      </EditorialSecWrapper>
    </>
  );
};

export default ProjectEditiorialSec;
