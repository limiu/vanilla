# vanilla 一个Vue UI组件

[![Build Status](https://www.travis-ci.org/LiMiu331/vanilla.svg?branch=master)](https://www.travis-ci.org/LiMiu331/vanilla)
![npm bundle size](https://img.shields.io/bundlephobia/min/vanla)
## 介绍

 一个简单的VUE UI框架，包含一些常用的组件。后续会持续更新。
 
## 开始使用

1. 添加css样式

使用本框架前，请在 CSS 中开启 border-box
```css
*,*::before,*::after{box-sizing: border-box;}
```
IE 8 及以上版本浏览器都支持
你还需要设置默认颜色等变量。
```css
     :root{
             --button-height:32px;
             --font-size:14px;
             --button-bg:white;
             --button-active-bg:#eee;
             --border-radius:4px;
             --color:#333;
             --border-color:#999;
             --border-color-hover:#666;
         }
```
IE 15 及以上浏览器支持此样式

2. 安装香草

```shell script
yarn add vanla
npm i -S vanla
```
3. 引入 vanla

```js
  import  {Button,ButtonGroup,Icon} from 'vanla'
  import 'vanla/dist/index.css'
  export  default {
   components:{
     'g-button':Button,
     'g-icon':Icon
   }
  }
```
## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码

## 交流群

