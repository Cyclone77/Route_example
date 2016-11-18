; (function (window, document) {
    //创建对象
    var spaRoute = function (options) {
        return new spaRoute.prototype.init(options);
    };

    spaRoute.prototype = {
        constructor: spaRoute,
        // 是否允许跳转到当前相同URL，相当于刷新
        same: false,
        // 是否通过Ajax渲染目标
        ajaxget: false,
        //渲染目标
        applyDom: null,
        //路由内容
        routeArray: [{
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
        init: function (options) {
            tool.extend(this, options);
            return this;
        },
        register: function (options) {
           
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
        },
        //返回数据类型
        _typeof: function (obj) {
            if (obj == null) {
                return String(obj);
            }
            return typeof obj === "object" || typeof obj === "function" ?
                class2type[class2type.toString.call(obj)] || "object" :
                typeof obj;
        }
    };

    //数据类型
    var class2type = {};
    "Boolean Number String Function Array Date RegExp Object Error".split(" ").forEach(function (e, i) {
        class2type["[object " + e + "]"] = e.toLowerCase();
    });

    spaRoute.prototype.init.prototype = spaRoute.prototype;

    window.Route = spaRoute;
})(window);