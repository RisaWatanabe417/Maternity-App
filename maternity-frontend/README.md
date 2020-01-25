# maternity-frontend

## プロジェクトセットアップ
```
yarn install
```

### ローカル起動
```
yarn serve
```

### 成果物生成
```
yarn build
```

### Lint&フォーマット実行
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## プロジェクト生成方法

### 前提条件
- Node.jsインストール済み
- yarnインストール済み

### 作成手順

#### Vue CLIインストール
```
# yarnを使用する場合
yarn global add @vue/cli

# npmを使用する場合
npm -g install @vue/cli

# 正しくインストール出来ているか確認
vue --version
```

#### プロジェクト作成
作成したいディレクトリで

```
vue create (プロジェクト名)
```

オプションは適宜指定

このプロジェクトは以下を使用

- Babel
- Vue Router(historyモード)
- eslint + prettier
