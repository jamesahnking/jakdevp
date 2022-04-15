import styled from 'styled-components';
import ReactPlayer from 'react-player'


//////////////////////////////////////
// Project Header Component Styles  //
//////////////////////////////////////

export const HeaderContainer = styled.div`
background: black;
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
   
    @media screen and (max-width: 768px) {
    padding: 20px;

  }
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
    font-size: 60px;
    text-align: left;
     position: relative;
     padding: 10;
    
`;

export const HeaderP = styled.p`
    margin-top: 10px;
    color: #fff;
    font-size: 18px;
    text-align: left;
    /* max-width: 800px; */
`;

export const TextWrapper = styled.div`
  max-width: 800px;
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


///////////////////////////////////////////
// Project Description Component Styles  //
///////////////////////////////////////////

export const DescContainer = styled.div`
  /* background: #fde2e4; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  
  @media screen and (max-width: 768px) {
    padding: 20px;

  }
`;

export const DescColContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 800px;
  padding: 40px 0 60px 0;
`;

export const DescCol1 = styled.div`
  flex: 1 1 20%;
  padding-right: 20px;
  /* background: #fff1e6; */
`;

export const DescCol2 = styled.div`
  flex: 1 1 80%;
  /* background: #D3D3D3; */
`;

export const DescriptionTextP = styled.p`
  max-width: 800px;
  line-height: 1.5em;
  padding: 20px 0 0 0;
  color: black;
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

//////////////////////////////////////
// Video Demo Grid Component Styles //
//////////////////////////////////////

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

//////////////////////////////////////////
// Editorial Component Styles - Primary //
//////////////////////////////////////////

export const EditorialContainer= styled.div`
  color: #dfe7fd;
  /* background: #e2ece9; */
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const EditorialWrapper = styled.div`
  /* background: #e2ece9; */
  padding: 20px 0 20px 0;
  max-width: 1000px;
    
`;


export const EditorialPriTextP = styled.p`
  max-width: 1000px;
  line-height: 1.5em;
  padding: 20px 0 20px 0;
  color: black;

  @media screen and (max-width: 768px) {
    padding: 20px;

  }

`;


export const EditorialImgWrap = styled.div`
  max-width: 1000px;
  height: 100%;
`;

export const EditorialImgPri = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
`;


////////////////////////////////////////////
// Editorial Component Styles - Secondary //
////////////////////////////////////////////


export const EditorialSecContainer = styled.div`
  background: #fae1dd;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 500px;
  position: relative;
  z-index: 1;
  /* color: #cddafd;
  background: #cddafd;
  margin-bottom:20px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  } */
`;
export const EditorialSecWrapper = styled.div `
display: flex;
z-index: 1;0
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center; */
`;


export const EditorialRowA = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col1 col2';

@media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2'; 
      
  }
`;


export const EditorialSecCol1 = styled.div`
  grid-area: col1;
`;

export const EditorialSecCol2 = styled.div`
  width:100%;
  background: green;
  grid-area: col2;
`;

export const EditorialTextWrapper = styled.div`
  /* max-width: 500px;
  padding-top: 0; */
  /* padding-bottom: 60px; */
`;


export const EditorialTextp= styled.p`
  /* margin-top: 10px; */
    color: #fff;
    font-size: 18px;
    text-align: left;
    max-width: 550px;
    padding-left: 20px;
`;

export const EditorialSecImgWrap = styled.div`
  max-width: 555px;
  height: 100%;
`;

export const EditorialSecImgPri = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  padding-right: 0;
`;