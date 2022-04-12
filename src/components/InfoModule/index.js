import React from "react";
// import { Button } from "../ButtonElements";
// import { Link } from 'react-router-dom';
import { ButtonLink } from '../LinkElement';


import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Column2,
  ImgWrap,
  Img,
} from "./InfoElements";

// Biding data from Data.js
const InfoModule = ({
  id,
  lightBg,
  lightText,
  imgStart,
  topLine,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  primary,
  darkText,
  towhere,
  dark,
  dark2,
}) => {
  console.log(primary);
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>

                <ButtonLink 
                to={towhere}
                primary={primary ? 1 : 0}
                dark={dark ? 1 : 0}
                dark2={dark2 ? 1 : 0}>
                  { buttonLabel }
                </ButtonLink>

                </BtnWrap>
              </TextWrapper>
            </Column1>

            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default InfoModule;
