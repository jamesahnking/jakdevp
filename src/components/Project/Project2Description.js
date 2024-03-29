import React from 'react';
import LinkModule from '../LinkModule';
import { HomeObjTwo } from "../../components/Data";

import {
    DescContainer,
    DescColContainer,
    DescCol1,
    DescCol2,
    DescriptionTextP,
    StackItem,
    DescriptionTitle,
    StackTitle,
    StackItemImg,
    DescUl,
    DescLi

  } from "./ProjectElements";

  
  const Project2Description = ({
  
  stackTitle,
  stackItem0,  
  stackItem1,  
  stackItem2,  
  stackItem3, 
  stackItem4,
  stackItem5,
  Question0,
  Question1,
  Question2,
  Question3,
  Paragraph0,
  Paragraph1,
  Paragraph2,
  Paragraph3a,
  Paragraph3b,
  PlistItem1,
  PlistItem2,
  PlistItem3,
  PlistItem4,
  PlistItem5,
  PlistItem6,
  PlistItem7,
  PlistItem8,
  SlistItem1,
  SlistItem2,
  SlistItem3,
  SlistItem4,
  SlistItem5,
  SlistItem6,
  SlistItem7,
  SlistItem8,
  SlistItem9,
  SlistItem10,
  SlistItem11,
  SlistItem12,
  SlistItem13,
  SlistItem14,

}) => {

  return (
      <DescContainer>      
        <DescColContainer>
            <DescCol1>
                    <StackTitle>{ stackTitle }</StackTitle> 
                    <StackItem>{ stackItem0 }</StackItem>
                    <StackItem>{ stackItem1 }</StackItem>
                    <StackItem><StackItemImg src={stackItem2} alt={"NextJS Icon"}/></StackItem>
                    <StackItem><StackItemImg src={stackItem3} alt={"Truffle Icon"}/></StackItem>
                    <StackItem><StackItemImg src={stackItem4} alt={"Tailwind Icon"}/></StackItem>
            </DescCol1>

            <DescCol2>                                             
                    <DescriptionTitle>{ Question1 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph1 }</DescriptionTextP>
                                        {/* Repo Button */}
                   
                    <DescriptionTitle>{ Question2 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph2 }</DescriptionTextP>
                    <LinkModule {...HomeObjTwo}/>
                    <DescriptionTitle>{ Question0 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph0 }</DescriptionTextP>
            </DescCol2>
        </DescColContainer>
      </DescContainer>
  )
}

export default Project2Description;