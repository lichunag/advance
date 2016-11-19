define(function(require, exports, module){
	var util = require('./util');
	var showIndex = 0;
    setInterval(function(){
      util.slide(showIndex);
      showIndex++;
      if(showIndex > 1){
      	showIndex = 0;
      }
    },3000);
	
	var arr=[
		{
			"img":"../image/pal-detailTitle.jpg"
		},
		{
			"img":"../image/rahj-detailTitle-02.jpg"
		}
	];
	var banner = require('../view/banner.html');
	var bannerHtml = _.template( banner );
	$("#banner").html( bannerHtml({imgArr:arr}) );
// 命名规范：不能写成“img-text”
	var txt=[
        {
        	"img":"../image/rahj-detailTitle-02.jpg",
        	"imgtext":"爱,回家!让留守儿童家庭春节团聚",
        	"jigou":"中国青少年发展基金会",
        	"money":"20,3423.00",
        	"people":"2100人",
        	"icon":"../image/icon1.png"
        },
        {
        	"img":"../image/pal-detailTitle.jpg",
        	"imgtext":"一个绿色的承诺",
        	"jigou":"中国青少年发展基金会",
        	"money":"30,2324.00",
        	"people":"3200人",
        	"icon":"../image/icon1.png"
        }
	];
	var main = require('../view/mainView.html');
	var mainHtml = _.template(main);
	$("#center").html(mainHtml({mainArr:txt}));
})