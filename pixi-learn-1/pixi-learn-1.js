import * as util from '../lib/util'

const { PIXI_CONFIG_TYPE, pixi } = util.default

if (!pixi) {
  throw Error('you should import pixiJs in your project')
}
pixi.utils.sayHello(PIXI_CONFIG_TYPE)

/*********************** Basics ***********************/

// create app
const app = new pixi.Application(800, 600, { backgroudColor: 0x1099bb });
document.body.appendChild(app.view);

const bunny = pixi.Sprite.fromImage('../static/11.jpg')

bunny.anchor.set(0.5)

// set the sprite position in app
bunny.x = app.renderer.width / 2
bunny.y = app.renderer.height / 2

app.stage.addChild(bunny)

app.ticker.add((delta) => {
  bunny.rotation += 0.1 * delta
})

/*********************** Basics ***********************/