import React from "react";
import {
  HeaderContainer,
  HeaderBg,
  HeaderContent,
  HeaderP,
  Headerh1,
  TextWrapper,
  TopLine 

} from "./ProjectElements";

const ProjectHeader = () => {
  return (
    <HeaderContainer>
      <HeaderBg></HeaderBg>
      <HeaderContent>
      
      <TopLine>Project</TopLine> 

      <TextWrapper>
        <Headerh1>Blockchain Project 1</Headerh1>
        <HeaderP>
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit,{" "}
        </HeaderP>
        </TextWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default ProjectHeader;
