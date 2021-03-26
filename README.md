# 通古羅馬字／Toong-cuu La-meaa-dzyh

配方： ℞ **baopaau/rime-toongcuu**

[Rime](http://rime.im) 「通古羅馬字」輸入方案。

通古羅馬字是一種模仿通字方案拼式的中古漢語切韻音系拼音。

## 安裝

[東風破](https://github.com/rime/plum) 安裝口令： `bash rime-install baopaau/rime-toongcuu`

## 拼音方案
### 聲母表
 | 全清   | 次清   | 全濁   | 次濁   | 全清   | 全濁   |
 | :-     | :-     | :-     | :-     | :-     | :-     |
 | 幫  b  | 滂  p  | 並 bh  | 明  m  |        |        |
 | 非  f* | 敷  f* | 奉 fv* | 微  v* |        |        |
 | 端  d  | 透  t  | 定 dh  | 泥  n  |        |        |
 | 知  dy | 徹  ty | 澄 dhy | 孃  ny |        |        |
 | 精  z  | 清  ts | 從 dz  |        | 心  s  | 邪  sz |
 | 莊  dr | 初  tr | 崇 jr  |        | 生  sr | 俟  zr |
 | 章  j  | 昌  ch | 船 dj  | 日  r  | 書  sh | 常  zh |
 | 見  c  | 溪  k  | 羣 g   | 疑  q  |        |        |
 | 影  -  | 曉  x  | 匣 h   | 云  h  |        |        |
 |        |        |        | 以  y  |        |        |
 |        |        |        | 來  l  |        |        |

* 除云母 ⟨**h**⟩ 以外，其餘聲母與通字方案完全一致（通字中云母以 ⟨**y**⟩/⟨**w**⟩ 開頭）。
* 非組聲母 ⟨**f**⟩, ⟨**fv**⟩, ⟨**v**⟩ 僅用於輸入灋，使用時省略介音（不論開合）。

### 介音
 |      | 一等 | 二等 | 三等 | 四等 | 說明                        |
 | :-   | :-   | :-   | :-   | :-   | :-                          |
 | 開口 | 無   | e    | i    | 無   | 通常情況 或 重紐A類         |
 | 開口 |      |      | y    |      | 重紐B類 或 重韻* 或 以母    |
 | 開口 |      |      | ii   |      | 重紐B類 配搭 (影母 或 端組) |
 | 合口 | u    | o    | iu   | u    | 通常情況 或 重紐A類         |
 | 合口 |      |      | yu   |      | 重紐B類 或 重韻* 或 以母    |
 | 合口 |      |      | iiu  |      | 重紐B類 配搭 (影母 或 端組) |
 | 合口 | w    |      |      |      | 云母 一等（倄）             |

* 重韻:

 | 特殊 |                  | 一般   |                 |
 | :-   | :-               | :-     | :-              |
 | 麻三 | ya               | 歌三開 | ia              |
 | 庚三 | yang/iiang[^1]   | 陽     | iang/yang[^2]   |
 | 幽   | yu/iiu[^1]       | 虞     | iu              |

[^1]: 配搭影母或端組時
[^2]: 配搭云母時


### 元音
 | ＊三 | ＊二三 | ＊二三 | ＊二三 | ＊三 | ＊二三三 |    |
 | :-   | :-     | :-     | :-     | :-   | :-       | :- |
 | 歌麻 | 唐庚陽 | 泰夬廢 | 寒刪元 | 豪肴 | 談銜嚴凡 | a  |
 | 佳支 | 青耕清 | 齊皆祭 | 先山仙 | 蕭宵 | 添咸鹽　 | e  |
 | 　脂 | 　　　 | 　　　 | 　　眞 | 　幽 | 　　侵　 | i  |
 | 　之 | 　　　 | 　　　 | 　　臻 | 　　 | 　　　　 | y  |
 | 　魚 | 登江蒸 | 咍灰微 | 痕魂欣 | 侯尤 | 覃　　　 | o  |
 | 模虞 | 冬　鍾 | 　　　 | 　　文 | 　　 | 　　　　 | u  |
 | 　　 | 東　　 | 　　　 | 　　　 | 　　 | 　　　　 | oo |

*[東]: 東韻的平上去聲分別爲 ⟨**oong**⟩, ⟨**oog**⟩, ⟨**ooq**⟩，不與上聲雙寫衝突（韻尾表調優先）。

### 聲調

#### 韻尾對聲調表
 | 平 | 上 | 去 | 入 |
 | -- | -- | -- | -- |
 | Ø  | ＊ | h  |    |
 | i  | ＊ | y  |    |
 | u  | ＊ | w  |    |
 | ng | g  | q  | c  |
 | n  | ＊ | nn | t  |
 | m  | ＊ | mm | p  |

*[＊]: 雙寫韻腹字母

<!--
### 韻母表
 |    | 一等   | 二等   | 三等   | 四等   |
 | 開 | 歌 a   |        | 戈 ia  |        |
 | 合 | 戈 ua  |        | 戈 iua |        |
 | 開 |        | 麻 ea  | 麻 ya  |        |
 | 合 |        | 麻 oa  |        |        |
-->
## 功能

### 反查
本方案支持反查：
  - [地球拼音](https://github.com/rime/rime-terra-pinyin) ℞ **`terra-pinyin`**
  - [粵語拼音](https://github.com/rime/rime-cantonese) ℞ **`rime-cantonese`**
  - [古韻羅馬字](https://github.com/rime/rime-middle-chinese) ℞ **`middle-chinese`**
  - [倉頡五代](https://github.com/rime/rime-cangjie) ℞ **`cangjie`**
  - [五筆畫](https://github.com/rime/rime-cantonese) ℞ **`stroke`**

### Emoji
見 [繪文字](https://github.com/rime/rime-emoji) ℞ **`emoji`**

## 鳴謝
* [biopolyhedron/rime-middle-chinese - 中古漢語拼音](https://github.com/biopolyhedron/rime-middle-chinese/)
* [nk2028/qieyun-autoderiver - 切韻音系自動推導](https://nk2028.shn.hk/qieyun-autoderiver/)
* [韻典網](https://ytenx.org/)
* 有女同車 - 有女羅馬字
* [CC-CEDICT](http://cc-cedict.org/)
* [Android open source project](http://android.git.kernel.org/?p=platform/packages/inputmethods/PinyinIME.git)
* [opencc - 開放中文轉換](http://code.google.com/p/opencc/)
