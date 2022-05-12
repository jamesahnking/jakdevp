import React from 'react';


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
  } from "./ProjectElements";

  
  const Project1Description = ({
  
  stackTitle,
  stackItem0,  
  stackItem1,  
  stackItem2,  
  stackItem3,  
  Question0,
  Question1,
  Question2,
  Question3,
  ListItem0,
  Paragraph1,
  Paragraph2,
  Paragraph3a,
  Paragraph3b,
  

}) => {

  return (
      <DescContainer>
 
        <DescColContainer>
            <DescCol1>
                    <StackTitle>{ stackTitle }</StackTitle> 
                    <StackItem>{ stackItem0 }</StackItem>
                    <StackItem>{ stackItem1 }</StackItem>
                    <StackItem>{ stackItem2 }</StackItem>
                     <StackItemImg src={stackItem3} alt={"material icon"}/>
            </DescCol1>

            <DescCol2>
                    <DescriptionTitle>{ Question0 }</DescriptionTitle>
                    <DescriptionTextP>{ ListItem0 }</DescriptionTextP>
                                                
                    <DescriptionTitle>{ Question1 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph1 }</DescriptionTextP>
                   
                    <DescriptionTitle>{ Question2 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph2 }</DescriptionTextP>
                                 
                    <DescriptionTitle>{ Question3 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph3a }</DescriptionTextP>
                    <DescriptionTextP>{ Paragraph3b }</DescriptionTextP>

            </DescCol2>
        </DescColContainer>
        </DescContainer>
  )
}

export default Project1Description;