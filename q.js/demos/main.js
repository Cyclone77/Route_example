﻿requirejs.config({
    paths: {
        'Q': "../q"
    },
    shim: {
        "Q": { exports: 'Q' }
    }
});
require(["Q"], function (Q) {
    var
    M = document.getElementById('m'),
    $ = function (i) { return document.querySelector(i) };

    Q.reg('home', function () {
        M.innerHTML = '这里是首页';
    }).reg([
      ['about', function () {
          M.innerHTML = '我是卜卜口';
      }],
      ['friend', function () {
          M.innerHTML = '<a href="#!猫娘1">猫娘1</a><a href="#!猫娘2">猫娘2</a><a href="#!猫娘3">猫娘3</a>';
      }],
      ['void']//这里什么都没有
    ]).reg('void2');//这里也什么都没有

    Q.reg(['猫娘1', '猫娘2', '猫娘3'], function () {
        M.innerHTML = '喵喵喵';
    });



    Q.init({
        index: 'home', /* 首页地址 */
        pop: function (L) {/* 每次有url变更时都会触发pop回调 */
            /* L 为当前回调函数名称（目前仅支持关键字回调情况） */

            var a;//临时变量
            if (a = $('nav a.active')) //如果存在这个DOM 
                a.className = ''; //修改它的ClassName
            if (a = $('nav a[href="#!' + L + '"]')) //如果存在这个DOM 
                a.className = 'active';//修改它的ClassName
        }
    });
});
