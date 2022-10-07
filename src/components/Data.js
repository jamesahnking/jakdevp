// reusable component method
// passing data and values. 
// TODO: replace with Strapi.

import jaklogopritriangle from '../images/jak_primary_tri_logo.svg';
import jaklogotype from '../images/jaklogotype.svg';
import imgeditorial from '../images/img_editorial.png';
import svg1Url from '../images/multisig_proj_gfx-01-01.svg';
import svg2Url from '../images/fuzzyfuurzle_proj_gfx-01-01.svg';
import svg3Url from '../images/adex_proj_gfx-01-01.svg';
import svg4Url from '../images/pillars_proj_gfx-01-01.svg';
import svg5Url from '../images/svg-5.svg';
import materialIcon from '../images/mui_logotype.svg';
import truffleIcon from '../images/truffle_logotype.svg';
import tailwindIcon from '../images/tailwindlogotype.svg';
import adobeIcon from '../images/adobe_logotype_box.svg';
import nextjsIcon from '../images/nextdotjs.svg';
import multiSigWallet from '../images/multisigwallet.png';
import adexUIFull from '../images/dex_UI_Full.png';
import adexLanding from '../images/dex_UI_Landing.png';
import nftMarkeplaceLanding from '../images/nft_ui_landing.png';
import nftMarkeplaceProfile from '../images/nft_ui_profile.png';
import nftMarkeplaceCreate from '../images/nft_ui_create.png';
import nftMarkeplaceMetatdata from '../images/nft_ui_metadata.png';
import pandrContract from '../images/pandr_ui_contract.png';
import pandrMinter from '../images/pandr_ui_minter.png';
import pandrOpensea from '../images/pandr_ui_opensea.png';
import pandrNftElements from '../images/pandr_nft_elements.png';
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
    lightBg: false,
    lightText: true,
    lightTextDesc: false,
    topLine: 'PROJECT',
    headline: 'MultiSig Wallet',
    description:
      'A multi-signature crypto wallet requiring a 3 member approval to release funds.',
    buttonLabel: 'View Project',
    imgStart: true,
    img: svg1Url,
    towhere: '/project1',
    alt: 'Mutliple Singature Graphic',
    dark: false,
    primary: true,
    darkText: false,
    videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
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
      'NFT Marketplace for Ethereum based blockchains',
    buttonLabel: 'View Project',
    imgStart: true,
    img: svg2Url,
    towhere: '/project2',
    alt: 'Fuurzle Image',
    dark: false,
    primary: false,
    darkText: false,
    videoUrl: 'https://youtu.be/5AGj9ZiBXb8',
    
    // ==== Tech Stack ====== ///

      stackTitle: 'Tech Stack',
      stackItem0:<FaEthereum/>,
      stackItem1:<FaNodeJs/>,
      stackItem2:nextjsIcon,
      stackItem3:truffleIcon,
      stackItem4:tailwindIcon,
      stackItem5:'',
      stackItem6:'',
      
      // ==== Description and Paragraphs ====== ///
  
      Question0:'What technolgies were used to build and test this dapp?',
      Paragraph0: 'Solidity, NodeJS, Ganache, NextJS, Truffle, Tailwind, HeadlessUI, TypeScript, and  OpenZeppelin',
      Question1: 'What is an NFT Marketplace?',
      Paragraph1: 'An NFT marketplace is an application that allows a user to display, trade, buy, sell, and often mint NFTs.',
      Question2:'How does the Fuzzy Fuurzle NFT marketplace function?',
      Paragraph2: 'A user can mint a Fuzzy Fuurzl NFT. Using a form, they enter a name, description, image, and predetermined traits. The application combines these pieces to mint the NFT into a blockchain. It then stores its metadata and asset to IPFS. Users can also list their NFTs for sale, purchase from each other, view the NFTs they own through a profile page, and mint an NFT simply by providing a valid JSON metadata link and setting a price.',
      
      PlistItem1:'Mint an Fuzzy Furrzle NFT on an Ethereum blockchain',
      PlistItem2:'Specify the numeric value for pre-defined Fuzzy Furrzle NFT traits.',
      PlistItem3:'Set the price of an NFT ',
      PlistItem4:'View NFT in the users profile',
      PlistItem5:'List NFT for Sale on the Marketplace',
      
      Question3:'What makes an NFT Marketplace that can mint NFTs useful?',      
      Paragraph3a: 'A non-technical user could use a marketplace application to generate, share, and curate their NFT project effortlessly in seconds. Minting and storing an NFT takes technical know-how, a barrier to widespread adoption.',
      Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
      Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
      Paragraph4: '',
  
    // ==== Image and Text Primary ====== ///

    ImagePrimary: nftMarkeplaceLanding,
    ImagePrimaryAlt:'NFT Marketplace ',
    ImagePriText:'NFT Marketplace Landing',
    
   // ==== Image and Text Secondary ====== ///
   
   ImageSecondary: nftMarkeplaceCreate,
   ImageSecondaryAlt:'Create NFT',
   ImageSecText:'Create NFTs Landing and Form',
  
   // ==== Image and Text Tertiary ====== ///

   ImageTertiary: nftMarkeplaceProfile,
   ImageTertiaryAlt:'Account Profile Page',
   ImageTerText:'Account Profile page',

   // ==== Image and Text Quatenary ====== ///

   ImageQuatenary: nftMarkeplaceMetatdata,
   ImageQuatenaryAlt:'Create NFT from URI ',
   ImageQuaText:'Create NFT from URI landing',

   VideoText: ''

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
      "A peer-to-peer marketplace that coordinates the trading of crypto assets between users",
    buttonLabel: 'View Project',
    imgStart: false,
    img: svg3Url,
    towhere: '/project3',
    alt: 'Papers',
    dark: false,
    primary: false,
    darkText: true,
    videoUrl: 'https://youtu.be/YlrdiDPku6M',

    // ==== Tech Stack ====== ///

    stackTitle: 'Tech Stack',
    stackItem0:<FaEthereum/>,
    stackItem1:<FaNodeJs/>,
    stackItem2:<FaReact/>,
    stackItem3:<FaBootstrap/>,
    stackItem4:truffleIcon,
    stackItem5:'',
    stackItem6:'',
    
    // ==== Description and Paragraphs ====== ///

    Question0:'What technolgies were used to build and test this dapp?',
    Paragraph0: 'Solidity, NodeJS, React, Boostrap, and Truffle',
    Question1: 'What is A Crypto Dex?',
    Paragraph1: 'DEX is short for Decentralized Exchange. A DEX is a peer-to-peer marketplace that coordinates the trading of crypto assets between users without an intermediary.',
    Question2:'How does this DEX function? ',
    Paragraph2: 'A user can create one of four types of orders:', 
    Paragraph2a: '', 

      PlistItem1:'A Market Buy Order',
      PlistItem2:'A Market Sell Order',
      PlistItem3:'A Limit Buy Order',
      PlistItem4:'A Limit Sell Order',
      
    Paragraph2b: 'The DEX has three main components:',

      PlistItem5:'A user wallet',
      PlistItem6:'A frontend application for the trader to interact with',
      PlistItem7:'A smart contract',

    Paragraph2c: 'Usually, a DEX will have several smart contracts, but this project only has one.The DEX trades ERC20 tokens, and DAI is used to quote the price for each crypto asset.',
    Paragraph2d: 'Before a user can trade, they must transfer tokens to the DEXs wallet. After the transaction is approved, the DEX contract receives the funds from the users wallet. When the users are ready to cash out, they withdraw their funds from the DEX contract.',
    Paragraph2e: 'The frontend application handles user interaction and connects to the users wallet. The users personal wallet is triggered when a user clicks a transaction-related call to action on the  DEXs front. Lastly, the smart contract runs the DEXs logic and order book.',

    Question3:'How does the multiple signature functionality work?',
    AnswerC1: 'The minimum number of designated addresses that must approve a transfer before it can be sent to a recipient.',
    Paragraph3a: 'This wallet is a 2-out-of-3 signature Dapp. Each of the 3 addresses can propose and approve transactions. They are allowed one vote per transaction. If a transaction is submitted by one member, two quorum members need to approve the transaction to be processed and released.',
    Paragraph3b: 'The signature, or address, has the right to approve or propose a transaction and transfer of funds.',

    Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
    Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph4: '',

    // ==== Image and Text Primary ====== ///

    ImagePrimary: adexLanding,
    ImagePrimaryAlt:'MultiSig Wallet Interface',
    ImagePriText:'ADEX DAI Landing ',
    
   // ==== Image and Text Secondary ====== ///

    ImageSecondary: adexUIFull,
    ImageSecondaryAlt:'These are pandas',
    ImageSecText:'Full ADEX Interface'
  
  };

  ///////////////////////////
// Project Data - OBJ 4 //
//////////////////////////

  export const HomeObjFour = {
    id: 'project4',
    lightBg: true,
    lightText: false,
    lightTextDesc: false,
    topLine: 'Project',
    headline: 'Pillars & Rings',
    description:
      'A 13 trait generative NFT project minted on Polygon',
    buttonLabel: 'View Project',
    imgStart: false,
    img: svg4Url,
    towhere: '/project4',
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
    videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
 
          // ==== Tech Stack ====== ///

    stackTitle: 'Tech Stack',
    stackItem0:<FaEthereum/>,
    stackItem1:<FaNodeJs/>,
    stackItem2:'',
    stackItem3:materialIcon,
    stackItem4:truffleIcon,
    stackItem5:adobeIcon,
    stackItem6:'',
    
    // ==== Description and Paragraphs ====== ///

    Question0:'What technologies were used to test and build this dapp?',
    Paragraph0: 'Solidity, NodeJS, React, Adobe Illustrator, and Adobe Photoshop',
    Question1: 'What is Pillars & Rings?',
    Paragraph1: 'Pillars and Rings is a generative NFT art project of 1000 mintable assets. Each token is represented as a PAR. Each NFT consists of thirteen elements. Each element possesses a rarity trait. A unique thirteen-digit serial number is also present at the bottom left corner of each artwork and is reflected in its metadata along with each trait.',
    Question2:'How is the project structured? ',
    Paragraph2: '',
    PlistItem1: 'PAR Token Minter Application ',
    PlistItem2: 'Generative PAR images assets and metadata',
    PlistItem3: 'PAR Contract on Polygon',
    PlistItem4: 'PAR Opensea Collection',
    PlistItem5: '',
    
    Question3:'What are each NFTs 13 rarity traits and the amount of variations per trait?',
    TlistItem1: 'Background(9)',
    TlistItem2: 'Bottom Right Digit(2)',
    TlistItem3: 'Center Digit(2)',
    TlistItem4: 'First Pillar(3)',
    TlistItem5: 'First Ring(3)',
    TlistItem6: 'Second Pillar(3)',
    TlistItem7: 'Second Ring(3)',
    TlistItem8: 'Third Ring(3)',
    TlistItem9: 'Fourth Ring(3)',
    TlistItem10: 'Fifth Ring(3)',
    TlistItem11: 'Sixth Ring(3)',
    TlistItem12: 'Top Left Digit(2)',
    TlistItem13: 'Top Right Digit(2)',

    Question4:'Cras accumsan cursus vestibulum. Phasellus tincidunt in nibh quis rhoncus?',
    Answer4: 'Cras felis leo, vehicula sit amet dui quis, venenatis dignissim magna. Donec vitae blandit nunc, vel laoreet enim. Phasellus luctus dignissim diam',
    Paragraph4: '',

    // ==== Image and Text Primary ====== ///

  ImagePrimary: pandrMinter,
  ImagePrimaryAlt:'Pillars adn Rin',
  ImagePriText:'Pillars and Rings Minter',
  
  // ==== Image and Text Secondary ====== ///
  ImageSecondary: pandrNftElements,
  ImageSecondaryAlt:'Pillars and Rings Elements',
  ImageSecText:'Pillars and Rings individual NFT Elements',
 
  // ==== Image and Text Tertiary ====== ///

  ImageTertiary: pandrOpensea,
  ImageTertiaryAlt:'These are pandas',
  ImageTerText:'OpenSea Pillars and Rings Collection',

  // ==== Image and Text Quatenary ====== ///
  ImageQuatenary: pandrContract,
  ImageQuatenaryAlt:'These are pandas',
  ImageQuaText:'PAR Pillars and Rings Contract on PolyScan',

  VideoText: ''
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
    description:'',
    buttonLabel: 'View The Work',
    imgStart: false,
    img: svg5Url,
    towhere: '/project5',
    alt: 'Piggybank',
    dark: false,
    primary: false,
    darkText: true,
    videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
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
      
          Question0:'TLDR',
          Paragraph0:'Solidity, NodeJS, React, Material UI, and Truffle',
          Question1: 'TLDR',
          
          PlistItem1: 'Before crypto I was a Digital Designer and Digital Creative Director',
          PlistItem2: 'Started in crypto in 2017, building GPU miners',
          PlistItem3: '2018 Procured VC investment for Mining Start-Up',
          PlistItem4: 'Erected GPU Farm MVP located in Maryland',
          PlistItem5: 'Began my journey as a self taught developer shortly after',
          PlistItem6: 'Pivoted mining start-up to blockchain product development',
          PlistItem7: 'Shuttered startup',
          PlistItem8: 'Now focused on fullstack blockchain application development',
          
          Paragraph1:'Multisignature wallets are cryptocurrency wallets that require two or more private keys to sign and send a transaction. Multisig wallets work in similar ways to bank vaults. Bank vaults are constructed to need more than one key to open. ',
          Question2:'Skills and exposure by project:',
          SlistItem1: 'NodeJS: All',
          SlistItem2: 'Solidity: All',
          SlistItem3: 'Typescript: Nft Marketplace',
          SlistItem4: 'Javascript: All',
          SlistItem5: 'Truffle: All',
          SlistItem6: 'Ganache: Nft Marketplace',
          SlistItem7: 'Sass: This site',
          SlistItem8: 'React: Multisig Crypto Wallet, ADEX, This Site, Pillars & Rings NFT',
          SlistItem9: 'NextJS: Nft Market Place',
          SlistItem10: 'Material: Multisig Crypto Wallet',
          SlistItem11: 'Tailwind: Nft MarketPlace',
          SlistItem12: 'Bootstrap: Multisig Crypto Wallet, ADEX, This Site',
          SlistItem13: 'HTML: All',
          SlistItem14: 'CSS: All',
      
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
    videoUrl: 'https://www.youtube.com/watch?v=D6dyBE7U1yY',
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

