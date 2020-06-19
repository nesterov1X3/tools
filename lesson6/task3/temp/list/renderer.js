"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.symbol.description");

require("core-js/modules/es.symbol.iterator");

require("core-js/modules/es.array.from");

require("core-js/modules/es.array.iterator");

require("core-js/modules/es.array.map");

require("core-js/modules/es.array.slice");

require("core-js/modules/es.function.name");

require("core-js/modules/es.object.to-string");

require("core-js/modules/es.regexp.to-string");

require("core-js/modules/es.string.iterator");

require("core-js/modules/web.dom-collections.iterator");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.renderTasks = void 0;

var _storage = require("./storage.js");

require("./list.scss");

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var listElem = document.querySelector(".list");

var compareTasks = function compareTasks(a, b) {
  if (a.done - b.done !== 0) {
    return a.done - b.done;
  }

  if (a.done) {
    return new Date(b.doneDate) - new Date(a.doneDate);
  }

  return new Date(b.createDate) - new Date(a.createDate);
};

var createCheckbox = function createCheckbox(_ref) {
  var done = _ref.done,
      id = _ref.id;
  var checkboxElem = document.createElement("input");
  checkboxElem.setAttribute("type", "checkbox");
  checkboxElem.setAttribute("data-id", id);
  checkboxElem.checked = done;
  checkboxElem.classList.add("list-item__checkbox");
  return checkboxElem;
};

var createListItem = function createListItem(_ref2) {
  var text = _ref2.text,
      done = _ref2.done,
      id = _ref2.id;
  var listItemElem = document.createElement("li");
  listItemElem.classList.add("list-item", "list__item");
  var checkboxElem = createCheckbox({
    done: done,
    id: id
  });

  if (done) {
    listItemElem.classList.add("list-item_done");
  }

  var textElem = document.createElement("span");
  textElem.classList.add("list-item__text");
  textElem.textContent = text;
  var deleteBtnElem = document.createElement("button");
  deleteBtnElem.classList.add("list-item__delete-btn");
  listItemElem.append(checkboxElem, textElem, deleteBtnElem);
  return listItemElem;
};

var renderTasks = function renderTasks() {
  var tasksList = (0, _storage.getItem)("tasksList") || [];
  listElem.innerHTML = "";
  var tasksElems = tasksList.sort(compareTasks).map(createListItem);
  listElem.append.apply(listElem, _toConsumableArray(tasksElems));
};

exports.renderTasks = renderTasks;