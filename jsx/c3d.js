var SceneManager = require('./scene/manager.js'),
    Detector = require('./api/detector.js');


class C3D extends SceneManager {
  constructor() {
    if(!twgl) {
      console.log("twgl の読み込みを確認してください");
    }
    if(!Detector.canCanvas() || !Detector.canWebGL()) {
      alert("最新のブラウザ、または、グラフィックボードのあるPC、スマートフォンを使ってください");
    }

    super();
    super.setScene("title", {drawer: this.drawer});
  }

  update(time) {
    this.scene.update(time);
  }
}


module.exports = C3D;