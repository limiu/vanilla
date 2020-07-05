---
title:button
---

# button 按钮

提供单个按钮和组合形式的按钮，按钮支持添加图标，设置图标位置等功能。

## 单个按钮
<br/>
<br/>
<ClientOnly>
<button-demo></button-demo>
</ClientOnly>

### 代码
```html
 <div>
        <g-button>默认按钮</g-button>
        <g-button icon="settings">设置</g-button>
        <g-button icon="thumbs-up">点赞</g-button>
        <g-button icon="download" icon-position="right">下载</g-button>
        <g-button icon="loading" :loading="true">登陆中</g-button>
    </div>
```

## 组合按钮
<br/>
<br/>
<button-group-demo></button-group-demo>

### 代码
```html
  <div>
        <g-button-group>
            <g-button>上一页</g-button>
            <g-button>下一页</g-button>
        </g-button-group>
    </div>
```