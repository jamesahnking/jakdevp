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
    
    /* :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: -webkit-gradient(
        linear,
        left top,
        left bottom,
        from(rgba(0, 0, 0, 0.2)),
        to(rgba(0, 0, 0, 0.2))
      ),
      -webkit-gradient(linear, left top, left bottom, from(rgba(0, 0, 0, 0.2)), to(transparent));
    background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0.2) 0%,
        rgba(0, 0, 0, 0.6) 100%
      ),
      linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
    z-index: 2;
  } */
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
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Heroh1 = styled.h1`
    color: #fff;
    font-size:60px;
    text-align: center;
     position:relative;
     padding: 10;
    
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroTri = styled.div `
      width: 0px;
  height: 0px;
  border-style: inset;
  border-width: 0 200px 346.4px 200px;
  border-color: transparent transparent #000 transparent;
  float: left;
  transform: rotate(360deg);
  -ms-transform: rotate(360deg);
  -moz-transform: rotate(360deg);
  -webkit-transform: rotate(360deg);
  -o-transform: rotate(360deg);
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