import React from "react";
import {
  EditorialSecContainer,
  EditorialSecWrapper,
  EditorialRowA,
  EditorialSecCol1,
  EditorialSecCol2,
  EditorialSecImgWrap,
  EditorialSecImgPri,
  EditorialTextp} from "./ProjectElements";

const ProjectEditiorialSec = ({ ImageSecondary, ImageSecondaryAlt, imgStartEd }) => {
  return (
    <>
    <EditorialSecContainer>
        <EditorialSecWrapper>
        <EditorialRowA>
            <EditorialSecCol1>
            <EditorialSecImgWrap>
                    <EditorialSecImgPri src={ImageSecondary} alt={ImageSecondaryAlt} />
                </EditorialSecImgWrap>    
                
            </EditorialSecCol1>
              <EditorialSecCol2>
                <EditorialTextp>
                    Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est 
                    eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas 
                    assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum 
                    necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum

                </EditorialTextp>
              </EditorialSecCol2>
        </EditorialRowA>
        </EditorialSecWrapper>
    </EditorialSecContainer>
    </>
  );
};

export default ProjectEditiorialSec;
