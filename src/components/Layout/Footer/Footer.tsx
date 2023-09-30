import React from 'react';
import { FooterCopyRightStyled, FooterStyled } from './Footer.styled';

const Footer: React.FC = () => {
  return (
    <FooterStyled id="main-footer">
      <FooterCopyRightStyled>&copy; Day master</FooterCopyRightStyled>
    </FooterStyled>
  );
};

export { Footer };
