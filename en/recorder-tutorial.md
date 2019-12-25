---
layout: rightnav
title: Recorder SDK tutorial
lang: en
breadcrumb: [en/index.md, en/developer.md]
---

- TOC
{:toc}

# Recorder SDK チュートリアル

録音SDKの基本機能を利用して、シンプルな伝言メモアプリを作成することで、録音SDKの使い方について理解を深めます。
録音ボタンを押してから、録音終了ボタンを押すまでの間のマイク入力を録音する機能を実装していきます。

**本機能はEnterprise Edition限定となります。**

## 開発前の準備
### Google Cloud Platformの準備
録音された音声ファイルはGoogle Cloud Storage (以下、GCS) 上の指定されたバケットにアップロードされます。SkyWayの録音機能を使うためには、まずバケットの用意と、そのバケットに書き込む権限を持ったサービスアカウントの準備が必要です。

### バケットの用意
Google Cloud Platform(GCP)のダッシュボードにログインし、[GCSのページ](https://console.cloud.google.com/storage/browser)からバケットを作成してください。（GCPダッシュボードにおける左メニューの「Storage」→ 「ブラウザ」と遷移しても開くことが出来ます)

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/gcs-list.png"
    class="figure-img img-fluid rounded" alt="GCS バケット一覧画面">
  <figcaption class="figure-caption">GCS バケット一覧画面</figcaption>
</figure>

バケットの作成時に入力するバケット名や各種設定はお客様の環境に合わせた任意の設定で問題ありません。
また、このあとバケット名を利用する手順があるのでバケット名は控えておいてください。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/gcs-add.png"
    class="figure-img img-fluid rounded" alt="GCS バケット作成画面">
  <figcaption class="figure-caption">GCS バケット作成画面</figcaption>
</figure>

バケットの作成が完了したら、次はサービスアカウントの設定を行います。

### サービスアカウントの準備
[サービスアカウントのページ](https://console.cloud.google.com/iam-admin/serviceaccounts)からサービスアカウントを作成します。（GCPダッシュボードにおける左メニューの「IAM」→「サービスアカウント」と遷移しても開くことが出来ます）

ここで作成したサービスアカウントは後の手順にて先ほどのバケットへの書き込み権限を付与します。その後、SkyWayのDashboardに認証情報を渡すことで、SkyWayの録音サーバがお客様のバケットにファイルを保存できるようになります。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/service-account-list.png"
    class="figure-img img-fluid rounded" alt="GCP サービスアカウント一覧画面">
  <figcaption class="figure-caption">GCP サービスアカウント一覧画面</figcaption>
</figure>

上部のメニュー「サービスアカウントを作成」からサービスアカウントを新規に作成します。

任意のサービスアカウント名とサービスアカウントID、説明を入力して「作成」ボタンを押します。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/service-account-create.png"
    class="figure-img img-fluid rounded" alt="GCP サービスアカウント作成画面 - 1">
  <figcaption class="figure-caption">GCP サービスアカウント作成画面 - 1</figcaption>
</figure>

バケットの権限設定はここでは行わないので、権限は何も付与する必要はありません。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/service-account-create-2.png"
    class="figure-img img-fluid rounded" alt="GCP サービスアカウント作成画面 - 2">
  <figcaption class="figure-caption">GCP サービスアカウント作成画面 - 2</figcaption>
</figure>

このあとの手順で利用するサービスアカウントキーを生成します。

「キーを作成」ボタンを押してください。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/service-account-create-3.png"
    class="figure-img img-fluid rounded" alt="GCP サービスアカウント作成画面 - 3">
  <figcaption class="figure-caption">GCP サービスアカウント作成画面 - 3</figcaption>
</figure>

「JSON形式」を選択して「作成」ボタンを押してください。

作成が完了するとJSONファイルがダウンロードされます。
その後、元の画面で「完了」を押し、サービスアカウントの作成を完了させてください。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/service-account-create-4.png"
    class="figure-img img-fluid rounded" alt="GCP サービスアカウント作成画面 - 4">
  <figcaption class="figure-caption">GCP サービスアカウント作成画面 - 4</figcaption>
</figure>


### サービスアカウントに録音用バケットの書き込み権限を設定
次に作成したサービスアカウントが録音用バケットにファイルを書き込めるように設定をします。

先程作成したバケットのページに移動します。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/gcs.png"
    class="figure-img img-fluid rounded" alt="GCS バケット詳細画面">
  <figcaption class="figure-caption">GCS バケット詳細画面</figcaption>
</figure>

上部にある「権限」タブを押して、権限ページに遷移します。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/gcs-permission.png"
    class="figure-img img-fluid rounded" alt="GCS バケット権限画面">
  <figcaption class="figure-caption">GCS バケット権限画面</figcaption>
</figure>

「メンバーを追加」ボタンを押してメンバー追加画面を開きます。
新しいメンバーに先ほど作成したサービスアカウント名を入力します。この時、プロジェクトの情報も付与された**@以降も必要ですのでご注意ください**。

権限の欄で「ストレージ」の**「ストレージオブジェクト作成者」**を選択し、保存します。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/gcs-permission-add.png"
    class="figure-img img-fluid rounded" alt="GCS バケット権限追加画面">
  <figcaption class="figure-caption">GCS バケット権限追加画面</figcaption>
</figure>

以上で、GCS側の設定は終わりです。
次にこれらのGCSの情報をSkyWayのDashboardに設定します。

### SkyWayのAPIキー発行と設定
SkyWayのDashboardにログインし、新しいアプリケーションを作成します。

チュートリアルアプリはローカル環境で動かすため、利用可能ドメインに「localhost」を入力してください。

次に、権限セクションにおいて「録音機能を利用する」にチェックを入れて、その下の録音セクションにおいて「Google Cloud Storage バケット名」と、「サービスアカウントキー」に先程ダウンロードしたJSONファイルを指定してください。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/skyway-app.png"
    class="figure-img img-fluid rounded" alt="SkyWayアプリケーション作成画面">
  <figcaption class="figure-caption">SkyWayアプリケーション作成画面</figcaption>
</figure>

アプリケーションの作成が完了したら、APIキーが払い出されます。

録音機能が有効なアプリケーションには「録音ステータス」という項目が表示されます。
サービス運用中にこの値が「利用停止中。GCSの権限を確認し再設定してください」となっている場合、バケットが存在しないか、バケットに書き込む権限がない可能性があるため確認してください。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/skyway-app-created.png"
    class="figure-img img-fluid rounded" alt="SkyWayアプリケーション一覧画面">
  <figcaption class="figure-caption">SkyWayアプリケーション一覧画面</figcaption>
</figure>

これで、事前準備は終わりです。
次はチュートリアルアプリを作って、実行してみます。

## プロジェクトの作成
### 各ファイルの準備
下記のようなHTMLファイルとJavaScriptファイルを作成してください。

`./index.html`

```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>skyway-recorder-tutorial</title>
</head>
<body>
    <p id="status">待機中</p>
    <button id="rec-start-button">録音開始</button>
    <button id="rec-end-button">録音停止</button>
    <script src="https://cdn.webrtc.ecl.ntt.com/skyway-recorder-latest.js"></script>
    <script src="./app.js"></script>
</body>
</html>
```

---

`./app.js`

```js
let recorder = null;

window.onload = async () => {
    // SkyWayのAPIキーを定義する
    const apiKey = "<APIKEY>";

    // ボタンやステータス表示用のDOMを取得
    const status = document.querySelector("#status");
    const recStartButton = document.querySelector("#rec-start-button");
    const recStopButton = document.querySelector("#rec-end-button");

    // 録音開始ボタンを押した際の動作を定義
    recStartButton.onclick = async () => {
        // すでに録音が開始している場合は処理をしない
        if (recorder) return;

        // 録音するトラックを作成する
        const track = await navigator.mediaDevices
            .getUserMedia({ audio: true })
            .then(s => s.getAudioTracks()[0]);

        // 録音するために必要なRecorderオブジェクトを作成
        recorder = SkyWayRecorder.createRecorder(apiKey)

        // 録音中にエラーが起こった時にコンソールに表示する
        recorder.on("abort", (err) => {
          console.log("Aborted!:", err)
        });

        // 録音を開始する
        // (1つのRecorderは1つのトラックのみを録音できる。
        // 複数録音したい場合は、Recorderも同じ数だけ作成する必要がある)
        const res = await recorder.start(track);

        // startの戻り値に録音ファイル名となる録音IDが返ってきている
        status.textContent = `録音中 (録音ID: ${res.id})`
    }

    // 録音停止ボタンを押した際の動作を定義
    recStopButton.onclick = async () => {
        // 録音が開始されていない場合は処理をしない
        if (!recorder) return

        await recorder.stop();
        status.textContent = "録音完了";
        recorder = null;
    }
}
```

### APIKEYの差し替え
`app.js` の `<APIKEY>` となっている部分を、払い出した自身のAPIKEYに差し替えてください。

## チュートリアルアプリの実行
### ローカルサーバの起動
WebRTCの機能をローカル環境で利用する場合は、Webサーバを利用する必要があります。
以下に示すいくつかの方法で、Webサーバをローカル環境で利用することができます。

#### Macの場合

以下に示すいくつかの方法で、Webサーバをローカル環境で利用することができます。

*python 2.X*
{: .lang }

```sh
$ python -m SimpleHTTPServer 8080
```

*python 3.X*
{: .lang }

```sh
$ python -m http.server 8080
```

*ruby*
{: .lang }

```sh
$ ruby -run -e httpd . -p 8080
```

*php*
{: .lang }

```sh
$ php -S localhost:8080
```

#### Windowsの場合

[Mongoose](https://cesanta.com/){:target="_blank"}や[XAMPP](https://sourceforge.net/projects/xampp/){:target="_blank"}をインストールし、Webサーバをローカル環境で利用できるようにしてください。

### チュートリアルアプリの実行
サーバを起動したら `index.html` をブラウザで開いてください。

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/tutorial-app.png"
    class="figure-img img-fluid rounded" alt="チュートリアルアプリ画面">
  <figcaption class="figure-caption">チュートリアルアプリ画面</figcaption>
</figure>

録音ボタンを押して、マイクに音声を入力してください。
その際に表示される「録音ID」が、今回録音したデータを識別するIDになりますので、控えておいてください。
その後、録音停止ボタンを押すと、SkyWayの録音サーバが指定されたGCSバケットにファイルをアップロードします。
（アップロードは非同期に行われるため、長時間録音した場合はアップロードまでに少し時間がかかります）

## 録音されたファイルの確認
Google Cloud Storage上で、録音されたファイルがアップロードされているか確認しましょう。
バケットには下記のようなフォルダ構造で音声ファイルとメタデータファイルが保存されます。

先程使ったAPIKEYと、控えておいた録音IDから当該のフォルダを見つけてください。 `audio.ogg` ファイルが目的の音声ファイルです。

```
root
├ <APIKEY>
│ └ <録音ID>
│      ├ audio.ogg
│      └ meta.json
```

<figure class="figure tutorial-image">
  <img src="{{ site.baseurl }}/images/recorder-tutorial/gcs-uploaded.png"
    class="figure-img img-fluid rounded" alt="GCS 録音フォルダ画面">
  <figcaption class="figure-caption">GCS 録音フォルダ画面</figcaption>
</figure>

`meta.json` には下記のような録音開始・停止日時(unixtime\[ms\])と録音時間\[ms\]が含まれています。

```json
{
  "start": 1572942489858,
  "end": 1572942507223,
  "duration": 17365
}
```

以上で録音SDKのチュートリアルは完了です。
