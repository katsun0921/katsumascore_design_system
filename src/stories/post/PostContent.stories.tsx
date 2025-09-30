import type { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostContent } from './PostContent';

export default {
  title: 'Post/PostContent',
  component: PostContent,
  parameters: {
    layout: 'padded',
  },
} as ComponentMeta<typeof PostContent>;

const Template: ComponentStory<typeof PostContent> = (args) => (
  <PostContent {...args} />
);

// Basic content with paragraphs
export const Basic = Template.bind({});
Basic.args = {
  content: `
    <p>これは基本的な段落の例です。WordPressのWYSIWYGエディタで作成されたコンテンツのスタイルを確認できます。</p>
    <p>複数の段落がある場合の表示も確認できます。適切な間隔が設定されているかチェックしましょう。</p>
  `,
};

// Headings
export const Headings = Template.bind({});
Headings.args = {
  content: `
    <h1>見出し1 (H1) - メインタイトル</h1>
    <p>見出し1の下の段落テキストです。メインタイトルとして使用される最も重要な見出しです。</p>

    <h2>見出し2 (H2) - セクションタイトル</h2>
    <p>見出し2の下の段落テキストです。大きなセクションのタイトルとして使用されます。</p>

    <h3>見出し3 (H3) - サブセクションタイトル</h3>
    <p>見出し3の下の段落テキストです。サブセクションのタイトルとして使用されます。</p>

    <h4>見出し4 (H4) - 小見出し</h4>
    <p>見出し4の下の段落テキストです。より細かい分類の見出しとして使用されます。</p>
  `,
};

// Lists
export const Lists = Template.bind({});
Lists.args = {
  content: `
    <h3>順序なしリスト (ul)</h3>
    <ul>
      <li>リスト項目1</li>
      <li>リスト項目2</li>
      <li>リスト項目3
        <ul>
          <li>ネストしたリスト項目1</li>
          <li>ネストしたリスト項目2</li>
        </ul>
      </li>
    </ul>

    <h3>順序付きリスト (ol)</h3>
    <ol>
      <li>順序付き項目1</li>
      <li>順序付き項目2</li>
      <li>順序付き項目3
        <ol>
          <li>ネストした順序付き項目1</li>
          <li>ネストした順序付き項目2</li>
        </ol>
      </li>
    </ol>
  `,
};

// Text formatting
export const TextFormatting = Template.bind({});
TextFormatting.args = {
  content: `
    <p>通常のテキストです。</p>
    <p><strong>太字（strong）のテキスト</strong>と<em>斜体（em）のテキスト</em>が混在しています。</p>
    <p><b>太字（b）のテキスト</b>と<i>斜体（i）のテキスト</i>も使用できます。</p>
    <p><u>下線付き（u）のテキスト</u>や<s>取り消し線（s）のテキスト</s>もあります。</p>
    <p><code>インラインコード（code）のテキスト</code>も表示できます。</p>
  `,
};

// Links
export const Links = Template.bind({});
Links.args = {
  content: `
    <p>これは<a href="https://example.com">外部リンク</a>の例です。</p>
    <p><a href="#internal">内部リンク</a>や<a href="mailto:test@example.com">メールリンク</a>も使用できます。</p>
    <p><a href="https://example.com" target="_blank" rel="noopener">新しいタブで開くリンク</a>の例です。</p>
  `,
};

// Blockquote
export const Blockquote = Template.bind({});
Blockquote.args = {
  content: `
    <p>通常の段落テキストです。</p>
    <blockquote>
      <p>これは引用文（blockquote）の例です。重要な内容や他のソースからの引用を表示する際に使用されます。</p>
      <p>引用文内でも複数の段落を使用できます。</p>
    </blockquote>
    <p>引用文の後の通常の段落テキストです。</p>
  `,
};

// Images
export const Images = Template.bind({});
Images.args = {
  content: `
    <p>画像の表示例です：</p>
    <img src="/images/dummy-540X400.webp" alt="サンプル画像" style="max-width: 100%; height: auto;" />
    <p>画像の下のテキストです。</p>

    <p>左寄せの画像：</p>
    <img src="/images/dummy-540X400.webp" alt="左寄せ画像" style="float: left; margin: 0 20px 20px 0; max-width: 300px; height: auto;" />
    <p>画像の横に表示されるテキストです。画像が左寄せされているため、このテキストは画像の右側に回り込みます。</p>
    <p>複数の段落がある場合も、画像の回り込みが適切に処理されるか確認できます。</p>
    <div style="clear: both;"></div>

    <p>右寄せの画像：</p>
    <img src="/images/dummy-540X400.webp" alt="右寄せ画像" style="float: right; margin: 0 0 20px 20px; max-width: 300px; height: auto;" />
    <p>画像の横に表示されるテキストです。画像が右寄せされているため、このテキストは画像の左側に回り込みます。</p>
    <div style="clear: both;"></div>
  `,
};

// Horizontal rule
export const HorizontalRule = Template.bind({});
HorizontalRule.args = {
  content: `
    <p>水平線の上のテキストです。</p>
    <hr />
    <p>水平線の下のテキストです。</p>
    <hr style="border: none; border-top: 2px solid #ccc; margin: 30px 0;" />
    <p>カスタムスタイルの水平線の下のテキストです。</p>
  `,
};

// Code blocks
export const CodeBlocks = Template.bind({});
CodeBlocks.args = {
  content: `
    <p>インラインコードの例：<code>console.log('Hello World')</code></p>

    <p>コードブロックの例：</p>
    <pre><code>function greet(name) {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));</code></pre>

    <p>コードブロックの後のテキストです。</p>
  `,
};

// Complex content (all elements combined)
export const ComplexContent = Template.bind({});
ComplexContent.args = {
  content: `
    <h1>WordPress投稿コンテンツの完全な例</h1>

    <p>これは<strong>WordPressのWYSIWYGエディタ</strong>で作成されたコンテンツの<em>包括的な例</em>です。様々なHTMLタグがどのように表示されるかを確認できます。</p>

    <h2>見出し2 (H2) - セクションタイトル</h2>
    <p>見出し2の下の段落テキストです。大きなセクションのタイトルとして使用されます。</p>
    <h3>見出し3 (H3) - サブセクションタイトル</h3>
    <p>見出し3の下の段落テキストです。サブセクションのタイトルとして使用されます。</p>
    <h4>見出し4 (H4) - 小見出し</h4>
    <p>見出し4の下の段落テキストです。より細かい分類の見出しとして使用されます。</p>

    <h2>リストの例</h2>
    <p>以下のようなリストを作成できます：</p>
    <ul>
      <li>順序なしリスト項目1</li>
      <li>順序なしリスト項目2</li>
      <li>順序なしリスト項目3</li>
    </ul>

    <ol>
      <li>順序付きリスト項目1</li>
      <li>順序付きリスト項目2</li>
      <li>順序付きリスト項目3</li>
    </ol>

    <h2>引用文の例</h2>
    <blockquote>
      <p>「これは重要な引用文の例です。他のソースからの引用や、強調したい内容を表示する際に使用されます。」</p>
    </blockquote>

    <h2>リンクの例</h2>
    <p>様々な<a href="https://example.com">リンク</a>を作成できます。また、<a href="mailto:test@example.com">メールリンク</a>も使用可能です。</p>

    <hr />

    <h2>画像の例</h2>
    <img src="/images/dummy-540X400.webp" alt="サンプル画像" style="max-width: 100%; height: auto;" />
    <p><em>画像のキャプションや説明文をここに記述できます。</em></p>

    <h2>コードの例</h2>
    <p>インラインコード：<code>const example = 'Hello World'</code></p>

    <pre><code>// コードブロックの例
function calculateSum(a, b) {
  return a + b;
}

const result = calculateSum(5, 3);
console.log(result); // 8</code></pre>

    <h2>まとめ</h2>
    <p>以上がWordPressのWYSIWYGエディタで使用可能な主要なHTMLタグの例です。これらのスタイルが適切に適用されているか確認してください。</p>
  `,
};

// Empty content
export const EmptyContent = Template.bind({});
EmptyContent.args = {
  content: '',
};

// Content with custom class
export const WithCustomClass = Template.bind({});
WithCustomClass.args = {
  content: `
    <p>カスタムクラスが適用されたコンテンツの例です。</p>
    <p>このコンテンツには追加のCSSクラスが適用されています。</p>
  `,
  className: 'custom-post-content',
};
