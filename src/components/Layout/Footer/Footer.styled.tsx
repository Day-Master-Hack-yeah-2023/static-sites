import styled from 'styled-components';

const FooterStyled = styled.section`
  position: absolute;
  bottom: 0;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background: black;
  width: 100%;
  min-height: 100px;
  padding: 16px;
  transform: translate(-50%);
`;

const FooterCopyRightStyled = styled.p`
  color: red;
`;

export { FooterStyled, FooterCopyRightStyled };
