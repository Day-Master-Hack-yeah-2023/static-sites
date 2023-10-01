import React from 'react';
import {
  AchivmentListStyled,
  AchivmentItemStyled,
  AchivmentImageStyled,
  AchivmentItemTextStyled,
  UserAchivmentSection,
  UserAchivmentImage,
  UserAchivmentheading,
} from './Achivment.styled';
import { allAchivment } from './Achivment.data';

const Achivment: React.FC = () => {
  const userPoints = 13;

  return (
    <>
      <UserAchivmentSection>
        {[
          [...allAchivment()]
            .reverse()
            .find((current) => userPoints >= current.price),
        ].map((current) => (
          <UserAchivmentImage src={current?.src} alt={current?.alt ?? ''} />
        ))}

        <UserAchivmentheading>
          <span>Your Points: </span>

          {userPoints}
        </UserAchivmentheading>
      </UserAchivmentSection>

      <AchivmentListStyled>
        {allAchivment().map(({ src, alt, price }) => (
          <AchivmentItemStyled
            key={alt}
            isAchived={userPoints >= price ? true : false}
          >
            <AchivmentItemTextStyled
              isAchived={userPoints >= price ? true : false}
            >
              price: <span>{price}</span>
            </AchivmentItemTextStyled>

            <AchivmentImageStyled src={src} alt={alt} />
          </AchivmentItemStyled>
        ))}
      </AchivmentListStyled>
    </>
  );
};

export { Achivment };
