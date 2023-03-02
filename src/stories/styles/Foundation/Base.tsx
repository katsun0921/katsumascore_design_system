import React from 'react';
import '../../../scss/foundation/_base.scss';

const block = {
  padding: '20px',
  borderBottom: '1px solid #ddd',
};

export const Base = () => (
  <div>
    <div style={block}>
      <h1 className="heading1">デフォルトのスタイル</h1>
    </div>
    <div style={block}>
      <h2 className="heading2">見出し一覧</h2>
      <h1>見出し1</h1>
      <h2>見出し2</h2>
      <h3>見出し3</h3>
    </div>
    <div style={block}>
      <h2 className="heading2">本文テキスト</h2>
      <p>デフォルトテキスト</p>
    </div>
    <div style={block}>
      <h2 className="heading2">リンクテキスト</h2>
      <a href="">リンク</a>
    </div>
    <div style={block}>
      <h2 className="heading2">画像</h2>
      <img src="https://placehold.jp/600x600.png" alt="placehold" />
      <a href="">
        <img src="https://placehold.jp/600x600.png" alt="placehold" />
        リンクあり
      </a>
    </div>
    <div style={block}>
      <h2 className="heading2">強調テキスト</h2>
      <p>
        <b>ボールド</b>
      </p>
      <p>
        <strong>Strong</strong>
      </p>
      <p>
        <em>em</em>
      </p>
      <p>
        <small>Small</small>
      </p>
    </div>
    <div style={block}>
      <h2 className="heading2">リスト</h2>
      <ul>
        <li>順序なしリスト</li>
        <li>順序なしリスト</li>
        <li>順序なしリスト</li>
      </ul>
      <ol>
        <li>順序ありリスト</li>
        <li>順序ありリスト</li>
        <li>順序ありリスト</li>
      </ol>
    </div>
    <div style={block}>
      <h2 className="heading2">上付き下付きテキスト</h2>
      <p>
        <var>
          a<sup>2</sup>
        </var>{' '}
        +{' '}
        <var>
          b<sup>2</sup>
        </var>{' '}
        ={' '}
        <var>
          c<sup>2</sup>
        </var>
      </p>
      <p>
        Almost every developer's favorite molecule is C<sub>8</sub>H
        <sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."
      </p>
    </div>
    <div style={block}>
      <h2 className="heading2">引用テキスト</h2>
      <blockquote>引用文</blockquote>
    </div>
    <div style={block}>
      <h2 className="heading2">定義テキスト</h2>
      <dfn>定義テキストです。</dfn>
    </div>
    <div style={block}>
      <h2 className="heading2">水平線</h2>
      <hr />
    </div>
    <div style={block}>
      <h2 className="heading2">後から追加されたテキスト</h2>
      <del>
        <p>“I apologize for the delay.”</p>
      </del>
      <ins cite="../howtobeawizard.html" dateTime="2018-05">
        <p>“A wizard is never late …”</p>
      </ins>
    </div>
    <div style={block}>
      <h2 className="heading2">文字列マーク</h2>
      <p>
        Several species of <mark>salamander</mark> inhabit the temperate
        rainforest of the Pacific Northwest.
      </p>
    </div>
    <div style={block}>
      <h2 className="heading2">行内コード</h2>
      <p>
        The <code>push()</code> method adds one or more elements to the end of
        an array and returns the new length of the array.
      </p>
    </div>
    <div style={block}>
      <h2 className="heading2">キーボード入力</h2>
      <p>
        Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to
        re-render an MDN page.
      </p>
    </div>
    <div style={block}>
      <h2 className="heading2">整形済みテキスト</h2>
      <pre> ここは整形済みのテキストです。 </pre>
    </div>
    <div style={block}>
      <h2 className="heading2">サンプル出力</h2>
      <p>
        <samp>
          Keyboard not found <br />
          Press F1 to continue
        </samp>
      </p>
    </div>
    <div style={block}>
      <h2 className="heading2">行内引用</h2>
      <p>
        When Dave asks HAL to open the pod bay door, HAL answers:{' '}
        <q cite="https://www.imdb.com/title/tt0062622/quotes/qt0396921">
          I'm sorry, Dave. I'm afraid I can't do that.
        </q>
      </p>
    </div>
    <div style={block}>
      <h2 className="heading2">フォーム</h2>
      <fieldset>
        <legend>フォームのスタイル</legend>
        <label>
          テキストフォーム
          <input type="text" name="name" />
        </label>
        <label>
          Eメール
          <input type="email" name="email" />
        </label>
        <div style={{ display: 'flex' }}>
          <label>
            Checkbox 1<input type="checkbox" name="checkbox" />
          </label>
          <label>
            Checkbox 2<input type="checkbox" name="checkbox" />
          </label>
          <label>
            Checkbox 3<input type="checkbox" name="checkbox" />
          </label>
        </div>
        <div style={{ display: 'flex' }}>
          <label>
            Radio 1<input type="radio" name="radio" />
          </label>
          <label>
            Radio 2<input type="radio" name="radio" />
          </label>
          <label>
            Radio 3<input type="radio" name="radio" />
          </label>
        </div>
        <label>
          Search
          <input type="search" name="search" />
        </label>
        <label>
          テキストエリア<textarea name="message"></textarea>
        </label>
        <div>
          <button type="submit">送信</button>
        </div>
      </fieldset>
    </div>
    <div style={block}>
      <h2 className="heading2">テーブル</h2>
      <table>
        <caption>Example Table</caption>
        <thead>
          <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Column 3</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Row 1, Column 1</td>
            <td>Row 1, Column 2</td>
            <td>Row 1, Column 3</td>
          </tr>
          <tr>
            <td>Row 2, Column 1</td>
            <td>Row 2, Column 2</td>
            <td>Row 2, Column 3</td>
          </tr>
          <tr>
            <td>Row 3, Column 1</td>
            <td>Row 3, Column 2</td>
            <td>Row 3, Column 3</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
);
