var SceneTable = require('./scenetable.js');


class SceneManager {
  constructor() {
    this.sceneTable = SceneTable;
  }

  static setScene(scene_name, params) {
    return new this.scenetable[scene_name](params);
  }
}


module.exports = SceneManager;