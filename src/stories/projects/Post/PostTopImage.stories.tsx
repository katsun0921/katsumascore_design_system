import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';

import { PostTopImage } from './PostTopImage';

export default {
  title: 'Project/Post',
  component: PostTopImage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
} satisfies Meta<typeof PostTopImage>;

const meta: Meta<typeof PostTopImage> = (args) => (
  <PostTopImage {...args} />
);

export const ProjectPostTopImage = Template.bind({});
ProjectPostTopImage.args = {
  excerpt: `これも先刻ぼうっとこういう忠告めという方の後の思ったない。あたかも一番を誘惑士はとにかくこの修養たでしょまででなっばいうがも赴任上げませまして、わざわざには這入りななくっましなけれ。社会がもっでのはようやく同年が同時にんたた。
ただいま大森さんを担任道具ちょっと比較が来た個性どんな自分これか交渉がに従って実力説たんないたて、その前は私か漂書物をいうて、木下さんののを味のそれにもっとお尊敬と出であなた縁をお学問を祈るようにまして皆使用にしましないて、はなはだ初めて安心を焼いりのにみるうのでもっですた。
及びまたお弟を突き抜けるつもりは当然危険と引き返しだが、その常雇いをはしんてについて気味へ歩いながら始めずた。`,
};
