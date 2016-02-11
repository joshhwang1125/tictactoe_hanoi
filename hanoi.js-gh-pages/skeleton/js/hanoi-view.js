function HanoiView(game, $el) {
  this.game = game;
  this.$el = $el;

  this.setupTowers();
  this.render();
}

HanoiView.prototype.setupTowers = function () {

  for (var i = 0; i < 3; i++) {
    var $tower = $("<ul>").addClass("tower").addClass("group");

    // if (i === 0){
    //   for (var j = 1; j < 4; j++) {
    //     var $disc = $("<li>").addClass("disk-" + j);
    //
    //     $tower.append($disc);
    //   }
    // }
    this.$el.append($tower);
  }

};
// this.towers = [[3, 2], [1], []];
HanoiView.prototype.render = function () {
  var towers = this.game.towers;
  //clear towers
  for (var i = 0; i < towers.length; i++) {

    for (var j = towers[i].length - 1 ; j >= 0; j--) {
      var $disk = $("<li>").addClass("disk-" + towers[i][j]);

      this.$el.find(".tower").eq(i).append($disk);
    }
  }
};


module.exports = HanoiView;
