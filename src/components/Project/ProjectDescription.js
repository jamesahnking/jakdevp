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


const ProjectDescription = () => {
  return (
      <DescContainer>
 
        <DescColContainer>
            <DescCol1>
                    <DescriptionTitle>Tech Stack</DescriptionTitle> 
                    <StackItem><FaEthereum/></StackItem>
                    <StackItem><FaReact /></StackItem>
                    <StackItem><FaNodeJs /></StackItem>
                    <StackItem><FaBootstrap /></StackItem>

            </DescCol1>

            <DescCol2>

                    <DescriptionTitle>Et harum quidem rerum facilis est et expedita distinctio?</DescriptionTitle>

                    <DescriptionTextP>
                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem 
                    accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis                     
                    </DescriptionTextP>
                    
            </DescCol2>
        </DescColContainer>
        </DescContainer>
  )
}

export default ProjectDescription;