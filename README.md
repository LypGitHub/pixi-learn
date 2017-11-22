### 学习pixiJs

PIXI的调用方式，看起来比较冗余不太美观，一般用别名处理

#### — Application 或者 Renderer， 两者属性一样  `(autoDetectRenderer可根据根据客户端的支持度自动创建WebGL或者Canvas, CanvasRenderer, WebGLRenderer分别创建Canvas和WebGL)`

```json
  创建渲染层, 可接受的参数有四个，前两个是为图层的宽高，第三个为可选参数,第四个为是否强制canvas渲染

  ### example
	var renderer = PIXI.autoDetectRenderer(400, 400, {
      backgroundColor: 0x000000,
      transparent: false,
      antialias: false,
      resolution: 1,
      clearBeforeRender: true,
      preserveDrawingBuffer: false
	}, false)

	// Add the canvas to the HTML document
	// renderer.view has DOMElement's some property
	// like style
	// renderer.view.style.border = "1px solid black";
	document.body.appendChild(renderer.view)

	// if need resize renderer
	// set autoResize equel true
	renderer.autoResize = true
	renderer.resize(500, 500)
```


### — Container （创建舞台在画布上，作为一个根容器）

```json
一般来说直接在渲染层上面渲染也是可以的，但是我不。。
创建容器(舞台)在渲染层是为了分层管理动画或者元素
### example
	var container = new PIXI.Container()
	renderer.render(container)

```



### — Sprite (精灵元素) 

```json
- PIXI.Sprite.fromImage()  由图片直接创建精灵
- PIXI.Texture.fromImage() 由材质创建精灵
- PIXI.loader.add().load()  先加载图片，在load里面获取所加载的图片资源

### example
	PIXI.loader.add('demo.jpg')
		.on('progress', loadProgressHandler)
		.load(setup)
	function setup () {
      // all resources loaded
      var demo = new PIXI.Sprite(PIXI.loader.resources['demo.jpg'].texture)
      
      // Optionally change the position, width, height, point or rotate
      demo.x = 100
      demo.y = 100
      demo.width = 100
      demo.height = 100
      demo.anchor.x = 0.5
      demo.anchor.y = 0.5
      demo.rotation = 0.3
      
      // also through function
      demo.anchor.set(0.5)
      demo.position.set(100, 100)
      demo.scale.set(1.5, 3)
      
      stage.appendChild(demo)
      renderer.render(stage)
	}
	/**
     * 加载过程
     *
     * @param {Object} loader 加载对象
     * @param {Object} resource 资源
     * @returns {void}
     */
	function loadProgressHandler (loader, resource) {
      // loader.progress, resource.name, resource.url
      // do something here
	}

	// clean
	var TextureCache = PIXI.utils.TextureCache
	Object.keys(TextureCache).forEach(function(texture) {
      TextureCache[texture].destroy(true);
    });
```



### — keyBoardMoveEvent 