import React from 'react';
import '@/scss/object/utility/index.scss';
import '@/scss/object/project/_summary.scss';

export const Summary = ({}) => {
  return (
    <section className='p-summary u-mt-4'>
      <h2>あらすじ</h2>
      <blockquote>
        <p>
          地球滅亡を目前にしてもなお、北極に残り続ける孤独な科学者オーガスティン(ジョージ・クルーニー)は、宇宙での任務を終えて地球へ帰還しようとする宇宙線の乗組員サリー(フェリシティ・ジョーンズ)らにその惨状を伝え、何とか止めようと奮闘する___。
        </p>
        <cite>
          <a href='#' target='_blank'>
            YouTube Netflix Japan
          </a>
        </cite>
      </blockquote>
    </section>
  );
};
