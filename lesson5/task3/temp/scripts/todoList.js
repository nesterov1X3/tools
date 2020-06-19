"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.initTodoListHandlers = void 0;

var _createTask = require("./createTask.js");

var _updateTask = require("./updateTask.js");

var _deleteTask = require("./deleteTask.js");

const initTodoListHandlers = () => {
  const createBtnElem = document.querySelector(".create-task-btn");
  createBtnElem.addEventListener("click", _createTask.onCreateTask);
  const todoListElem = document.querySelector(".list");
  todoListElem.addEventListener("click", _updateTask.onToggleTask);
  todoListElem.addEventListener("click", _deleteTask.onDeleteTask);
};

exports.initTodoListHandlers = initTodoListHandlers;