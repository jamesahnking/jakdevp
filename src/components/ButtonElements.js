import styled from "styled-components";
import { Link as LinkScroll } from 'react-scroll';

export const Button = styled(LinkScroll)`
  border-radius: 25px;
  background: ${({ primary }) => (primary ? '#01BF71' : '#4a01bf')};
  white-space: nowrap;
  padding: ${({ big }) => (big ? '14px 48px' : '12px 30px')};
  color: ${({ dark }) => (dark ? '#4a01bf' : '#ffffff')};
  font-size: ${({ fontBig }) => (fontBig ? '20px' : '16px')};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? '#ffffff' : '#01BF71')};
  }
`;
