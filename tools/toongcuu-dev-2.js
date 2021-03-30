/* 通古羅馬字 Toong-cuu La-meaa-dzyh
 * 
 * 一種模仿通字方案拼式的中古漢語拼音
 * 作者：抱豹 <baopaau@gmail.com>
 * 改編自有女羅馬字推導腳本 (https://github.com/nk2028/qieyun-examples/blankego.js)
 *
 * 以下內容為生成仿通羅馬字的函數體
 * 函數接受音韻地位，返回對應的通古羅馬字
 *
 */

/* 可調整參數 */
const options = {
  清B脣音: null, /* 清B脣音（「碧」小韻）處理法：默認（`null`）按清B拼寫 */
                 /* 其他可選值： */
                 /* - `'合口'`：按清A合口拼寫，同原表處理法 */
                 /* - `'庚三'`：按庚三拼寫，同韻典處理法 */
  莊組眞欣開口歸臻: true, /* 莊組眞欣韻開口上、去聲均視作臻韻（原表、韻典均如此處理） */
  脣音咍韻作開口: 1, /* 脣音咍韻是否視作開口，可選值： */
                     /* - `0`：一律視作合口 */
                     /* - `1`（默認）：視 `音韻地位.韻` 而定， */
  凡韻非脣音作合口: 1, /* 凡韻非脣音是否視作合口，可選值： */
                       /* - `0`：一律視作開口 */
                       /* - `1`（默認）：視 `音韻地位.韻` 而定， */
};

/* 調整音韻地位 */

if (options.清B脣音 === '庚三' && 音韻地位.屬於('幫組 清韻 重紐B類')) {
  const { 母, 聲 } = 音韻地位;
  音韻地位 = new 音韻地位.constructor(母, null, '三', null, '庚', 聲);
}

if (options.莊組眞欣開口歸臻 && 音韻地位.屬於('莊組 眞欣韻 開口')) {
  const { 母, 等, 聲 } = 音韻地位;
  音韻地位 = new 音韻地位.constructor(母, '開', 等, null, '臻', 聲);
}

if (!options.脣音咍韻作開口 && 音韻地位.屬於('幫組 咍韻')) {
  const { 母, 等, 聲 } = 音韻地位;
  音韻地位 = new 音韻地位.constructor(母, null, 等, null, '灰', 聲);
}

if (!options.凡韻非脣音作合口 && 音韻地位.屬於('凡韻') && !音韻地位.屬於('幫組')) {
  const { 母, 等, 聲 } = 音韻地位;
  音韻地位 = new 音韻地位.constructor(母, '開', 等, null, '嚴', 聲);
}

const is = (x) => 音韻地位.屬於(x);

/**
 * 依次匹配列表 `rules` 中的規則，返回第一項測試為 true 的對應結果。
 * 無匹配規則時抛出異常，`name` 會包含於異常信息中。
 * 
 * `rules` 每項為 `[條件, 結果]`
 * 條件可為：
 * - 字串，會用 `音韻地位.屬於` 測試
 * - 函數，會直接調用並測試返回結果
 * - 其他，直接測試真值
 */
function 規則(name, rules) {
  for (const [rule, res] of rules) {
    if (typeof rule === 'string') {
      if (is(rule)) {
        return res;
      }
    } else if (typeof rule === 'function') {
      if (rule()) {
        return res;
      }
    } else if (rule) {
      return res;
    }
  }
  throw new Error(`無${name}規則：${音韻地位.描述}`);
}


/* 聲母 */

let 母 = {
  幫: 'b',  滂: 'p',  並: 'bh',  明: 'm',
  端: 'd',  透: 't',  定: 'dh',  泥: 'n',
  知: 'dy', 徹: 'ty', 澄: 'dhy', 孃: 'ny',
  精: 'z',  清: 'ts', 從: 'dz',           心: 's',  邪: 'sz',
  莊: 'dr', 初: 'tr', 崇: 'jr',           生: 'sr', 俟: 'zr',
  章: 'j',  昌: 'ch', 船: 'dj', 日: 'r',  書: 'sh', 常: 'zh',
  見: 'c',  溪: 'k',  羣: 'g',  疑: 'q',
  影: '',   曉: 'x',  匣: 'h',  云: 'h',
                                以: '', /* y */
                                來: 'l',
}[音韻地位.母];


/* 韻尾 */

let 尾 = 規則('韻尾', [
  ['遇果假攝 或 支脂之佳韻', ''],
  ['通江宕梗曾攝', 'ng'],
  ['蟹攝 或 微佳韻', 'i'],
  ['臻山攝', 'n'],
  ['效流攝', 'u'],
  ['深咸攝', 'm'],
]);


/* 主元音 */

let 元 = 規則('主元音', [
  ['歌麻　唐庚陽　泰夬廢　寒刪元　豪肴　　談銜嚴凡韻', 'a'],
  ['佳支　青耕清　齊皆祭　先山仙　蕭宵　　添咸鹽　韻', 'e'],
  ['　脂　　　　　　　　　眞　　　　　　　　　侵　韻', 'i'],
  ['　之　　　　　　　　　臻　　　　　　　　　　　韻', 'y'],
  ['　魚　登江蒸　咍灰微　痕魂欣　侯尤幽　覃　　　韻', 'o'],
  ['模虞　冬　鍾　　　　　　　文　　　　　　　　　韻', 'u'],
  ['　　　東　　　　　　　　　　　　　　　　　　　韻', 'oo'],
]);


/* 介音 */

/* 拼寫上使用合口介音的場合 */
const 合口 = (is('合口'))
  || (is('凡韻 或 脣音 歌陽韻'))
  || (is('脣音 一三等')
    && ['a', 'o'].includes(元)
    && !['', 'ng', 'u', 'm'].includes(尾)
    && !is('咍泰韻'))
  || (is('幫組 清韻 重紐B類') && options.清B脣音 === '合口');

let 介 = {
  一: ['', 'u'],
  二: ['e', 'o'],
  三: ['y', 'yu'],
  四: ['', 'u'],
}[音韻地位.等][Number(合口)];

if (is('影母 三等 或 端組 三等 或 章莊組 一四等')) {
  介 = ['i', 'iu'][Number(合口)];
}

/* 處理重紐、重韻 */
if (is('重紐B類') || is('麻庚韻 三等 或 幽韻')) {
  if (['y', 'yu', 'i', 'iu'].includes(介)) {
    介 = {
      y: 'i', yu: 'iu',
      i: 'ii', iu: 'iiu',
    }[介];
  }
}

/* 介音配搭對應元音時，省略介音中對應字母 */
if (/^y/.test(元)) {
  介 = 介.replace(/y$/, '');
} else
if (/^i/.test(元)) {
  介 = 介.replace(/i$/, '');
} else
if (/^u/.test(元)) {
  介 = 介.replace(/u$/, '');
}

/* 拼寫規則 */

/* 區分影以母 */
if (is('影母') && /^y/.test(介+元)) {
  介 = 'i' + 介;
} else
if (is('以母') && /^[^y]/.test(介+元)) {
  介 = 'y' + 介;
}

/* 倄(匣/云合一灰上) huooi -> hwooi */
if (is('云母 一等')) {
  介 = 'w';
} 

/* 二等開口 e 元音寫作 ae */
if (介 === 'e' && 元 === 'e') {
  介 = '';
  元 = 'ae';
} else
/* oe 上聲要雙寫 o，亦視作整體 */
if (介 === 'o' && 元 === 'e') {
  介 = '';
  元 = 'oe';
}

/* 按聲母特性省略多餘字母 */
if (is('知章組 或 日母')) {
  介 = 介.replace(/^y/, '');
} else
if (is('莊組')) {
  介 = 介.replace(/^e/, '');
}

/* 聲調 */
if (音韻地位.聲 === '入') {
  尾 = {
    m: 'p', n: 't', ng: 'c',
  }[尾];
} else
if (音韻地位.聲 === '去' && ['i', 'u', 'ng'].includes(尾)) {
  尾 = {
    i: 'y', u: 'w', ng: 'q',
  }[尾];
} else
if (音韻地位.聲 === '上' && 尾 === 'ng') {
  尾 = 'g';
} else
if (音韻地位.聲 === '上') {
  元 = (['ae', 'oe'].includes(元)) ? 元[0] + 元 : 元 + 元.slice(-1);
} else
if (音韻地位.聲 === '去' && ['m', 'n'].includes(尾)) {
  尾 = 尾 + 尾;
} else
if (音韻地位.聲 === '去' && 尾 === '') {
  元 = 元 + 'h';
}

let result = `${母}${介}${元}${尾}`;

return result
