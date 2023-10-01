import styled from 'styled-components';
import { defaultTheme } from '../../../provider/ThemeProvider';

const UserAchivmentSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 48px;
`;

const UserAchivmentheading = styled.h3`
  font-size: 18px;
  color: ${({ theme }) => (theme as typeof defaultTheme).item};
`;

const UserAchivmentImage = styled.img`
  width: 150px;
  height: auto;
  border-radius: 50%;
  border: 4px solid #d19a24;
  box-shadow: 2px 2px 5px #bdbdbf;
`;

const UserAchivmentText = styled.p``;

const AchivmentListStyled = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
`;

const AchivmentItemStyled = styled.li<{ isAchived: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 130px;
  box-shadow: 2px 2px 5px #bdbdbf;
  border-radius: 10px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    display: ${({ isAchived }) => (isAchived ? 'none' : 'block')};
    background: #000000ac;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);
  }
`;

const AchivmentImageStyled = styled.img`
  width: 90%;
  height: auto;
`;

const AchivmentItemTextStyled = styled.p<{ isAchived: boolean }>`
  position: absolute;
  bottom: 10px;
  left: 50%;
  display: ${({ isAchived }) => (!isAchived ? 'inline-block' : 'none')};
  color: #d19a24;
  transform: translate(-50%);
  white-space: nowrap;
  text-transform: uppercase;
  z-index: 100;

  span {
    color: ${({ theme }) => (theme as typeof defaultTheme).background};
  }
`;

export {
  AchivmentListStyled,
  AchivmentItemStyled,
  AchivmentImageStyled,
  AchivmentItemTextStyled,
  UserAchivmentImage,
  UserAchivmentSection,
  UserAchivmentText,
  UserAchivmentheading,
};
