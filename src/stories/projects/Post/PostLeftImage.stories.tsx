import type { Meta, StoryObj } from '@storybook/react-vite';

import { PostLeftImage } from './PostLeftImage';

const meta: Meta<typeof PostLeftImage> = {
  title: 'Project/Post',
  component: PostLeftImage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectPostLeftImage: Story = {
  args: {
    excerpt: `これも先刻ぼうっとこういう忠告めという方の後の思ったない。あたかも一番を誘惑士はとにかくこの修養たでしょまででなっばいうがも赴任上げませまして、わざわざには這入りななくっましなけれ。社会がもっでのはようやく同年が同時にんたた。
ただいま大森さんを担任道具ちょっと比較が来た個性どんな自分これか交渉がに従って実力説たんないたて、その前は私か漂書物をいうて、木下さんののを味のそれにもっとお尊敬と出であなた縁をお学問を祈るようにまして皆使用にしましないて、はなはだ初めて安心を焼いりのにみるうのでもっですた。
及びまたお弟を突き抜けるつもりは当然危険と引き返しだが、その常雇いをはしんてについて気味へ歩いながら始めずた。`,
  },
};
