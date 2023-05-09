import React from 'react';
import '@/scss/object/utility/index.scss';
import '@/scss/object/project/_content.scss';

export const Content = ({}) => {
  return (
    <div className='p-content'>
      <h2 className='wp-block-heading'>ネットの世界の残酷さと救い</h2>
      <p>Uという仮想世界が舞台で、ネット世界を直接的に映していました。</p>
      <ul>
        <li>冒頭で鈴の母親が子供を助けた時の誹謗中傷</li>
        <li>Belleが注目を浴び始めた時のネットの反応</li>
        <li>竜がBelleのコンサートを台無しにした時の、無関係な人々への飛び火</li>
        <li>鈴がしのぶくんに手を握られた時の炎上</li>
      </ul>
    </div>
  );
};
