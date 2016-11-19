define(function(require,exports,module){
	var Util = {
		slide: function(index){
        $('#banner li').eq(index).animate({opacity:1},1000).css({"z-index":"1"}).siblings().animate({opacity:0},1000).css({'z-index':"0"});
		}
	}
	module.exports = Util;
})