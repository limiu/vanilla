# 快速上手

## 添加CSS样式
使用本框架前，请在 `CSS` 中开启 `border-box`
```css
*，*::before,*::after{ box-sizing: border-box }
```
## 引入vanla
```js
import { Button } from 'vanla'
import 'vanla/dist/index.css'

export default {
    name: 'app',
    components: {
        'g-button': Button
    }
}
```
