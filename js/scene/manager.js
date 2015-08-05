var SceneTable = require('./scenetable.js'),
    Drawer = require('../draw/drawer.js');



  function SceneManager() {"use strict";
    this.drawer = new Drawer();
  }

  Object.defineProperty(SceneManager.prototype,"setScene",{writable:true,configurable:true,value:function(scene_name, params) {"use strict";
    this.scene =  new SceneManager.sceneTable[scene_name](params);
  }});


SceneManager.sceneTable = SceneTable;


module.exports = SceneManager;