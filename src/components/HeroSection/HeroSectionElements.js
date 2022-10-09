import styled from 'styled-components';


export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: rgb(3,6,44);
    background: linear-gradient(180deg, rgba(3,6,44,1) 1%, rgba(5,5,63,1) 100%);
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
    
`;

export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 0px 0px 90px  0;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* margin-bottom: 80px; */
    @media screen and (max-width: 425px) {
      padding: 0px 0px 160px  0;
    }

    @media screen and (max-width: 375px) {
      padding: 0px 0px 220px  0;
    }

`;

export const Heroh1 = styled.h1`
    color: #fff;
    font-size:60px;
    text-align: center;
     position:relative;
     padding: 10;
    
`;

export const HeroP = styled.p`
    margin-top: 10px;
    color: #fff;
    font-size: 18px;
    text-align: center;
    line-height: 1.5em;

    max-width: 550px;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;


export const ImgWrap = styled.div`
  max-width: 555px;
  height: 400px;

  @media screen and (max-width: 375px) {
    height: 300px;

    
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  margin-top: 0;
  /* margin-right: 0;
  margin-left: 10px; */
  margin: 0
  padding-right: 0;

`;

export const IconWrapper = styled.div `
    color: #fff;
    width: 30px;
    height: 30px;
`;

export const ImageWrapper = styled.div `
    width: 100px;
    height: 100px;
    border-radius: 50%;
`;

export const SocialIcons = styled.img`
    height: 60px;
    width: 60px;
    /* margin: 0; */
    /* @media screen and (max-width: 480px) {
    } */
`;


// export const Circle = styled.div `
//  background: #000;
//   border: 0.1875em solid #0F1C3F;
//   border-radius: 50%;
//   box-shadow: 0.375em 0.375em 0 0 rgba(15, 28, 63, 0.125);
//   height: 10em;
//   width: 10em;
//   margin-bottom: 20px;
// }
// `;