import React from 'react';
import LinkModule from '../LinkModule';
import { HomeObjThree } from "../../components/Data";


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
    DescLi, 
  } from "./ProjectElements";

  
  const Project3Description = ({
  
  stackTitle,
  stackItem0,  
  stackItem1,  
  stackItem2,  
  stackItem3, 
  stackItem4,
  Question0,
  Question1,
  Question2,
  Question3,
  Paragraph0,
  Paragraph1,
  Paragraph2,
  Paragraph2a,
  Paragraph2b,
  Paragraph2c,
  Paragraph2d,
  Paragraph3a,
  Paragraph3b,
  PlistItem1,
  PlistItem2,
  PlistItem3,  
  PlistItem4,
  PlistItem5,
  PlistItem6,
  PlistItem7,
}) => {

  return (
      <DescContainer>
 
        <DescColContainer>
            <DescCol1>
                    <StackTitle>{ stackTitle }</StackTitle> 
                    <StackItem>{ stackItem0 }</StackItem>
                    <StackItem>{ stackItem1 }</StackItem>
                    <StackItem>{ stackItem2 }</StackItem>
                    <StackItem>{ stackItem3 }</StackItem>
                    <StackItem><StackItemImg src={stackItem4} alt={"Truffle Icon"}/></StackItem>
            </DescCol1>

            <DescCol2>                                                
                    <DescriptionTitle>{ Question1 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph1 }</DescriptionTextP>
                   
                    <DescriptionTitle>{ Question2 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph2d }</DescriptionTextP>
                    <LinkModule {...HomeObjThree}/>
                    <DescriptionTextP>{ Paragraph2b }</DescriptionTextP>
                    <DescUl>
                      <DescLi>{PlistItem5}</DescLi>
                      <DescLi>{PlistItem6}</DescLi>
                      <DescLi>{PlistItem7}</DescLi>
                    </DescUl> 
                     
                    <DescriptionTextP>{ Paragraph2 }</DescriptionTextP>

                    <DescUl>
                      <DescLi>{PlistItem1}</DescLi>
                      <DescLi>{PlistItem2}</DescLi>
                      <DescLi>{PlistItem3}</DescLi>
                      <DescLi>{PlistItem4}</DescLi>
                    </DescUl> 
          
                    <DescriptionTextP>{ Paragraph2c }</DescriptionTextP>

                    <DescriptionTitle>{ Question3 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph3a }</DescriptionTextP>
                    <DescriptionTextP>{ Paragraph3b }</DescriptionTextP>
                    <DescriptionTitle>{ Question0 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph0 }</DescriptionTextP>
            </DescCol2>
        </DescColContainer>
        </DescContainer>
  )
}

export default Project3Description;