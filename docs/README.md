# 快速开始

#### 安装组件库
```bash
yarn add cly-ui
```

#### 引用组件库
> 在main.js中使用组件库

```javascript
// 全部引入
import 'cly-ui/dist/css/index.css';
import clyUI from 'cly-ui';
Vue.use(clyUI);

// 按需引用
import 'cly-ui/dist/css/demo.css';
import { Demo } from 'cly-ui';
Vue.use(Demo)
```