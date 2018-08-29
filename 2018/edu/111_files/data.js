//
var title = "艾牛(北京)科技有限公司";
//导航菜单
var navList = [
    {
        "title"   : "首页",
        "url"     : "/",
        "isActive": true
    },
    {
        "title"   : "下载",
        "url"     : "/index/index/down",
        "isActive": false
    }
    ,
    {
        "title"   : "关于我们",
        "url"     : "/index/index/about",
        "isActive": false
    }
    ,
    {
        "title"   : "加入我们",
        "url"     : "/index/index/join",
        "isActive": false
    },
    {
        "title"   : "社区",
        "url"     : "http://bbs.ainiu365.com/",
        "isActive": false
    }
];

//合作伙伴
var partnerList = [
    {
        "title" : "sdfsdf",
        "img"   : "/static/Home/images/partner5.gif",
        "url"   : "#"
    },
    {
        "title" : "sdfsdf",
        "img"   : "/static/Home/images/partner6.gif",
        "url"   : "#"
    },
    {
        "title" : "sdfsdf",
        "img"   : "/static/Home/images/partner4.gif",
        "url"   : "#"
    },
    {
        "title" : "sdfsdf",
        "img"   : "/static/Home/images/partner1.gif",
        "url"   : "#"
    },
    {
        "title" : "sdfsdf",
        "img"   : "/static/Home/images/partner3.gif",
        "url"   : "#"
    },
    {
        "title" : "sdfsdf",
        "img"   : "/static/Home/images/partner2.gif",
        "url"   : "#"
    }
];
//banner广告
var banner = {
    //首页广告配置
    "index-banner" : {
        "word" : {
            "bigTit" : "艾牛科技构筑智慧教育生态圈",
            "secTit" : "教育因科技而美好，这是一款让家长放心、老师安心、给学生信心的学生专用手机！！！"
        },
        "bgUrl" : "../static/Home/images/index_banner_left.png"
    },
    "down-banner" : {
        "word"    : {
            "bigTit" : "国内领先的教育成长产业云平台",
            "secTit" : "尽在指间如爱相随"
        },
        "bgUrl" : "../static/Home/images/banner_btm.gif"
    }
};
//服务项目
var serviceItems = [
    {
        "title" : "智慧教育平台",
        "img"   : "/static/Home/images/jiaoyu.gif",
        "url"   : "/index/index/education"
    },
    {
        "title" : "学生手机",
        "img"   : "/static/Home/images/shouji.gif",
        "url"   : "/index/index/productdetail"
    },
    {
        "title" : "合伙人招募",
        "img"   : "/static/Home/images/hhrzm.gif",
        "url"   : "/index/index/recruit"
    }
];

var newsList = [
    {
        "title"  : "市领导及福利时间的浪费建设的经费了收到了房间",
        "date"   : "2017/02/03",
        "author" : "中国新闻网",
        "desc"   : "设计的分开交上来看等级，分类考试等级分类考试的解放路，口深刻的垃圾分类考试的积分是的考虑；福建省领导开发技术圣诞节疯狂了，世界疯了快圣诞节疯狂老师是可怜的解放了",
        "id"     : 1,
        "img"    : "/static/Home/images/news_img.gif"

    },
    {
        "title"  : "市领导及福利时间的浪费建设的经费了收到了房间",
        "date"   : "2017/02/03",
        "author" : "中国新闻网",
        "desc"   : "设计的分开交上来看等级，分类考试等级分类考试的解放路，口深刻的垃圾分类考试的积分是的考虑；福建省领导开发技术圣诞节疯狂了，世界疯了快圣诞节疯狂老师是可怜的解放了",
        "id"     : 2,
        "img"    : "/static/Home/images/news_img.gif"
    },
    {
        "title"  : "市领导及福利时间的浪费建设的经费了收到了房间",
        "date"   : "2017/02/03",
        "author" : "中国新闻网",
        "desc"   : "设计的分开交上来看等级，分类考试等级分类考试的解放路，口深刻的垃圾分类考试的积分是的考虑；福建省领导开发技术圣诞节疯狂了，世界疯了快圣诞节疯狂老师是可怜的解放了",
        "id"     : 3,
        "img"    : "/static/Home/images/news_img.gif"
    }
];

//下载页面下载选择框
var downBox = {
    "items" : [
        {
            "id"   : "parent",
            "active": "active",
            "type" : "parent",
            "title" : "家长端",
            "version" : "V1.2",
            "iconImg" : "/static/Home/images/icon_parent.png",
            "ewm"     : "/static/Home/images/ewm_pernet.gif",
            "mark"    : "艾牛教育支持iOS8.0,安卓4.0.3以上的系统",
            "btnGroup" : [
                {
                    "title" : "苹果客户端",
                    "url"   : "https://itunes.apple.com/cn/app/id1269175857?mt=8 ",
                    "icon"  : "icon-apple"
                },
                {
                    "title" : "安卓客户端",
                    "url"   : "http://m.shouji.360tpcdn.com/180207/05353a7e320af7be1b9bbdd8ed3ee06c/com.ainiu.home_20180207.apk?crazycache=1",
                    "icon"  : "icon-android"
                }
            ]
        },
        {
            "id" : "teacher",
            "active": "",
            "type" : "teacher",
            "title" : "教师端",
            "version" : "V1.2",
            "iconImg" : "/static/Home/images/icon_teacher.png",
            "ewm"     : "/static/Home/images/ewm_teacher.png",
            "mark"    : "艾牛教育支持iOS8.0,安卓4.0.3以上的系统",
            "btnGroup" : [
                {
                    "title" : "苹果客户端",
                    "url"   : "https://itunes.apple.com/cn/app/id1268537008?mt=8",
                    "icon"  : "icon-apple"
                },
                {
                    "title" : "安卓客户端",
                    "url"   : "http://m.shouji.360tpcdn.com/180207/992f95d58e1fb9227a9628ce2c412d8d/com.ainiu.teacherclient_20180110.apk?crazycache=1",
                    "icon"  : "icon-android"
                }
            ]
        }
    ]
}

//底部
var footer = {
    "title" : "客服热线",
    "hotLine" : "010-88869517",
    "serviceTime" : "服务时间： 7:00-22:00",
    "btmNav" : [
        {
            "title" : "用户条款",
            "url"   : "/index/index/clause"
        },
        {
            "title" : "隐私保护",
            "url"   : "/index/index/privacy"
        },
        {
            "title" : "资质证明",
            "url"   : "/index/index/qualifications"
        },
        {
            "title" : "联系我们",
            "url"   : "/index/index/contact"
        }
    ],
    "copyright" : "<p>Copyrights © 2006 - 2017 FLOW TECHNOLOGY. All Rights Reserved.</p> <p>艾牛（北京）科技有限公司   版权所有 京ICP备17008295号</p><p>统一社会信用代码91110105790676397Y</p>"
}
//默认init方法
//$("title").html(title); //更改网页标题
$(window).resize(function(){
    h = setBannerHeight();
    var banner = $('#index-banner,#about-banner,＃join-banner,#down-banner,#recruit-banner,contact-banner');
    banner.height(h);
});
//导航组件
var nav = new Vue({
    el    :  "#header",
    data  : {
        "navList" : navList
    }
});
//底部组件
var footer = new Vue({
    el   :  "#footer",
    data :  footer
});

function setBannerHeight(){
    var WinH=$(window).height();
    var WinW=$(window).width();
    var h = 800*WinW/1920;
    return h;
}
