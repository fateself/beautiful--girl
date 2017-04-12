( function( g ) {
	// 动画队列 [] push 和 shift
	var queue = [],
			callbacks = [], // 存储所有回调函数
			timer = undefined; // 存储定时id，同时用来判断是否已经有扇形动画在执行
	// options 属性 context, x, y, r, start, end, color, step 
	// speed 可以是 数字（单位 ms）也可是 'slow' 'fast'
	var animate = function( options, speed, callback ) {
		var x = options.x,							 	// 圆心x坐标
				y = options.y, 								// 圆心y坐标
				r = options.r, 								// 扇形半径
				start = options.start,        // 扇形起始角度
				end = options.end,            // 扇形终止角度
				color = options.color || '#000', // 扇形描边和填充颜色
				step = options.step || 1 * Math.PI / 180; // 动画步伐  弧度
				clockwise = step > 0,          // 根据step正负 区分顺时针或逆时针绘制扇形
				ctx = options.context;         // 绘图工具
		// 0：扩展回调函数
		// 如果callback类型 是函数，就添加到 callbacks数组中
		( typeof callback == 'function' ) && callbacks.push( callback );
		// 1 如果timer转换成bool值为true，表示有动画正执行
		if ( timer ){
			// 1.1 此时，将动画执行时所需参数，push到队列中。
			queue.push( { options: options, speed: speed } );
			return;
		}
		// 2 如果speed没有传值 赋初值
		speed = speed || 160;
		// 3 将字符串速度表示方式 -> 毫秒值
		switch( speed ){
			case 'slow':
				speed = 200;
				break;
			case 'fast':
				speed = 16;
				break;
		}
    // 4 处理start 与 end 值
    if ( clockwise ){
    	// 4.1 保证start 小于 end
    	if ( start > end ){
    		end += 2 * Math.PI;
    	}
    } else {
    	// 4.1 保证start 大于 end
    	if ( start < end ){
    		end -= 2 * Math.PI;
    	}
    }

    // 5 创建定时器，开启动画
    timer = g.setInterval( function() {
    	// 5.1 判断动画是否完成
    	if ( clockwise ){
    		if ( start > end ){
    			// 5.1.1 清除定时器
    			next();
    			return;
    		}
    	} else {
    		if ( start < end ){
    			// 5.1.2 清除定时器
    			next();
    			return;
    		}
    	}

    	// 5.2 绘制扇形
    	ctx.beginPath();
    	ctx.moveTo( x, y );
    	ctx.arc( x, y, r, start, start + step, !clockwise );
    	ctx.closePath();
    	ctx.strokeStyle = color;
    	ctx.fillStyle = color;
    	ctx.stroke();
    	ctx.fill();

    	start += step;

    } , speed );
	};
	// 获取下一个动画的属性，并执行
	var next = function() {
		var context;
		// 1. 强制停止上一个动画
		g.clearInterval( timer );
		timer = undefined;
		// 获取动画属性，如果值不为undefined。表示有下一个动画
		if ( context = queue.shift() ) {
			animate( context.options, context.speed );
		} else {
			// 如果本次循环动画结束，就执行callbacks内所有的回调函数
			callbacks.forEach( function( fn ) {
				fn();
			} );
		}
	};
	// 将animate函数暴露在全局
	g.animate = animate;
} )( window );