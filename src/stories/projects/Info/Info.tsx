import React from 'react';
import { Score } from '../../components/Score/Score';
import {
  ListMovieSingleInfo,
  ListMovieCharacterInfo,
} from '../../components/List/ListMovie';
import type { TCharacter } from '../../components/List/ListMovie';
import '@/scss/object/utility/index.scss';
import '@/scss/object/project/_info.scss';

export const Info = ({}) => {
  const characters: TCharacter[] = [
    {
      name: 'ブルース・ウェイン / バットマン',
      actor: 'ロバート・パティンソン',
      description:
        '両親殺害の復習を誓い、夜はマスクで素顔を隠し、アクト敵対して犯罪者の心に恐怖を植え付ける存在”バットマン”となって2年。ある日、最狂の知能犯リドラーに狙われたことで、彼の良心が狂気に変貌していくことになるー。',
    },
    {
      name: 'セリーナ・カイル / キャットウーマン',
      actor: 'ゾーイ・クラヴィッツ',
      description:
        '自らの目的のため、ネコのようなスーツとマスクを身に繕い、ゴッサム・シティの権力者や悪党を狙って盗みを働く謎めいた人物。ブルースに近づき協力を持ちかけるが、その目的とは・・・？',
    },
  ];

  return (
    <div className='p-info'>
      <div className='p-info__score'>
        <Score size='large' score='3' />
      </div>
      <div>
        <p>
          全てが暗い！画が暗い、世界が暗い背景全般が黒い。ただ見にくくは無いです。それが今作の持ち味だと思います。
          80年代のアメリカの世界観や音楽好きな人にはとてもおすすな映画でした。
        </p>
      </div>
      <dl className='p-info__detail'>
        <ListMovieSingleInfo label='原題' text='The Batman' />
        <ListMovieSingleInfo
          label='公式サイト'
          text='https://wwws.warnerbros.co.jp/thebatman-movie/'
          link='https://wwws.warnerbros.co.jp/thebatman-movie/'
        />
        <ListMovieSingleInfo label='監督' text='マット・リーヴス' link='#' />
        <ListMovieCharacterInfo characters={characters} />
        <ListMovieSingleInfo
          label='配給会社'
          text='ワーナー・ブラザース'
          link='#'
        />
      </dl>
      <div className='u-mt-4 p-info__iframe'>
        <iframe
          width='560'
          height='315'
          src='https://www.youtube.com/embed/mqqft2x_Aa4'
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        ></iframe>
      </div>
    </div>
  );
};
