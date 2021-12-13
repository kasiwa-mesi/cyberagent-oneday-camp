# cyberagent-oneday-camp

## CSSアニメーションを導入する
### 導入する理由
JSのアニメーションライブラリより軽い。 さらに、keyframeを自分で設定できるので、工夫がきく。 パフォーマンスにもいいらしい（参考: 高速本）

## 記述したアニメーション
### 読み込み完了
todoリストが読み込み完了した時にアニメーションを表示。
![](https://gyazo.com/ebb2f39ee9ed3550ba75f3d72d80c1e1/raw)

## ユーザーのパフォーマンス面改善
### ガタン問題対策を実行。 
![](https://gyazo.com/bcc8c0c72c3d547f2512b658d05695ff/raw)

リストを囲っているdiv要素に高さを指定することでズレを防ぐことができた。 どうやら、WEBページが画像などの読み込みにより、初回読み込み時とコンテンツの位置がズレる現象をCLSというらしい。 
参考URL: [CLSとは](https://www.start-point.net/blog/web/html/cls/)
[Google社員のTwitter:CLSの解説動画](https://twitter.com/addyosmani/status/1276779799198007301?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1276779799198007301%7Ctwgr%5E%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Fwww.start-point.net%2Fblog%2Fweb%2Fhtml%2Fcls%2F)
