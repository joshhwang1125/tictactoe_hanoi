/* globals $ */

var View = require('./ttt-view');
var Game = require('../../ttt-core-solution/game');

$(function () {
  var $board = $("#board");
  var game = new Game();
  new View($board, game);
});
