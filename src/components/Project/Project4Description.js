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
    DescUl,
    DescLi
  } from "./ProjectElements";

  
  const Project4Description = ({
  
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
  TlistItem1,
  TlistItem2,
  TlistItem3,
  TlistItem4,
  TlistItem5,
  TlistItem6,
  TlistItem7,
  TlistItem8,
  TlistItem9,
  TlistItem10,
  TlistItem11,
  TlistItem12,
  TlistItem13,
  

}) => {

  return (
      <DescContainer>
 
        <DescColContainer>
            <DescCol1>
                    <StackTitle>{ stackTitle }</StackTitle> 
                    <StackItem>{ stackItem0 }</StackItem>
                    <StackItem>{ stackItem1 }</StackItem>
                    <StackItem>{ stackItem2 }</StackItem>
                    <StackItem><StackItemImg src={stackItem3} alt={"Material UI Icon"}/></StackItem>
                    <StackItem><StackItemImg src={stackItem4} alt={"Truffle Icon"}/></StackItem>
                    <StackItem><StackItemImg src={stackItem5} alt={"Truffle Icon"}/></StackItem>
            </DescCol1>

            <DescCol2>

                                                
                    <DescriptionTitle>{ Question1 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph1 }</DescriptionTextP>
                   
                    <DescriptionTitle>{ Question2 }</DescriptionTitle>
                    <DescUl>
                        <DescLi>{PlistItem1}</DescLi>
                        <DescLi>{PlistItem2}</DescLi>
                        <DescLi>{PlistItem3}</DescLi>
                        <DescLi>{PlistItem4}</DescLi>
                    </DescUl>
                    <DescriptionTextP>{ Paragraph2 }</DescriptionTextP>
      
                    <DescriptionTitle>{ Question3 }</DescriptionTitle>
                    
                    <DescUl>
                        <DescLi>{TlistItem1}</DescLi>
                        <DescLi>{TlistItem2}</DescLi>
                        <DescLi>{TlistItem3}</DescLi>
                        <DescLi>{TlistItem4}</DescLi>
                        <DescLi>{TlistItem5}</DescLi>
                        <DescLi>{TlistItem6}</DescLi>
                        <DescLi>{TlistItem7}</DescLi>
                        <DescLi>{TlistItem8}</DescLi>
                        <DescLi>{TlistItem9}</DescLi>
                        <DescLi>{TlistItem10}</DescLi>
                        <DescLi>{TlistItem11}</DescLi>
                        <DescLi>{TlistItem12}</DescLi>
                        <DescLi>{TlistItem13}</DescLi>
                    </DescUl>
                    
                    
                    
                    <DescriptionTextP>{ Paragraph3a }</DescriptionTextP>
                    <DescriptionTextP>{ Paragraph3b }</DescriptionTextP>
                                 
                    <DescriptionTitle>{ Question0 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph0 }</DescriptionTextP>
            </DescCol2>
        </DescColContainer>
        </DescContainer>
  )
}

export default Project4Description;