// 兔女郎 属性
// 1. imgSrc
// 2. x， y
// 3. width
// 4. height
// 5. step
// 6. direction
// 7. frame
// 8. isWalking
// 9. timer
function Baby( options ) {
	// 1: 过滤参数
	try {
		if ( ! ( options && options.imgSrc && options.width 
							&& options.height && options.context ) ) {
			throw new Error( '参数异常' );
		}
	} catch( err ){
		console.log( err );
		return;
	}
	this.imgSrc = options.imgSrc; 					// 图像的src值
	this.img = new Image();                 // 图像对象
	this.x = options.x || 0;                // 小人渲染的左上角x坐标值
	this.y = options.y || 0;                // 小人渲染的左上角y坐标值
  this.width = options.width;             // 在抠图 和 渲染时的宽度
  this.height = options.height;           // 在抠图 和 渲染时的高度
  this.frame = options.frame || 0;        // 动画帧
  this.direction = options.direction || 0;// 方向
  this.step = options.step || 2;          // 步伐
  this.context = options.context;         // 绘图工具
  this.isWalking = false;                 // 小人是否正在散步
  this.timer = undefined;                 //  定时id

  this.render();
}

Baby.prototype = {
	constructor: Baby,
	clear: function() {
		var ctx = this.context;
		// ctx.clearRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
		// 实现拖影效果
		ctx.fillStyle = 'rgba(255, 255, 255, .3)';
		ctx.fillRect( 0, 0, ctx.canvas.width, ctx.canvas.height );
	},
	draw: function() {
		var ctx = this.context,
				w = this.width,
				h = this.height,
				f = this.frame,
				d = this.direction;
		// 1: 清除画布
		this.clear();
		ctx.drawImage( this.img, 
				f * w, d * h, w, h,
				this.x, this.y, w, h
				 );
	},
	update: function() {
		// 改变帧
		this.frame = ++this.frame % 4;
		// 改变小人的位置
		var w = this.context.canvas.width,
				h = this.context.canvas.height;

		switch( this.direction ){
			case 0: // down
				this.y += this.step;
				if ( this.y > h ){
					this.y = -this.height - 10;
				}
				break;
			case 1: // left
				this.x -= this.step;
				if ( this.x < -this.width ){
					this.x = w + 10;
				}
				break;
			case 2: // right
				this.x += this.step;
				if ( this.x > w ){
					this.x = -this.width - 10;
				}
				break;
			case 3: // up
				this.y -= this.step;
				if ( this.y < -this.height ){
					this.y = h + 10;
				}
				break;
		}
	},
	start: function() {
		var self = this;
		// 保证没有动画，在开始
		if ( !this.isWalking ){
			this.isWalking = true;
			this.timer = window.setInterval( function() {
				self.update();
				self.draw();
			}, 160 );
		}
	},
	stop: function() {
		if ( this.isWalking ){
			this.isWalking = false;
			window.clearInterval( this.timer );
			this.timer = undefined;
		}
	},
	bind: function() {
		var self = this;
		// 给document绑定事件 keydown
		document.addEventListener( 'keydown', function( e ) {
			var keyCode = e.keyCode;
			console.log( keyCode );
			// 如果按下空格键
			if ( keyCode == 32 ){
				if ( self.isWalking ){
					self.stop();
				} else {
					self.start();
				}
			}
			//? 如果动画停止了，下面代码不应该执行。
			if ( !self.isWalking ) {
				return;
			}
			
			// 方向键
			switch( keyCode ){
				case 38: // up
				case 87:
					self.direction = 3;
					break;
				case 39: // right
				case 68:
					self.direction = 2;
					break;
				case 40: // down
				case 83:
					self.direction = 0;
					break;
				case 37: // left
				case 65:
					self.direction = 1;
					break;
			}
		} );
	},
	render: function() {
		var self = this;
		this.img.src = this.imgSrc;
		this.img.onload = function() {
			self.draw();
			self.bind();
		};
	}
};

new Baby( {
	imgSrc: 'imgs/NPCrabbitbaby.png',
	width: 40,
	height: 65,
	context: document.getElementById( 'canvas' ).getContext( '2d' )
} ); 