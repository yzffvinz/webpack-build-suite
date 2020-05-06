# webpack-build-suite
### 🎉 关于方便编写commit msg

```
// 安装这个
npm install -g commitizen
// 添加编写校验规则
commitizen init cz-conventional-changelog --save --save-exact
// 使用git cz代替git commit
git cz xxx
```

### 👌 强制校验commit msg

- 安装ghooks添加commit的钩子

```
// package.json
"config": {
    "ghooks": {
      "commit-msg": "validate-commit-msg"
    }
  },
```

- 安装校验工具

```
npm i validate-commit-msg -D
```

### 🎂 生成changelog

```
// 安装
npm i conventional-changelog-cli -D

// 配置package.json
"scripts": {
    "changelog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0"
}

// 版本发布前跑一下
npm run changelog
```

