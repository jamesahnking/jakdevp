import React from 'react';


import {
    DescContainer,
    DescColContainer,
    DescCol2,
    DescriptionTextP,
    DescriptionTitle,
    DescOl,
    DescUl,
    DescLi,

  } from "./ProjectElements";

  
  const Project5Description = ({
  
  Question0,
  Question1,
  Question2,
  Question3,
  Paragraph0,
  Paragraph1,
  Paragraph2,
  Paragraph3a,
  Paragraph3b,
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
  PlistItem1,
  PlistItem2,
  PlistItem3,
  PlistItem4,
  PlistItem5,
  PlistItem6,
  PlistItem7,
  PlistItem8,
 
  

}) => {

  return (
      <DescContainer>
        <DescColContainer>
            <DescCol2>
                    <DescriptionTitle>{ Question1 }</DescriptionTitle>
                    <DescUl>
                        <DescLi>{PlistItem1}</DescLi>
                        <DescLi>{PlistItem2}</DescLi>
                        <DescLi>{PlistItem3}</DescLi>
                        <DescLi>{PlistItem4}</DescLi>
                        <DescLi>{PlistItem5}</DescLi>
                        <DescLi>{PlistItem6}</DescLi>
                        <DescLi>{PlistItem7}</DescLi>
                        <DescLi>{PlistItem8}</DescLi>
                    </DescUl>     

                    <DescriptionTitle>{ Question2 }</DescriptionTitle>
                    
                    <DescOl>
                        <DescLi>{SlistItem1}</DescLi>
                        <DescLi>{SlistItem2}</DescLi>
                        <DescLi>{SlistItem3}</DescLi>
                        <DescLi>{SlistItem4}</DescLi>
                        <DescLi>{SlistItem5}</DescLi>
                        <DescLi>{SlistItem6}</DescLi>
                        <DescLi>{SlistItem7}</DescLi>
                        <DescLi>{SlistItem8}</DescLi>
                        <DescLi>{SlistItem9}</DescLi>
                        <DescLi>{SlistItem10}</DescLi>
                        <DescLi>{SlistItem11}</DescLi>
                        <DescLi>{SlistItem12}</DescLi>
                        <DescLi>{SlistItem13}</DescLi>
                        <DescLi>{SlistItem14}</DescLi>
                    </DescOl>              
                    
            </DescCol2>
        </DescColContainer>
        </DescContainer>
  )
}

export default Project5Description;