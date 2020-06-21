import React from 'react';
import { AreaStars, IconStarsFill, IconStarsOutline } from './styles';

interface StarsProps {
  stars_classified: number;
}

const Stars: React.FC<StarsProps> = ({ stars_classified }) => {
  return (
    <AreaStars>
      {[0, 1, 2, 3, 4].map((element, index) =>
        index <= stars_classified - 1 ? (
          <IconStarsFill />
        ) : (
          <IconStarsOutline />
        ),
      )}
    </AreaStars>
  );
};

export default Stars;
