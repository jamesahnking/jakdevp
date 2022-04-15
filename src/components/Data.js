// reusable component method
// passing data and values. 
// TODO: replace with Strapi.

import jaklogopritriangle from '../images/jak_primary_tri_logo.svg';
import jaklogotype from '../images/jaklogotype.svg';
import pandas from '../images/panda2.jpeg';
import imgeditorial from '../images/img_editorial.png';
import { FaReact, FaBootstrap, FaNodeJs, FaEthereum } from 'react-icons/fa';
import svg1Url from '../images/svg-1.svg';
import svg2Url from '../images/svg-2.svg';
import svg3Url from '../images/svg-3.svg';
import svg4Url from '../images/svg-4.svg';
import svg5Url from '../images/svg-5.svg';

//////////////////////////
// Project Data - OBJ 1 //
//////////////////////////

  export const HomeObjOne = {
    id: 'project1',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Silence of the limbs',
    headline: 'MultiSig Wallet',
    description:
      'A multi-signature crypto wallet that runs on an Ethereum based blockchain requiring a 3 member approval to release funds.',
    buttonLabel: 'View The Work',
    imgStart: false,
    img: svg1Url,
    towhere: '/project1',
    alt: 'Car',
    dark: false,
    primary: false,
    darkText: true,

    // ==== Tech Stack ====== ///

    stackTitle: 'Tech Stack',
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    stackItem0:<FaEthereum/>,
    stackItem1:<FaNodeJs/>,
    stackItem2:<FaBootstrap/>,
    stackItem3:<FaReact/>,
    stackItem4:'',
    stackItem5:'',
    stackItem6:'',
    
    // ==== Description and Paragraphs ====== ///

    Question0:'Are the British coming?',
    Answer0: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph0: '',

    Question1:'Phasellus diam tortor, tempus ac lacinia non, ullamcorper id erat?',
    Answer1: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph1: '',

    Question2:'Maecenas a neque finibus, fermentum arcu at, volutpat ligula?',
    Answer2: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph2: '',

    Question3:'Vivamus et arcu ut lacus fringilla dictum sed ac ipsum. Ut feugiat vestibulum sapien?',
    Answer3: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph3: '',

    Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
    Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph4: '',

    // ==== Image and Text Primary ====== ///

    ImagePrimary: pandas,
    ImagePrimaryAlt:'These are pandas',
    ImagePriText:'Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum',
    
   // ==== Image and Text Secondary ====== ///

    ImageSecondary: imgeditorial,
    ImageSecondaryAlt:'These are pandas',
    ImageSecText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
  };


///////////////////////////
// Project Data - OBJ 2 //
//////////////////////////

  export const HomeObjTwo = {
    id: 'project2',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Project',
    headline: 'Pillars & Rings Generative NFT Collection on Polygon',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
    buttonLabel: 'View The Work',
    imgStart: true,
    img: svg2Url,
    towhere: '/project2',
    alt: 'Piggybank',
    dark: false,
    primary: true,
    darkText: false,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  };

  ///////////////////////////
// Project Data - OBJ 3 //
//////////////////////////

export const HomeObjThree = {
    id: 'project3',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Project',
    headline: 'A Crypto Dex',
    description:
      "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
    buttonLabel: 'View The Work',
    imgStart: false,
    img: svg3Url,
    towhere: '/project3',
    alt: 'Papers',
    dark: false,
    primary: false,
    darkText: true,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  };

  ///////////////////////////
// Project Data - OBJ 4 //
//////////////////////////

  export const HomeObjFour = {
    id: 'project4',
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'Project',
    headline: 'Compound Flashloan Trading Bot',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
    buttonLabel: 'View The Work',
    imgStart: true,
    img: svg4Url,
    towhere: '/project4',
    alt: 'Piggybank',
    dark: false,
    primary: true,
    darkText: false,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  };
  
///////////////////////////
// Project Data - OBJ 5 //
//////////////////////////

  export const HomeObjFive= {
    id: 'project5',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Project',
    headline: 'James Ahn-King Fullstack Development Portfolio',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
    buttonLabel: 'View The Work',
    imgStart: false,
    img: svg5Url,
    towhere: '/project5',
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  };

///////////////////////////
// Project Data - OBJ 6 //
//////////////////////////

  export const HomeObjSix= {
    id: 'project6',
    lightBg: false,
    lightText: true,
    lightTextDesc: true,
    topLine: 'Project',
    headline: 'And another one and another on...',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto.',
    buttonLabel: 'Hey Yahhhhh!',
    imgStart: true,
    img: svg5Url,
    towhere: '/project6',
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: false,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
  };

  ///////////////////////
  // Hero Section Data //
  ///////////////////////

  export const BrandingPriObj = {

    img: jaklogopritriangle,
    alt: 'Logotype Triangle'

}

  ///////////////////////
  // Nav Section Data //
  ///////////////////////

  export const BrandingObj = {

    img: jaklogotype,
    alt: 'James Ahn-King Logotype'
}

  //////////////////////////
  // Footer Section Data //
  ////////////////////////

  export const BrandingObj2 = {
    img: jaklogotype,
    alt: 'James Ahn-King Logotype'
}

  /////////////////////////////////
  // Editorial Image Text Layout //
  ////////////////////////////////

export const EdBoxImgR = {
  imgStartEd: true,
};

export const EdBoxImgL = {
  imgStartEd: false,
};

