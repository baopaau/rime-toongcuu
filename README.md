# 通古羅馬字／Toong-cuu La-meaa-dzyh

配方： ℞ **baopaau/rime-toongcuu**

[Rime](http://rime.im) 「通古羅馬字」輸入方案。

通古羅馬字是一種模仿通字方案拼式的中古漢語切韻音系拼音。

## 安裝

[東風破](https://github.com/rime/plum) 安裝口令： `bash rime-install baopaau/rime-toongcuu`

## 拼音方案
### 聲母
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
 | 影  Ø  | 曉  x  | 匣 h   | 云  h  |        |        |
 |        |        |        | 以  y  |        |        |
 |        |        |        | 來  l  |        |        |

* 除云母 ⟨**h**⟩ 以外，其餘聲母與通字方案完全一致（通字中云母以 ⟨**y**⟩/⟨**w**⟩ 開頭）。
* 非組聲母 ⟨**f**⟩, ⟨**fv**⟩, ⟨**v**⟩ 僅用於輸入灋，使用時省略介音（不論開合）。

### 韻尾
 | 韻部                   | 韻尾 |
 | --                     | --   |
 | 遇果假攝 或 支脂之佳韻 | Ø    |
 | 通江宕梗曾攝           | -ng  |
 | 蟹攝 或 微佳韻         | -i   |
 | 臻山攝                 | -n   |
 | 效流攝                 | -u   |
 | 深咸攝                 | -m   |

### 介音
 |      | 一等 | 二等 | 三等 | 四等 | 說明               |
 | :-   | :-   | :-   | :-   | :-   | :-                 |
 | 開口 | Ø    | e    | i    | Ø    | 甲組               |
 | 開口 |      |      | y    |      | 乙組 / 以母        |
 | 開口 |      |      | ii   |      | 乙組 × (影母/端組) |
 | 合口 | u    | o    | iu   | u    | 甲組               |
 | 合口 |      |      | yu   |      | 乙組 / 以母        |
 | 合口 |      |      | iiu  |      | 乙組 × (影母/端組) |
 | 合口 | w    |      |      |      | 云母 一等（倄）    |

甲組：重紐A類、其餘
乙組：重紐B類、麻庚幽三等
 | 元+尾 | 乙組 |      | 甲組   |      |
 | :-    | :-   | :-   | :-     | :-   |
 | -a    | 麻三 | ya   | 歌三開 | ia   |
 | -ang  | 庚三 | yang | 陽     | iang |
 | -u    | 幽   | yu   | 虞     | iu   |


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

* 東韻的平上去聲分別爲 ⟨**oong**⟩, ⟨**oog**⟩, ⟨**ooq**⟩，不與上聲雙寫衝突（韻尾表調優先）。

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

＊: 雙寫韻腹字母


### 韻母表
  |     | 一等     | 二等     | 三等     | 四等     |
  | :-  | :-       | :-       | :-       | :-       |
  | 開  | 歌 a     |          | 戈 ia    |          | ; 果攝 
  | 合  | 戈 ua    |          | 戈 iua   |          |
  | 開  |          | 麻 ea    | 麻 ya    |          | ; 假攝 
  | 合  |          | 麻 oa    |          |          |
  |     |          |          |          |          |
  | 無  | 模 u     |          | 虞 iu    |          | ; 遇攝
  | 無  |          |          | 魚 io    |          |
  |     |          |          |          |          |
  | 開  | 咍 oi    |          |          |          | ; 蟹攝
  | 合  | 灰 uoi   |          |          |          |
  | 開  |          | 佳 ae    |          |          |
  | 合  |          | 佳 oe    |          |          |
  | 開  |          | 皆 aei   |          | 齊 ei    |
  | 合  |          | 皆 oei   |          | 齊 uei   |
  | 開  |          |          | 祭 iey   |          |
  | 合  |          |          | 祭 iuey  |          |
  | 開  |          |          | 祭 yey   |          | ; B
  | 合  |          |          | 祭 yuey  |          | ; B
  | 開  | 泰 ay    | 夬 eay   | 廢 iay   |          |
  | 合  | 泰 uay   | 夬 oay   | 廢 iuay  |          |
  |     |          |          |          |          |
  | 開  |          |          | 支 ie    |          | ; 止攝
  | 合  |          |          | 支 iue   |          |
  | 開  |          |          | 支 ye    |          | ; B
  | 合  |          |          | 支 yue   |          | ; B
  | 開  |          |          | 脂 i     |          |
  | 合  |          |          | 脂 iui   |          |
  | 開  |          |          | 脂 yi    |          | ; B
  | 合  |          |          | 脂 yui   |          | ; B
  | 開  |          |          | 之 y     |          |
  | 開  |          |          | 微 ioi   |          |
  | 合  |          |          | 微 iuoi  |          |
  |     |          |          |          |          |
  | 開  | 豪 au    | 肴 eau   |          |          | ; 效攝
  | 開  |          |          | 宵 ieu   | 蕭 eu    |
  | 開  |          |          | 宵 yeu   |          |
  |     |          |          |          |          |
  | 開  | 侯 ou    |          |          |          | ; 流攝
  | 無  |          |          | 尤 iou   |          |
  | 無  |          |          | 幽 you   |          | ; 舊作yiu
  |     |          |          |          |          |
  | 開  | 談 am    | 銜 eam   | 嚴 iam   |          | ; 咸攝
  | 合  |          |          | 凡 iuam  |          |
  | 開  |          | 咸 aem   | 鹽 iem   | 添 em    |
  | 開  | 覃 om    |          |          |          |
  |     |          |          |          |          |
  | 開  |          |          | 侵 im    |          | ; 深攝
  | 開  |          |          | 侵 yim   |          |
  |     |          |          |          |          |
  | 開  | 寒 an    | 刪 ean   | 元 ian   | 先 en    | ; 山攝
  | 合  | 寒 uan   | 刪 oan   | 元 iuan  | 先 uen   |
  | 開  |          | 山 aen   | 仙 ien   |          |
  | 合  |          | 山 oen   | 仙 iuen  |          |
  | 開  |          |          | 仙 yen   |          | ; B
  | 合  |          |          | 仙 yuen  |          | ; B
  |     |          |          |          |          |
  | 開  | 痕 on    |          |          |          |
  | 合  | 魂 uon   |          |          |          |
  | 開  |          |          | 眞 in    |          | ; 臻攝
  | 合  |          |          | 眞 iuin  |          |
  | 開  |          |          | 眞 yin   |          | ; B
  | 合  |          |          | 眞 yuin  |          | ; B 
  | 開  |          |          | 臻 yn    |          |
  | 開  |          |          | 欣 ion   |          |
  | 合  |          |          | 文 iun   |          |
  |     |          |          |          |          |
  | 開  | 唐 ang   |          | 陽 iang  |          |
  | 合  | 唐 uang  |          | 陽 iuang |          |
  |     |          |          |          |          |
  | 開  |          | 庚 eang  | 庚 yang  |          |
  | 合  |          | 庚 oang  | 庚 yuang |          |
  | 開  |          | 耕 aeng  | 清 ieng  | 青 eng   |
  | 合  |          | 耕 oeng  | 清 iueng | 青 ueng  |
  |     |          |          |          |          |
  | 開  | 登 ong   |          | 蒸 iong  |          | ; 曾攝
  | 合  | 登 ong   |          | 蒸 iuong |          |
  |     |          |          |          |          |
  | 無  | 東 oong  |          | 東 ioong |          |
  | 無  | 冬 ung   |          | 鍾 iung  |          |



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
