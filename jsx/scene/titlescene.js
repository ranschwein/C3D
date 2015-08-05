var SceneClass = require('./sceneclass.js');


class TitleScene extends SceneClass {
  constructor(params) {
    super(params);

    this.arrays = {
      position: [
        -1, -1,  0,
         1, -1,  0,
        -1,  1,  0,
        -1,  1,  0,
         1, -1,  0,
         1,  1,  0
      ],
    };

    this.bufferInfo = this.drawer.createBufferInfo(this.arrays);
  }

  update(time) {
    var uniforms = {
      time: time * 0.001,
      resolution: [this.drawer.getCanvasWidth(), this.drawer.getCanvasHeight()],
    };
    this.drawer.update(this.bufferInfo, uniforms);
  }
}


module.exports = TitleScene;