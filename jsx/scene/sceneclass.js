class SceneClass {
  constructor(params) {
    this.drawer = params.drawer;
  }

  update(time) {
    alert("Override update METHOD!");
  }
}


module.exports = SceneClass;