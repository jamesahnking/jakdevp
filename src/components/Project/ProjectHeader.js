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

const ProjectHeader = ({
  topLine,
  headline,
  description

}) => {
  return (
    <HeaderContainer>
      <HeaderBg></HeaderBg>
      <HeaderContent>
      
      <TopLine>{ topLine }</TopLine> 

      <TextWrapper>
        <Headerh1>{ headline }</Headerh1>
        <HeaderP>
          { description }
        </HeaderP>
        </TextWrapper>
      </HeaderContent>
    </HeaderContainer>
  );
};

export default ProjectHeader;
