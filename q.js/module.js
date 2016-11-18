
; (function (window, undefined) {

    function modeuleOut(options) {
        // 是否允许跳转到当前相同URL，相当于刷新
        this.same = false,
        // 是否通过Ajax渲染目标
        this.ajaxget = false,
        //渲染目标
        this.applyDom = null,
        //路由内容
        this.routeArray = [{
            //触发对象
            eventdom: null,
            //是否通过ajax渲染目标,只对当前路由有效
            ajaxget: this.ajaxget,
            //渲染目标，只对当前路由有效
            applyDom: this.applyDom,
            //渲染后触发回调函数
            applycallback: function () {

            }
        }],
        this.init(options);
    };

    modeuleOut.prototype = {
        constructor: modeuleOut,
        init: function (options) {
            tool.extend(this, options);
            this.register();
        },
        //
        register: function () {
            
            return this;
        }
    };

    //工具箱
    var tool = {
        /*
         * 合并两个对象，浅拷贝
         * @param {Object} obj1
         * @param {Object} obj2
         */
        extend: function (obj1, obj2) {
            if (!obj2) return;

            for (var key in obj2) {
                if (obj2.hasOwnProperty(key)) {
                    obj1[key] = obj2[key];
                }
            }

            return obj1;
        }
    };

    /*
    *   初始化对象
    *   @param {Object} options
    */
    window.module = function (options) {
        return new modeuleOut(options);
    };
})(window);