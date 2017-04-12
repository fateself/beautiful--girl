var extend = function( target ) {
	var args = arguments,
			i = 1,
			l = args.length;

	var k, obj;

	if ( target == undefined ){
		return;
	}

	for( ; i < l; i ++ ){
		obj = args[ i ];
		for( k in obj ){
			if( obj.hasOwnProperty( k ) ){
				target[ k ] = obj[ k ];
			}
		}
	}

	return target;
};

var colors = 
        ( "blueviolet,brown,burlywood,cadetblue,chartreuse,chocolate,coral,cornflowerblue,cornsilk," +
        "crimson,cyan,darkblue,darkcyan,darkgoldenrod,darkgray,darkgreen,darkgrey,darkkhaki,darkmagenta," +
        "darkolivegreen,darkorange,darkorchid,darkred,darksalmon,darkseagreen,darkslateblue,darkslategray," +
        "darkslategrey,darkturquoise,darkviolet,deeppink,deepskyblue,dimgray,dimgrey,dodgerblue,firebrick," +
        "floralwhite,forestgreen,fuchsia,gainsboro,ghostwhite,gold,goldenrod,gray,green,greenyellow,grey," +
        "honeydew,hotpink,indianred,indigo,ivory,khaki,lavender,lavenderblush,lawngreen,lemonchiffon," + 
        "lightblue,lightcoral,lightcyan,lightgoldenrodyellow,lightgray,lightgreen,lightgrey,lightpink," +
        "lightsalmon,lightseagreen,lightskyblue,lightslategray,lightslategrey,lightsteelblue,lightyellow," +
        "lime,limegreen,linen,magenta,maroon,mediumaquamarine,mediumblue,mediumorchid,mediumpurple," +
        "mediumseagreen,mediumslateblue,mediumspringgreen,mediumturquoise,mediumvioletred,midnightblue," +
        "mintcream,mistyrose,moccasin,navajowhite,navy,oldlace,olive,olivedrab,orange,orangered,orchid," +
        "palegoldenrod,palegreen,paleturquoise,palevioletred,papayawhip,peachpuff,peru,pink,plum,powderblue," +
        "purple,rebeccapurple,red,rosybrown,royalblue,saddlebrown,salmon,sandybrown,seagreen,seashell,sienna," +
        "silver,skyblue,slateblue,slategray,slategrey,snow,springgreen,steelblue,tan,teal,thistle,transparent," +
        "tomato,turquoise,violet,wheat,white,whitesmoke,yellow,yellowgreen" ).split( ',' );
// pie对象 属性
// 1. 数据 data { title: '', list: [] }
// 2. 圆心
// 3. 半径
// 4. 起始角度
// 5. 各个扇形填充的颜色 colors
// 6. 图例
// 		宽 边距
// 7. titleHeight
// 8. font 字体 大小
// 9. context 绘图工具 ctx
function Pie( options ) {
	try {
		if ( !( options && options.data && options.r ) ){
			throw new Error( '参数异常' );
		}
	} catch( err ){
		console.log( err );
		return;
	}

	extend( this, Pie.pieSettings, options );
	var sum = 0;
	// 求总和
	this.data.list.forEach( function( v ) {
		sum += v.value;
	} );
	// 求每个数据 占用比例 和 角度
	this.data.list.forEach( function( v ) {
		// 给list遍历到的对象 添加percent 赋值为 占比
		v.percent = ( v.value / sum );
		// 给list遍历到的对象 添加angle 赋值为 占用角度 （弧度）
		v.angle = 2 * v.value * Math.PI / sum;
	} );
	this.draw();
}

// 饼图默认值
Pie.pieSettings = {
	data: null,
	x: undefined,
	y: undefined,
	r: undefined,
	start: -Math.PI / 2,
	colors: colors,
	legend: {
		width: 100,
		padding: 8
	},
	titleHeight: 40,
	font: '24px'
};

// Pie对象方法
Pie.prototype = {
	constructor: Pie,
	drawTitle: function() {
		var ctx = this.context,
				cw = ctx.canvas.width,
				ch = ctx.canvas.height;

		// 获取绘制文本的基点
		var x = ( cw - this.legend.width ) / 2,
				y = this.titleHeight / 2;
		ctx.font = 'bold ' + this.font + ' Consola';
		ctx.textAlign = 'center';
		ctx.textBaseline = 'middle';
		ctx.fillText( this.data.title, x, y );
	},
	drawPie: function() {
		var ctx = this.context,
				cw = ctx.canvas.width,
				ch = ctx.canvas.height;

		var x = ( cw - this.legend.width ) / 2,
				y = ch / 2 + this.titleHeight / 2;

		var self = this;
		var start = self.start,
				end;

		this.data.list.forEach( function( v, i ) {
			if ( i == self.data.list.length - 1 ){
				var cb = function() {
					self.drawTooltip();
				};
			}
			end = start + v.angle;
			animate( {
				context:ctx,
				x: x,
				y: y,
				r: self.r,
				start: start,
				end: end,
				color: colors[ i ],
				step: 2 * Math.PI / 180
			}, 'fast', cb );
/*			// 获取终止角度
			
			ctx.beginPath();
			ctx.moveTo(	x, y );
			ctx.arc( x, y, self.r, start, end );
			ctx.closePath();
			ctx.lineWidth = 1;
			ctx.strokeStyle = '#fff';
			ctx.fillStyle = colors[ i ];
			ctx.stroke();
			ctx.fill();*/

			// 下一次绘制扇形的起始角度 为当次的终止角度
			start = end;
		} );
		// 套个外圈
		ctx.beginPath();
		ctx.arc( x, y, this.r + 10, 0, 2 * Math.PI );
		ctx.lineWidth = 1;
		ctx.strokeStyle = '#ccc';
		ctx.stroke();
	},
	drawTooltip: function() {
		var ctx = this.context,
				cw = ctx.canvas.width,
				ch = ctx.canvas.height;

		var ctx = this.context,
				start = this.start,
				list = this.data.list;
		// 圆心点坐标
		var x0 = ( cw - this.legend.width ) / 2,
				y0 = ch / 2 + this.titleHeight / 2;

	  var x, y;

	  var self = this;

		list.forEach( function( v, i ) {
			var a = v.angle / 2 + start;
			x = x0 + Math.cos( a ) * ( self.r + 24 );
			y = y0 + Math.sin( a ) * ( self.r + 24 );
			ctx.beginPath();
			ctx.moveTo( x0, y0 );
			ctx.lineTo( x, y );
			ctx.strokeStyle = colors[ i ];
			ctx.lineWidth = 2;
			ctx.stroke();
			start += v.angle;

			var textAlign = 'left';
			ctx.beginPath();
			ctx.moveTo( x, y );
			if ( - Math.PI / 2 < a && a <= Math.PI / 2 ){
				x += 20;
			} else {
				x -= 20;
				textAlign = 'right';
			}
			ctx.lineTo( x, y );
			ctx.stroke();

			// 绘制文本
			ctx.textAlign = textAlign;
			ctx.font = '12px Consola';
			ctx.textBaseline = 'middle';
			var text = ' ' + v.name + ': ' + (v.percent * 100).toFixed( 2 ) + '% ';
			ctx.fillStyle = colors[ i ];
			ctx.fillText( text, x,y - 8 );
			text = ' value: ' + v.value + ' ';
			ctx.fillText( text, x, y + 6 );
		} );
	},
	drawLegend: function() {
		var ctx = this.context,
				cw = ctx.canvas.width,
				ch = ctx.canvas.height;
		var list = this.data.list,
				padding = this.legend.padding;
		var i = list.length - 1;

		var x = cw - padding - 40,
				y = ch - padding - 20;

		for ( ; i > -1; i--, y -= padding + 20 ){
			// 图例的矩形
			ctx.fillStyle = colors[ i ];
			ctx.fillRect( x, y, 40, 20 );
			// 图例的文字
			ctx.font = 'bold 14px Consola';
			ctx.textAlign = 'right';
			ctx.textBaseline = 'middle';
			ctx.fillText( list[ i ].name + ' ', x, y + 10 );
		}
	},
	draw: function() {
		this.drawTitle();
		this.drawPie();
		// this.drawTooltip();
		this.drawLegend();
	}
};

new Pie( {
	data: { title: '统计即时通讯工具的使用情况',
		list: [
			{ name: 'QQ', value: 400 },
			{ name: 'YY', value: 100 },
			{ name: 'Wechat', value: 500 },
			{ name: 'Momo', value: 300 },
			{ name: 'Tantan', value: 300 },			
			{ name: 'Feiqiu', value: 50 }
		]
	},
	r: 120,
	context: document.getElementById( 'canvas' ).getContext( '2d' )
} );