# vue3-h5-sdk

基于 Vue3 的开发工具包

## 技术栈

- 运行环境：Node.js 20.12.0
- 开发框架：Vue3 + TypeScript5 + Pinia2 + Vite5
- 依赖管理：pnpm 9

## 项目结构

```shell
├── .husky                            # git hooks 执行脚本
├── .vscode                           # vscode 配置
├── dist                              # vite 编译的 umd 文件
├── docs                              # 使用文档
├── esm                               # babel 编译的 esm 文件
├── examples                          # 测试项目
├── lib                               # babel 编译的 cjs 文件
├── node_modules                      # 项目依赖
├── public                            # 项目静态文件夹
├── src                               # 源代码
│   ├── api                           # api
│   ├── components                    # 组件
│   ├── constants                     # 常量
│   ├── hooks                         # 钩子
│   ├── services                      # 请求
│   ├── store                         # store modules
│   ├── styles                        # 样式
│   ├── types                         # typescript 类型声明
│   ├── utils                         # 工具
│   ├── config.ts                     # 全局配置
│   ├── index.ts                      # 入口
├── .babelrc.js                       # babel 配置
├── .browserslistrc                   # 浏览器兼容配置
├── .cicd                             # cicd 触发文件
├── .commitlintrc.js                  # commitlint 配置
├── .editorconfig                     # 编辑器配置
├── .eslintignore                     # eslint 忽略配置
├── .eslintrc.js                      # eslint 配置
├── .gitignore                        # git 忽略配置
├── .lintstagedrc.js                  # git 提交校验配置
├── .npmrc                            # npm 配置
├── .nvmrc                            # nvm 配置
├── .prettierignore                   # prettier 忽略配置
├── .prettierrc.js                    # prettier 配置
├── .releaserc.js                     # release 配置
├── .stylelintignore                  # stylelint 忽略配置
├── .stylelintrc.js                   # stylelint 配置
├── CHANGELOG.md                      # 版本变更记录
├── index.html                        # 根入口
├── LICENSE                           # 许可证
├── package.json                      # 项目配置
├── pnpm-lock.yaml                    # 项目版本锁
├── README.md                         # 开发说明
├── tsconfig.app.json                 # 项目 ts app 配置
├── tsconfig.build.json               # 实际的 ts 打包配置
├── tsconfig.json                     # 项目 ts 配置入口
├── tsconfig.node.json                # 项目 ts node 配置
├── tsconfig.vitest.json              # 项目 ts vitest 配置
├── vite.config.mts                   # vite 配置
├── vitest.config.mts                 # vitest 配置
```

## 开发规范

请严格遵循 [前端开发规范](https://sxwy.github.io/standard/)

## 开发说明

- 运行 examples

  ```shell
  pnpm install
  pnpm run examples:dev
  ```

- 运行 docs

  ```shell
  pnpm install
  pnpm run docs:dev
  ```

## 发布说明

- 发布 `npm` 需合并到 `beta/master` 分支，请参照 [前端版本管理](https://sxwy.github.io/standard/rules/project/version.html) 中的基础库版本，再执行以下命令

  ```shell
  pnpm run release
  ```

## 相关链接

- [SDK 文档地址](https://sxwy.github.io/vue3-h5-sdk/)
- [SDK npm 地址](https://www.npmjs.com/package/@sxwy/h5-sdk)
- [SDK github 地址](https://github.com/sxwy/vue3-h5-sdk)
