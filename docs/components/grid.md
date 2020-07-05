---
title:grid
---

#  Grid 栅格
 Grid24 栅格系统。可设置 gutter，默认支持响应式布局。 
 


## 基本使用
<br/>
<br/>
<ClientOnly>
<grid-demo></grid-demo>
</ClientOnly>

布局的栅格化系统，我们是基于行（`row`）和列（`col`）来定义信息区块的外部框架，以保证页面的每个区域能够稳健地排布起来。下面简单介绍一下它的工作原理：

通过 `row` 在水平方向建立一组 `column`（简写 `col`）

你的内容应当放置于 `col` 内，并且，只有 `col` 可以作为 `row` 的直接元素

栅格系统中的列是指 1 到 24 的值来表示其跨越的范围。例如，三个等宽的列可以使用 

`<g-col span="8">` 来创建。

如果一个 `row` 中的 `col` 总和超过 `24`，那么多余的 `col` 会作为一个整体另起一行排列。

### 代码
```html
       <div>
           <g-row class="demoRow">
               <g-col span="24"><div >100%</div></g-col>
           </g-row>
           <g-row class="demoRow">
               <g-col span="6"><div >6</div></g-col>
               <g-col span="6"><div >6</div></g-col>
               <g-col span="6"><div >6</div></g-col>
               <g-col span="6"><div >6</div></g-col>
           </g-row>
           <g-row class="demoRow">
               <g-col span="8"><div>8</div></g-col>
               <g-col span="8"><div>8</div></g-col>
               <g-col span="8"><div>8</div></g-col>
           </g-row>
           <g-row class="demoRow">
               <g-col span="12"><div>12</div></g-col>
               <g-col span="12"><div>12</div></g-col>
           </g-row>
           <g-row class="demoRow">
               <g-col span="3"><div>3</div></g-col>
               <g-col span="21"><div>21</div></g-col>
           </g-row>
       </div>
```
## 区块间隔
栅格常常需要和间隔进行配合，你可以使用 Row 的 gutter 属性。

<br/>
<br/>
<ClientOnly>
<grid-gutter></grid-gutter>
</ClientOnly>

### 代码
```html
 <div>
        <g-row class="demoRow">
            <g-col span="12"><div>12</div></g-col>
            <g-col span="10"><div>12</div></g-col>
        </g-row>
    </div>
```
## 设置空白
使用offset 可以设置额外的空白区域。

<br/>
<br/>
<ClientOnly>
<grid-offset></grid-offset>
</ClientOnly>

### 代码
```html
<div>
        <g-row class="demoRow" >
            <g-col span="12" offset="2"><div>6</div></g-col>
            <g-col span="10"><div class="demoCol2">6</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="5"><div>5</div></g-col>
            <g-col span="10" offset="9"><div class="demoCol2">10</div></g-col>
        </g-row>
        <g-row class="demoRow">
            <g-col span="5"><div>5</div></g-col>
            <g-col span="5" ><div>5</div></g-col>
            <g-col span="14" offset="3"><div class="demoCol2">14</div></g-col>
        </g-row>
    </div>
```
## 响应式布局
<br/>
<br/>
参照 Bootstrap 的 响应式设计，预设5个响应尺寸：phone ipad pc narrow-pc wide-pc。
默认使用phone尺寸。

### 代码

```html
 <g-row class="demoRow" >
            <g-col span="8"
                   :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"
            ><div class="demoCol1">6</div></g-col>
            <g-col :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"><div class="demoCol2">6</div></g-col>
            <g-col span="8"
                   :ipad="{span:8}"
                   :narrow-pc="{span:4}"
                   :pc="{span:2}"
                   :wide-pc="{span:1}"><div class="demoCol1">6</div></g-col>
        </g-row>
```
