requirejs.config({
    paths: {
        'Route': "Route",
        'page1': 'page1'
    }
});

require(["Route"], function (Route) {
    Route({
        same: true,
        animationClass: "fadeInUp",
        applyDom: document.getElementById("page1"),
        routeArray: [{
            eventdom: document.getElementById("apage1"),
            ajaxget: true,
            defaultRoute: true,
            ajaxApplyUrl: "page1.html",
            urlHash: "#!page1",
            pageTitle: "页面1",
            applycallback: function () {
                //document.getElementById("page1").innerHTML = "页面1";
                //document.getElementById("page1").className = "fadeInDown animated";

                //var page1 = require("page1");
                var sdfx = "测试";
                require(["page1"], function (page1) {
                    //alert(sdfx);
                });
            }
        }, {
            eventdom: document.getElementById("apage2"),
            urlHash: "#!page2",
            applycallback: function () {
                document.getElementById("page1").innerHTML = "页面2";
            }
        }, {
            eventdom: document.getElementById("apage3"),
            urlHash: "#!page3",
            applycallback: function () {
                document.getElementById("page1").innerHTML = "页面3";
            }
        }, {
            eventdom: document.getElementById("apage4"),
            urlHash: "#!page4",
            applycallback: function () {
                document.getElementById("page1").innerHTML = "页面4";
            }
        }]
    });
});

