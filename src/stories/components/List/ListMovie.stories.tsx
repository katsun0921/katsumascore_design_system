import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  ListsMovie,
  ListMovieSingleInfo,
  ListMovieMultipleInfo,
  ListMovieCharacterInfo,
} from './ListMovie';
import type { TCharacter } from './ListMovie';

export default {
  title: 'Component/List',
  component: ListsMovie,
  subcomponents: {
    ListMovieSingleInfo,
    ListMovieMultipleInfo,
    ListMovieCharacterInfo,
  },
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} as ComponentMeta<typeof ListsMovie>;

const TemplateListMovieSingleInfo: ComponentStory<typeof ListsMovie> = (
  args
) => {
  return (
    <ListsMovie {...args}>
      <ListMovieSingleInfo {...args} />
    </ListsMovie>
  );
};

const TemplateListMovieMultipleInfo: ComponentStory<typeof ListsMovie> = (
  args
) => {
  return (
    <ListsMovie {...args}>
      <ListMovieMultipleInfo {...args} />
    </ListsMovie>
  );
};

const TemplateListMovieCharacterInfo: ComponentStory<typeof ListsMovie> = (
  args
) => {
  return (
    <ListsMovie {...args}>
      <ListMovieCharacterInfo {...args} />
    </ListsMovie>
  );
};

export const MovieSingleInfo = TemplateListMovieSingleInfo.bind({});
MovieSingleInfo.args = {
  label: 'Title',
  text: 'Movie Information',
};

export const MovieLinkSingleInfo = TemplateListMovieSingleInfo.bind({});
MovieLinkSingleInfo.args = {
  label: 'Title',
  text: 'Movie Information',
  link: '#',
};

export const MovieLinkMultipleInfo = TemplateListMovieMultipleInfo.bind({});
MovieLinkMultipleInfo.args = {
  label: 'Directors',
  lists: [
    {
      text: 'Director 1',
      link: '#',
    },
    {
      text: 'Director 2',
      link: '#',
    },
  ],
};

const characters: TCharacter[] = [
  {
    name: 'オーガスティン・ロフトハウス',
    actor: 'ジョージ・クルーニー',
    description:
      '末期癌を患い、輸血と投薬なしでは生きることのできない孤独の科学者。 家族と別れ、天文台に残って仕事を続けることを決意する。',
  },
  {
    name: 'アイリス・"サリー"・サリヴァン',
    actor: 'フェリシティ・ジョーンズ',
    description:
      '地球に帰還しようとする宇宙船の乗組員で、同じ乗組員のアドウォールとの間の子をお腹に宿している。 地球との交信が途絶えてしまい不安ながら、地球が人類滅亡の危機に直面していることを知らぬまま帰還を試みる。',
  },
  {
    name: 'アイリス / 若い頃のサリー',
    actor: 'カイリン・スプリンガル',
    description: '北極圏のハーバー天文台に取り残された謎の少女。',
  },
];

export const MovieCharacterInfo = TemplateListMovieCharacterInfo.bind({});
MovieCharacterInfo.args = {
  characters,
};
