var SceneTable = require('./scenetable.js'),
    Drawer = require('../draw/drawer.js');


class SceneManager {
  constructor() {
    this.drawer = new Drawer();
  }

  setScene(scene_name, params) {
    this.scene =  new SceneManager.sceneTable[scene_name](params);
  }
}

SceneManager.sceneTable = SceneTable;


module.exports = SceneManager;