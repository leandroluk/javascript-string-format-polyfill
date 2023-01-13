(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
    ? module.exports = factory()
    : typeof define === 'function' && define.amd
      ? define(factory)
      : (global = global || self, global.Mustache = factory());
}(this, (function () {
  'use strict';

  const isObj = object => typeof object === 'object'

  String.prototype.format = function () {
    let template = arguments[0]
    let view = { value: this }
    let partials
    let config

    if (arguments.length === 2) {
      let props = arguments[1]

      if (!isObj(props)) throw new TypeError('props must be a object')
      else if (!isObj(props.view)) throw new TypeError('props.view must be a object')

      view = { ...view, ...props.view }
      partials = props.partials
      config = props.config
    } else if (arguments.length > 2) {
      if (!isObj(arguments[1])) throw new TypeError('view must be a object')
      view = { ...view, ...arguments[1] }
      partials = arguments[2]
      config = arguments[3]
    }

    return require('mustache').render(template, view, partials, config)
  }
})))
