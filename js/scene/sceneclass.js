
  function SceneClass(params) {"use strict";
    this.drawer = params.drawer;
  }

  Object.defineProperty(SceneClass.prototype,"update",{writable:true,configurable:true,value:function(time) {"use strict";
    alert("Override update METHOD!");
  }});



module.exports = SceneClass;