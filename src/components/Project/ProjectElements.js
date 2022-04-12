import styled from 'styled-components';
import ReactPlayer from 'react-player'

// Project Header Component Styles 

export const HeaderContainer = styled.div`
    background: #eae4e9;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    height: 300px;
    position: relative;
    z-index: 1;
`;

export const HeaderContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    /* padding: 8px 24px 60px  0; */
    display: flex;
    flex-direction: column;
    align-items: left;
    /* margin-bottom: 80px; */
`;

export const HeaderBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const Headerh1 = styled.h1`
    color: #fff;
    font-size:60px;
    text-align: left;
     position:relative;
     padding: 10;
    
`;

export const HeaderP = styled.p`
    margin-top: 10px;
    color: #fff;
    font-size: 18px;
    text-align: left;
    max-width: 800px;
`;

export const TextWrapper = styled.div`
  /* max-width: 800px; */
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.div`
  color: #000;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;


// Project Description Component Styles

export const DescContainer = styled.div`
  background: #fde2e4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const DescColContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  
`;

export const DescCol1 = styled.div`
  flex: 1 1 20%;
  padding-right: 20px;
  background: #fff1e6;
`;

export const DescCol2 = styled.div`
  flex: 1 1 80%;
  background: #D3D3D3;

`;

export const DescriptionTextP = styled.p`
  max-width: 800px;
  line-height: 1.5em;
`;


export const StackTitle= styled.p`
font-weight: bold;
padding-bottom: 10px;
`;


export const DescriptionTitle = styled.p`
font-weight: bold;
padding: 10px 0;
`;


export const StackItem = styled.div`
 margin: 10px 0;
 font-size: 1.5rem;

`;


// Video Demo Grid Component Styles

export const VideoContainer = styled.div `
  background: #231412;
  /* height:500px; */
`;

export const PlayerWrapper = styled.div`
  position: "relative";
  paddingBottom: "56.25%"; /* 16:9 */
`;

export const VideoPlayer = styled(ReactPlayer)`
  position: "absolute";
  top: 0;
  left: 0;
`;

export const Img = styled.div`
  width: 100%;
  height: 100%;
  margin: 0
  padding-right: 0;

`;


