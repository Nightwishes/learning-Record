## 初始化包
package.json 
```bash
npm init -y #默认直接生成
```

## 下载包
- 全局安装 在任意命令行下使用
```
npm i http-server -g
```
> 可以在命令中使用

/usr/local/bin/http-server -> /usr/local/lib/node_modules/http-server/bin/http-server
/usr/local/bin/hs -> /usr/local/lib/node_modules/http-server/bin/http-server

我要写一个全局包,npm link链接,创建快捷方式指向我的文件
```
"bin": {
    "lesson-zf": "./bin/www",
    "lz":"./bin/www"
},
```

- 本地安装
```
npm install jquery --save / -S
npm install webpack --save-dev / -D
```

默认不给--save表示安装到当前的dependencies 表示是上线和开发的时候都需要
devDependencies 开发依赖 上线的时候不需要

> 有一天把模块发布了 别人会安装你的发布的模块，如果你的模块被别人安装，你的模块中的dependencies会默认一起呗下载,devDependencies不会下载的

sudo npm cache clean --force

常见的依赖项
dependcies
devDepencies
npm install --production 可以只安装dependcies


peerDependencies  会提示你安装缺少的模块 默认要求带版本
bundleDependencies npm pack
optionalDependencies 如果找不到 不会影响npm的下载


## 版本问题
- npm使用了 1.0.0  第一位如果变了 表示不兼容老代码 大规模的更新
第二位表示增加了一些功能
第三位 表示小的补丁

> npm + git

npm version major minor patch 更改版本 并且可以同步 git tag
^2.0.0 只要不到3都可以 不能小于2  2.0.1 2.2.2
~2.1.0 不超过1 就ok 2.1.2
>=2.1.0
<=2.0.0
2.1.0-alpha.1
2.1.0-beta.1 测试 内测试用的
2.1.0-rc.1 

> 你们项目如何发版

## 协议问题
http://www.ruanyifeng.com/blogimg/asset/201105/free_software_licenses.png


## scripts
scripts 配置执行的脚本 
1) 执行命令 echo xxx
2) 执行node_modules/.bin下的文件

当我执行npm run 的时候 他会把当前目录node_modules/.bin也拷贝到当前的系统的path中,所以npm run 可以执行.bin下的文件

## npx
可以直接执行node_modules/.bin文件 不需要在去配置scriprts
如果模块不存在可以安装 ,安装完是有后还会自己销毁,避免安装全局模块
npx create-react-app project-name

## 发布
发布包的时候 @vue/cli @vue/service
先切换到npm官方上
nrm nvm npm可以切换源
```bash
npm install nrm -g 
nrm use npm
```