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
                    <StackItem><StackItemImg src={stackItem4} alt={"Tailwidn Icon"}/></StackItem>
                    {/* <StackItem><StackItemImg src={stackItem4} alt={"Truffle Icon"}/></StackItem>
                    <StackItem><StackItemImg src={stackItem5} alt={"Next J"}/></StackItem> */}


            </DescCol1>

            <DescCol2>                                             
                    <DescriptionTitle>{ Question1 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph1 }</DescriptionTextP>
                    <DescriptionTitle>{ Question2 }</DescriptionTitle>
                    <DescriptionTextP>{ Paragraph2 }</DescriptionTextP>

                    <DescUl>
                        <DescLi>{PlistItem1}</DescLi>
                        <DescLi>{PlistItem2}</DescLi>
                        <DescLi>{PlistItem3}</DescLi>
                        <DescLi>{PlistItem4}</DescLi>
                        <DescLi>{PlistItem5}</DescLi>
                    </DescUl>
                                 
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

export default Project2Description;