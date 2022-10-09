import styled from 'styled-components';
import ReactPlayer from 'react-player'

//////////////////////////////////////
// Project Header Component Styles  //
//////////////////////////////////////

export const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 50px;
    height: 320px;
    position: relative;
    z-index: 1;
    background: rgb(3,6,44);
    background: linear-gradient(180deg, rgba(3,6,44,1) 1%, rgba(5,5,63,1) 100%);
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
    text-align: center;
     position: relative;
     padding: 10;

     @media screen and (max-width: 425px) {
      font-size: 40px;
    ;       
  }
`;

export const HeaderP = styled.p`
    margin-top: 10px;
    line-height:1.5em;
    color: #fff;
    font-size: 18px;
    text-align: center;
    @media screen and (max-width: 425px) {
      font-size: 14px;
    } 
`;

export const TextWrapper = styled.div`
  max-width: 800px;
  padding-top: 0;
  padding-bottom: 20px;
`;

export const TopLine = styled.div`
  color: #fff;
  font-size: 18px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.5px;
  text-align: center;
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
  padding: 40px 0 20px 0;

  @media screen and (max-width: 768px) {
    padding: 20px 0 10px 0;
     }

  @media screen and (max-width: 425px) {
    padding: 10px 0 10px 0;
     }
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
  font-size: 18px;
  line-height: 1.5em;
  padding: 0px 0 24px 0;
  color: black;

  @media screen and (max-width: 768px) {
    font-size: 14px;
    padding: 0px 0px 10px 0px;
  }
`;

export const DescriptionTitle = styled.p`
font-weight: bold;
font-size: 18px;
padding:0px 0px 20px 0px;


@media screen and (max-width: 768px) {
  font-size: 14px;
  padding:0px 0px 20px 0px;

  }
`;

export const DescOl = styled('ol')`
  font-size: 16px;
  padding: 0 0 10PX 20px;

  @media screen and (max-width: 768px) {
  font-size: 14px;
  padding: 2px 0;
  padding: 0 0 10px 20px;
  }
`;

export const DescUl = styled('ul')`
  font-size: 16px;
  padding: 0 0 20PX 20px;

  @media screen and (max-width: 768px) {
  font-size: 14px;
  padding: 2px 0;
  padding: 0 0 20px 20px;
  }
`;

export const DescLi = styled('li')`
 font-size: 18px;
 line-height: 1.5em; 
 color: black;

 @media screen and (max-width: 768px) {
  font-size: 14px;
  }
`;


export const StackTitle = styled.p`
font-weight: bold;
font-size: 16px;
padding: 0 0 20px 0;

@media screen and (max-width: 768px) {
  font-size: 14px;
  padding: 0 0 10px 0;
  }
`;


export const StackItem = styled.div`
 margin: 10px 0;
 font-size: 1.5rem;

 @media screen and (max-width: 425px) {
      font-size: 2em;
 }
 
`;

export const StackItemImg = styled.img`
 width: 22px;
 height: 22px;  
  margin-top: ;
  margin-right: 0;
  margin-left: 0;
  padding-right: 0;
 
 /* @media screen and (max-width: 425px) {
      font-size: 2em; */
 
 
`;


//////////////////////////////////////
// Video Demo Grid Component Styles //
//////////////////////////////////////

export const VideoContainer = styled.div `
  background: #00062d;
  /* height:500px; */
  margin: 0 0 40px 0;
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
  padding: 10px 0 10px 0;
  max-width: 1100px;
    
`;


export const EditorialPriTextP = styled.p`
  max-width: 1100px;
  font-size: 18px;
  line-height: 1.5em;
  padding: 20px 20px 20px 20px;
  color: black;

  @media screen and (max-width: 768px) {
    padding: 20px;
    font-size: 14px;
  }
  `;

  export const EditorialPriTextPCntr = styled.p`
  max-width: 1100px;
  font-size: 16px;
  line-height: 1.5em;
  /* background-color: red; */
  padding: 10px 20px;
  color: grey;
  justify-content: center;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 768px) {
    padding: 20px;
    font-size: 14px;
  }
  `;


export const EditorialImgWrap = styled.div`
  max-width: 1100px;
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
// Editorial Component Styles - Secondary/Ter //
////////////////////////////////////////////


export const EditorialSecContainer = styled.div`
  /* background: #fae1dd; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
  min-height: 500px;
  position: relative;
  z-index: 1;
  margin-bottom: 50px;
  /* color: #cddafd;
  background: #cddafd;
  margin-bottom:20px;

  @media screen and (max-width: 768px) {
    padding: 10px 0;
  } */
`;
export const EditorialSecWrapper = styled.div `
display: flex;
z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0px;
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


export const EditorialRowB= styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: 'col2 col1';
  @media screen and (max-width: 768px) {
    grid-template-areas: 'col1 col1' 'col2 col2'; 
      
  }
`;

export const EditorialSecCol1 = styled.div`
width:100%;
  
grid-area: col1;
`;

export const EditorialSecCol2 = styled.div`
  width:100%;
  /* background: green; */
  grid-area: col2;
`;

export const EditorialTextWrapper = styled.div`
  /* max-width: 500px;
  padding-top: 0; */
  /* padding-bottom: 60px; */
`;


export const EditorialTextp= styled.p`
  /* margin-top: 10px; */
    color: #000;
    line-height:1.5em;
    font-size: 18px;
    text-align: center;
    max-width: 500px;
    padding: 0 30px;

    @media screen and (max-width: 768px) {
    padding: 20px 0px 0px 0px;
    font-size: 14px;    
    }
  }
`;

export const EditorialSecImgWrap = styled.div`
  max-width: 500px;
  height: 100%;
`;

export const EditorialSecImgPri = styled.img`
  width: 100%;
  margin-top: 0;
  margin-right: 0;
  padding-right: 0;
`;