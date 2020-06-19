"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.onCreateTask = void 0;

var _renderer = require("./renderer.js");

var _storage = require("./storage.js");

var _tasksGateway = require("./tasksGateway.js");

const onCreateTask = () => {
  const taskTitleInputElem = document.querySelector(".task-input");
  const text = taskTitleInputElem.value;

  if (!text) {
    return;
  }

  taskTitleInputElem.value = "";
  const newTask = {
    text,
    done: false,
    createDate: new Date().toISOString(),
    doneDate: null
  };
  (0, _tasksGateway.createTask)(newTask).then(() => (0, _tasksGateway.getTasksList)()).then(newTasksList => {
    (0, _storage.setItem)("tasksList", newTasksList);
    (0, _renderer.renderTasks)();
  });
}; //1. Prepare data
//2. Load data to database
//3. Read new data from database
//4. Save new data to front-end storage
//5. Update user interface (UI) based on new data


exports.onCreateTask = onCreateTask;