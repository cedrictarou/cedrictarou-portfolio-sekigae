# 席替えアプリ
![席がえアプリ with Vue.js](src/assets/席がえアプリ.gif)
### 概要
学校で使える席替えアプリです。
席替えをするのは簡単ですが、結構時間がかかります。
男女の指定ができるようにして、それぞれ別々にランダムに並べ替えることができます。

### 使い方
席替えを簡単に行うために作ったwebサービスです
1. まず生徒数を入力します。
2. 緑色の枠内に表示される数字をクリックすることで性別を決めます。
3. 青色が男子、赤色が女子です。
4. 「シャッフル」ボタンを押すと男女別にシャッフルがされます。
5. 「リセット」ボタンを押すと表示がリセットされます。
## URL
https://cedrictarou.github.io/cedrictarou-portfolio-sekigae/

### 使用技術
- Vue.js 2.6.10を使用しています。
- Vue cli 4.1.0を使用しています。
- 男女別にシャッフルすることができます。
- inputをwatchで監視し、変更をすぐに反映するようにしています。
- Vue.Draggableを使用して、ドラッグアンドドロップで移動することができます。 https://github.com/SortableJS/Vue.Draggable

## インストール方法
```
npm install
```

### ローカルサーバーでの立ち上げ
```
npm run serve
```
