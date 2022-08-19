// reusable component method
// passing data and values. 
// TODO: replace with Strapi.

import jaklogopritriangle from '../images/jak_primary_tri_logo.svg';
import jaklogotype from '../images/jaklogotype.svg';
import imgeditorial from '../images/img_editorial.png';
import svg1Url from '../images/multisig_proj_gfx.svg';
import svg2Url from '../images/pilarsAndRings_proj_gfx.svg';
import svg3Url from '../images/cryptodex_proj_gfx.svg';
import svg4Url from '../images/svg-4.svg';
import svg5Url from '../images/svg-5.svg';
import materialIcon from '../images/mui_logotype.svg';
import truffleIcon from '../images/truffle_logotype.svg';
import multiSigWallet from '../images/multisigwallet.png';
import { FaReact, FaBootstrap, FaNodeJs, FaEthereum } from 'react-icons/fa';


//////////////////////////
// Sub Navigation -  //
//////////////////////////

export const SubNavbarLinks = {
  
  project1: '/project1',
  project2: '/project2',
  project3: '/project3',
  project4: '/project4',
  project5: '/project5',
  project6: '/project6',
  project7: '/project7',
};


//////////////////////////
// Project Data - OBJ 1 //
//////////////////////////


  export const HomeObjOne = {
    id: 'project1',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'PROJECT',
    headline: 'MultiSig Wallet',
    description:
      'A multi-signature crypto wallet that runs on an Ethereum based blockchain requiring a 3 member approval to release funds.',
    buttonLabel: 'View The Work',
    imgStart: false,
    img: svg1Url,
    towhere: '/project1',
    alt: 'Mutliple Singature Graphic',
    dark: false,
    primary: false,
    darkText: true,

    // ==== Tech Stack ====== ///

    stackTitle: 'Tech Stack',
    videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
    stackItem0:<FaEthereum/>,
    stackItem1:<FaNodeJs/>,
    stackItem2:<FaReact/>,
    stackItem3:materialIcon,
    stackItem4:truffleIcon,
    stackItem5:'',
    stackItem6:'',
    
    // ==== Description and Paragraphs ====== ///

    Question0:'What technolgies were used to build and test this dapp?',
    Paragraph0: 'Solidity, NodeJS, React, Material UI, and Truffle',
    Question1: 'What is a Multisig wallet?',
    Paragraph1: 'Multisignature wallets are cryptocurrency wallets that require two or more private keys to sign and send a transaction. Multisig wallets work in similar ways to bank vaults. Bank vaults are constructed to need more than one key to open. ',
    Question2:'What makes Multisig wallets useful?',
    Paragraph2: 'Security and accountability. They make cyberattacks more difficult because it increases the number of failure points a hacker has to navigate. They reduce the dependency on one person or one device. And help eliminate the security concerns of a single private key mechanism.',

    Question3:'How does this Multisig wallet dapp function',
    AnswerC1: 'The minimum number of designated addresses that must approve a transfer before it can be sent to a recipient.',
    Paragraph3a: 'This wallet is a 2-out-of-3 signature Dapp. Each of the 3 addresses can propose and approve transactions. They are allowed one vote per transaction. If a transaction is submitted by one member, two quorum members need to approve the transaction to be processed and released.',
    Paragraph3b: 'The signature, or address, has the right to approve or propose a transaction and transfer of funds.',

    Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
    Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph4: '',


    // ==== Image and Text Primary ====== ///

    ImagePrimary: multiSigWallet,
    ImagePrimaryAlt:'MultiSig Wallet Interface',
    ImagePriText:'MultiSig Wallet Interface',
    
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
    headline: 'Fuzzy Fuurzle NFT Marketplace',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium',
    buttonLabel: 'View The Work',
    imgStart: true,
    img: svg2Url,
    towhere: '/project2',
    alt: 'Fuurzle Image',
    dark: false,
    primary: true,
    darkText: false,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
    
    // ==== Tech Stack ====== ///

      stackTitle: 'Tech Stack',
      videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
      stackItem0:<FaEthereum/>,
      stackItem1:<FaNodeJs/>,
      stackItem2:<FaReact/>,
      stackItem3:materialIcon,
      stackItem4:truffleIcon,
      stackItem5:'',
      stackItem6:'',
      
      // ==== Description and Paragraphs ====== ///
  
      Question0:'What technolgies were used to build and test this dapp?',
      Paragraph0: 'Solidity, NodeJS, React, Material UI, and Truffle',
      Question1: 'What is an NFT Marketplace?',
      Paragraph1: 'Multisignature wallets are cryptocurrency wallets that require two or more private keys to sign and send a transaction. Multisig wallets work in similar ways to bank vaults. Bank vaults are constructed to need more than one key to open. ',
      Question2:'What makes Multisig wallets useful?',
      Paragraph2: 'Security and accountability. They make cyberattacks more difficult because it increases the number of failure points a hacker has to navigate. They reduce the dependency on one person or one device. And help eliminate the security concerns of a single private key mechanism.',
  
      Question3:'How does this Multisig wallet dapp function',
      AnswerC1: 'The minimum number of designated addresses that must approve a transfer before it can be sent to a recipient.',
      Paragraph3a: 'This wallet is a 2-out-of-3 signature Dapp. Each of the 3 addresses can propose and approve transactions. They are allowed one vote per transaction. If a transaction is submitted by one member, two quorum members need to approve the transaction to be processed and released.',
      Paragraph3b: 'The signature, or address, has the right to approve or propose a transaction and transfer of funds.',
  
      Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
      Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
      Paragraph4: '',
  
      // ==== Image and Text Primary ====== ///

    ImagePrimary: multiSigWallet,
    ImagePrimaryAlt:'MultiSig Wallet Interface',
    ImagePriText:'MultiSig Wallet Interface',
    
   // ==== Image and Text Secondary ====== ///

    ImageSecondary: imgeditorial,
    ImageSecondaryAlt:'These are pandas',
    ImageSecText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
  
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
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',

    // ==== Tech Stack ====== ///

    stackTitle: 'Tech Stack',
    videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
    stackItem0:<FaEthereum/>,
    stackItem1:<FaNodeJs/>,
    stackItem2:<FaReact/>,
    stackItem3:materialIcon,
    stackItem4:truffleIcon,
    stackItem5:'',
    stackItem6:'',
    
    // ==== Description and Paragraphs ====== ///

    Question0:'What technolgies were used to build and test this dapp?',
    Paragraph0: 'Solidity, NodeJS, React, Material UI, and Truffle',
    Question1: 'What is A Crypto Dex?',
    Paragraph1: 'Multisignature wallets are cryptocurrency wallets that require two or more private keys to sign and send a transaction. Multisig wallets work in similar ways to bank vaults. Bank vaults are constructed to need more than one key to open. ',
    Question2:'What makes Multisig wallets useful?',
    Paragraph2: 'Security and accountability. They make cyberattacks more difficult because it increases the number of failure points a hacker has to navigate. They reduce the dependency on one person or one device. And help eliminate the security concerns of a single private key mechanism.',

    Question3:'How does this Multisig wallet dapp function',
    AnswerC1: 'The minimum number of designated addresses that must approve a transfer before it can be sent to a recipient.',
    Paragraph3a: 'This wallet is a 2-out-of-3 signature Dapp. Each of the 3 addresses can propose and approve transactions. They are allowed one vote per transaction. If a transaction is submitted by one member, two quorum members need to approve the transaction to be processed and released.',
    Paragraph3b: 'The signature, or address, has the right to approve or propose a transaction and transfer of funds.',

    Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
    Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph4: '',

    // ==== Image and Text Primary ====== ///

    ImagePrimary: multiSigWallet,
    ImagePrimaryAlt:'MultiSig Wallet Interface',
    ImagePriText:'MultiSig Wallet Interface',
    
   // ==== Image and Text Secondary ====== ///

    ImageSecondary: imgeditorial,
    ImageSecondaryAlt:'These are pandas',
    ImageSecText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
  
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
    headline: 'Pillars & Rings',
    description:
      'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
    buttonLabel: 'View The Work',
    imgStart: true,
    img: svg4Url,
    towhere: '/project4',
    alt: 'Piggybank',
    dark: false,
    primary: true,
    darkText: false,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
 
          // ==== Tech Stack ====== ///

    stackTitle: 'Tech Stack',
    stackItem0:<FaEthereum/>,
    stackItem1:<FaNodeJs/>,
    stackItem2:<FaReact/>,
    stackItem3:materialIcon,
    stackItem4:truffleIcon,
    stackItem5:'',
    stackItem6:'',
    
    // ==== Description and Paragraphs ====== ///

    Question0:'What is a Pillar & Ring?',
    Paragraph0: 'Solidity, NodeJS, React, Material UI, and Truffle',
    Question1: 'What is Pillars & Rings?',
    Paragraph1: 'Multisignature wallets are cryptocurrency wallets that require two or more private keys to sign and send a transaction. Multisig wallets work in similar ways to bank vaults. Bank vaults are constructed to need more than one key to open. ',
    Question2:'What makes Multisig wallets useful?',
    Paragraph2: 'Security and accountability. They make cyberattacks more difficult because it increases the number of failure points a hacker has to navigate. They reduce the dependency on one person or one device. And help eliminate the security concerns of a single private key mechanism.',

    Question3:'How does this Multisig wallet dapp function',
    AnswerC1: 'The minimum number of designated addresses that must approve a transfer before it can be sent to a recipient.',
    Paragraph3a: 'This wallet is a 2-out-of-3 signature Dapp. Each of the 3 addresses can propose and approve transactions. They are allowed one vote per transaction. If a transaction is submitted by one member, two quorum members need to approve the transaction to be processed and released.',
    Paragraph3b: 'The signature, or address, has the right to approve or propose a transaction and transfer of funds.',

    Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
    Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph4: '',

    // ==== Image and Text Primary ====== ///

  ImagePrimary: multiSigWallet,
  ImagePrimaryAlt:'MultiSig Wallet Interface',
  ImagePriText:'MultiSig Wallet Interface',
  
  // ==== Image and Text Secondary ====== ///

  ImageSecondary: imgeditorial,
  ImageSecondaryAlt:'These are pandas',
  ImageSecText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '

};

///////////////////////////
// Project Data - OBJ 5 //
//////////////////////////

  export const HomeObjFive= {
    id: 'project5',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: '...',
    headline: 'ABOUT JAK',
    description:
      '(^_^) [o_o] (^.^) {-_-}',
    buttonLabel: 'View The Work',
    imgStart: false,
    img: svg5Url,
    towhere: '/project5',
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
    videoUrl: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
          // ==== Tech Stack ====== ///

          stackTitle: 'Tech Stack',
          videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
          stackItem0:<FaEthereum/>,
          stackItem1:<FaNodeJs/>,
          stackItem2:<FaReact/>,
          stackItem3:materialIcon,
          stackItem4:truffleIcon,
          stackItem5:'',
          stackItem6:'',
          
          // ==== Description and Paragraphs ====== ///
      
          Question0:'What technolgies were used to build and test this dapp?',
          Paragraph0: 'Solidity, NodeJS, React, Material UI, and Truffle',
          Question1: 'What is an NFT Marketplace?',
          Paragraph1: 'Multisignature wallets are cryptocurrency wallets that require two or more private keys to sign and send a transaction. Multisig wallets work in similar ways to bank vaults. Bank vaults are constructed to need more than one key to open. ',
          Question2:'What makes Multisig wallets useful?',
          Paragraph2: 'Security and accountability. They make cyberattacks more difficult because it increases the number of failure points a hacker has to navigate. They reduce the dependency on one person or one device. And help eliminate the security concerns of a single private key mechanism.',
      
          Question3:'How does this Multisig wallet dapp function',
          AnswerC1: 'The minimum number of designated addresses that must approve a transfer before it can be sent to a recipient.',
          Paragraph3a: 'This wallet is a 2-out-of-3 signature Dapp. Each of the 3 addresses can propose and approve transactions. They are allowed one vote per transaction. If a transaction is submitted by one member, two quorum members need to approve the transaction to be processed and released.',
          Paragraph3b: 'The signature, or address, has the right to approve or propose a transaction and transfer of funds.',
      
          Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
          Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
          Paragraph4: '',
      
          // ==== Image and Text Primary ====== ///
    
        ImagePrimary: multiSigWallet,
        ImagePrimaryAlt:'MultiSig Wallet Interface',
        ImagePriText:'MultiSig Wallet Interface',
        
       // ==== Image and Text Secondary ====== ///
    
        ImageSecondary: imgeditorial,
        ImageSecondaryAlt:'These are pandas',
        ImageSecText:'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium '
      
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

