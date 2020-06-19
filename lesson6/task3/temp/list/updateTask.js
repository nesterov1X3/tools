"use strict";

require("core-js/modules/es.array.find");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onToggleTask = void 0;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

var onToggleTask = function onToggleTask(e) {
  var isCheckbox = e.target.classList.contains("list-item__checkbox");
  if (!isCheckbox) return;
  var done = e.target.checked;
  var tasksList = (0, _storage.getItem)("tasksList");
  var taskId = e.target.dataset.id;

  var _tasksList$find = tasksList.find(function (task) {
    return task.id === taskId;
  }),
      text = _tasksList$find.text,
      createDate = _tasksList$find.createDate;

  var updatedTask = {
    text: text,
    createDate: createDate,
    done: done,
    doneDate: done ? new Date().toISOString() : null
  };
  (0, _tasksGateway.updateTask)(taskId, updatedTask).then(function () {
    return (0, _tasksGateway.getTasksList)();
  }).then(function (newTasksList) {
    (0, _storage.setItem)("tasksList", newTasksList);
    (0, _renderer.renderTasks)();
  });
}; //1. Prepare data
//2. Update data in database
//3. Read new data from database
//4. Save new data to front-end storage
//5. Update user interface (UI) based on new data


exports.onToggleTask = onToggleTask;