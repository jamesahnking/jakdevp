import styled from 'styled-components';

export const Button = styled.div`
   position: fixed; 
   width: 100%;
   opacity: 70%;
   left: 90%;
   bottom: 90px;
   height: 20px;
   font-size: 3.5rem;
   z-index: 3;
   cursor: pointer;
   color: #4a01bf;
   display: visible ? 'inline' : 'none';

   @media screen and (max-width: 425px) {
    font-size: 3.5rem;
    left: 4%;

  }
   
`;  