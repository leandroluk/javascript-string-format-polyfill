(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global = global || self, global.Mustache = factory());
}(this, (function () {
  'use strict';

  String.prototype.format = function (template, view, partials, config) {
    if (!view) view = { value: this }
    else if (typeof view === 'object' && !view.value) view.value = this
    return require('mustache').render(template, view, partials, config)
  }
})))
