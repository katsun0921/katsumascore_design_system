import React from 'react';
import '@/scss/object/component/_score.scss';
import '@/scss/object/utility/index.scss';

export type TScoreProps = {
  score: '1' | '2' | '3' | '4' | '5';
};

export const Score = ({ score }: TScoreProps) => {
  return (
    <span className='c-score'>
      <span className='c-score__count'>{score}</span>
    </span>
  );
};
