---
title:input
---

# input 输入框

通过鼠标或键盘输入内容，是最基础的表单域的包装。

## 基本使用
<br/>
<br/>

### 基本使用

<ClientOnly>
<input-demo></input-demo>
</ClientOnly>

### 代码
```html
    <div>
        <g-input></g-input>
        <g-input value="姓名" readonly></g-input>
        <g-input value="姓名" disabled></g-input>
        <g-input value="姓名" error="输入错误"></g-input>
    </div>
```

## 双向绑定
<br/>
<br/>
<ClientOnly>
<input-demo-model></input-demo-model>
</ClientOnly>

### 代码
```vue
  data(){
   return{
        message:'1'
    }
}
```
```html
<div>
    message:{{message}}
</div>
<g-input  v-model="message"></g-input>
```