"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onToggleTask = void 0;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

const onToggleTask = e => {
  const isCheckbox = e.target.classList.contains("list-item__checkbox");
  if (!isCheckbox) return;
  const done = e.target.checked;
  const tasksList = (0, _storage.getItem)("tasksList");
  const taskId = e.target.dataset.id;
  const {
    text,
    createDate
  } = tasksList.find(task => task.id === taskId);
  const updatedTask = {
    text,
    createDate,
    done,
    doneDate: done ? new Date().toISOString() : null
  };
  (0, _tasksGateway.updateTask)(taskId, updatedTask).then(() => (0, _tasksGateway.getTasksList)()).then(newTasksList => {
    (0, _storage.setItem)("tasksList", newTasksList);
    (0, _renderer.renderTasks)();
  });
}; //1. Prepare data
//2. Update data in database
//3. Read new data from database
//4. Save new data to front-end storage
//5. Update user interface (UI) based on new data


exports.onToggleTask = onToggleTask;