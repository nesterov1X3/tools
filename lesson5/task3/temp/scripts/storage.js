"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getItem = exports.setItem = void 0;

const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

exports.setItem = setItem;

const getItem = key => JSON.parse(localStorage.getItem(key));

exports.getItem = getItem;