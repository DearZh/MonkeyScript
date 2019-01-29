// ==UserScript==
// @name         谷歌访问助手默认打开2345网站的问题破解
// @namespace    https://github.com/DearZh/MonkeyScript/tree/master/%E8%B0%B7%E6%AD%8C%E8%AE%BF%E9%97%AE%E5%8A%A9%E6%89%8B%E9%BB%98%E8%AE%A4%E6%89%93%E5%BC%802345%E7%BD%91%E7%AB%99%E7%9A%84%E9%97%AE%E9%A2%98%E7%A0%B4%E8%A7%A3
// @version      0.1.3.1
// @description  我不想一直使用百度，我想科学上网，于是我安装了“谷歌访问助手”，呵！但它竟然需要我设置默认主页的方式来永久激活！这是不能忍受的，于是本插件的目的便是用来帮你避开讨厌的2345门户网站，默认直接打开Google主页，并且仍然可以永久激活“谷歌访问助手”哦。
// @author       arnold.zhao
// @match        *://*.hao245.com/*
// @match        *://*.2345.com/*
// @exclude      /(^http:\/\/[^#\?\/]*(:[0-9]{1,5})?\/.*$)/
// @exclude      /(^[^:\/#\?]*:\/\/([^#\?\/]*\.)?pos\.baidu\.com(:[0-9]{1,5})?\/.*$)/
// @exclude      /(^[^:\/#\?]*:\/\/([^#\?\/]*\.)?www\.google\.com(:[0-9]{1,5})?\/.*$)/
// @exclude      /(^[^:\/#\?]*:\/\/([^#\?\/]*\.)?clients5\.google\.com(:[0-9]{1,5})?\/.*$)/
// @exclude      /(^[^:\/#\?]*:\/\/([^#\?\/]*\.)?notifications\.google\.com(:[0-9]{1,5})?\/.*$)/
// @supportURL   https://github.com/DearZh/MonkeyScript/tree/master/%E8%B0%B7%E6%AD%8C%E8%AE%BF%E9%97%AE%E5%8A%A9%E6%89%8B%E9%BB%98%E8%AE%A4%E6%89%93%E5%BC%802345%E7%BD%91%E7%AB%99%E7%9A%84%E9%97%AE%E9%A2%98%E7%A0%B4%E8%A7%A3
// @license      NPOSL-3.0
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