import React from "react";
import {
  EditorialSecContainer,
  EditorialSecWrapper,

  EditorialRowB,
  EditorialSecCol1,
  EditorialSecCol2,
  EditorialSecImgWrap,
  EditorialSecImgPri,
  EditorialTextp,
  EditorialTextWrapper
} from "./ProjectElements";

const ProjectEditiorialTer = ({ ImageSecondary, ImageSecondaryAlt, imgStartEd }) => {
  return (
    <>
    <EditorialSecContainer>
        <EditorialSecWrapper>
        <EditorialRowB>
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
        </EditorialRowB>
        
        </EditorialSecWrapper>
    </EditorialSecContainer>

    </>
  );
};

export default ProjectEditiorialTer;
