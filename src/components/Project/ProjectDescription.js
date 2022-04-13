import React from 'react'
import { FaReact, FaBootstrap, FaNodeJs, FaEthereum } from 'react-icons/fa';
import {
    DescContainer,
    DescColContainer,
    DescCol1,
    DescCol2,
    DescriptionTextP,
    StackItem,
    DescriptionTitle
  } from "./ProjectElements";


const ProjectDescription = ({
  stackTitle,
  stackItem0,  
  stackItem1,  
  stackItem2,  
  stackItem3,
  Question0,
  Answer0,
  Question1,
  Answer1,  
  Question2,
  Answer2,
  Question3,
  Answer3,

}) => {
  return (
      <DescContainer>
 
        <DescColContainer>
            <DescCol1>
                    <DescriptionTitle>{ stackTitle }</DescriptionTitle> 
                    <StackItem>{ stackItem0 }</StackItem>
                    <StackItem>{ stackItem1 }</StackItem>
                    <StackItem>{ stackItem2 }</StackItem>
                    <StackItem>{ stackItem3 }</StackItem>

            </DescCol1>

            <DescCol2>
                    <DescriptionTitle>{ Question0 }</DescriptionTitle>
                    <DescriptionTextP>{ Answer0 }</DescriptionTextP>
                    
                    <DescriptionTitle>{ Question1 }</DescriptionTitle>
                    <DescriptionTextP>{ Answer1 }</DescriptionTextP>
                    
                    <DescriptionTitle>{ Question2 }</DescriptionTitle>
                    <DescriptionTextP>{ Answer2 }</DescriptionTextP>
                    
                    <DescriptionTitle>{ Question3 }</DescriptionTitle>
                    <DescriptionTextP>{ Answer3 }</DescriptionTextP>
                    
           
           
           
           
           
           
           
           
           
           
           
           
            </DescCol2>
        </DescColContainer>
        </DescContainer>
  )
}

export default ProjectDescription;