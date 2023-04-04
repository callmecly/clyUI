# cly-ui 组件库

### 快速开始

#### 1.安装组件库
```bash
yarn add cly-ui
```

#### 2.引用组件库
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