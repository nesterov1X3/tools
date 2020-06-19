"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onDeleteTask = void 0;

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

var _renderer = require("./renderer.js");

const onDeleteTask = e => {
  const isDeleteBtn = e.target.classList.contains("list-item__delete-btn");
  if (!isDeleteBtn) return;
  const taskId = e.target.closest(".list-item").querySelector(".list-item__checkbox").dataset.id;
  (0, _tasksGateway.deleteTask)(taskId).then(() => (0, _tasksGateway.getTasksList)()).then(newTasksList => {
    (0, _storage.setItem)("tasksList", newTasksList);
    (0, _renderer.renderTasks)();
  });
};

exports.onDeleteTask = onDeleteTask;