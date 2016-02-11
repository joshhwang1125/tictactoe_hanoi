function View($el, game) {
  this.$el = $el;
  this.game = game;

  this.setupBoard();
  this.bindEvents();
}

View.prototype.setupBoard = function () {
  for (var i = 0; i < 3; i++) {
    this.addRow();
  }
};

View.prototype.addRow = function () {
  var rowIdx = this.$el.find(".row").length;

  var $row = $("<ul>").addClass("row").addClass("group");
  for(var colIdx = 0; colIdx < 3; colIdx++) {
    var $square = $("<li>").addClass("square").data("pos", [rowIdx, colIdx]);
    $row.append($square);
  }
  this.$el.append($row);
};

// View.prototype.bindEvents = function () {
//   this.$el.on("click", ".square", function (e) {
//     var $square = $(e.currentTarget);
//     this.makeMove($square);
//   }.bind(this));
// };
//
// View.prototype.makeMove = function ($square) {
// };

View.prototype.bindEvents = function () {
  this.$el.on("click", ".square", this.makeMove.bind(this));
};

View.prototype.makeMove = function (e) {
  var $square = $(e.currentTarget);
  var pos = $square.data("pos");
  this.game.playMove(pos);
  if (this.game.currentPlayer === "x") {
    $square.css("background-color", "transparent");
    var imageUrlX = "../skeleton/css/images/x.jpg";
    $square.css("background-image", 'url(' + imageUrlX + ')');
  } else {
    $square.css("background-color", "transparent");
    var imageUrlO = "../skeleton/css/images/o.jpg";
    $square.css("background-image", 'url(' + imageUrlO + ')');
  }
  if (this.game.isOver()) {
    $square.css("background-color", "blue");
    this.addMessage();
  }

};

View.prototype.addMessage = function(){
  var $message = $("<p>").addClass("win");
  this.$el.append($message);
};


module.exports = View;
