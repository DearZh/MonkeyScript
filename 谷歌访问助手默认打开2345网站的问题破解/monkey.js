// ==UserScript==
// @name         谷歌访问助手默认打开2345网站的问题破解
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  我不想一直使用百度，我想科学上网，于是我安装了“谷歌访问助手”，呵！但它竟然需要我设置默认主页的方式来永久激活！这是不能忍受的，于是本插件的目的便是用来帮你避开讨厌的2345门户网站，默认直接打开Google主页，并且仍然可以永久激活“谷歌访问助手”哦。
// @author       arnold.zhao
// @match        *://*.hao245.com/*
// @match        *://*.2345.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    //var add = window.location.href;
    //if(add != "" && (add.indexOf("hao245")!= -1 || add.indexOf("2345")!= -1)){
    //      window.location.href="http://google.com"
    //}
    //1.较好的跳转体验，在网站的加载时便直接进行跳转
    //2.手动设置了排除名单，避免了monKey的过多加载

    //如果你还想同时打开百度,则删除代码注释（注：需开启网页弹窗权限）
    //window.open("http://baidu.com");

    //此处通过@match中指定网址的方式进行域名的区分
     window.location.href="http://google.com";


})();