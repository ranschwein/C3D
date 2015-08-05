var SceneTable = require('./scenetable.js');



  function SceneManager() {"use strict";
    this.sceneTable = SceneTable;
  }

  Object.defineProperty(SceneManager,"setScene",{writable:true,configurable:true,value:function(scene_name, params) {"use strict";
    return new this.scenetable[scene_name](params);
  }});



module.exports = SceneManager;