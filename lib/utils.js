'use strict';

const ms = require('humanize-ms');

exports.convertMs = (obj, fields) => {
  fields.forEach(key => {
    obj[key] = ms(obj[key]);
  });
};

exports.delegateEvents = (host, target, events) => {
  events.forEach(evt => {
    host.on(evt, (...args) => {
      target.emit(evt, ...args);
    });
  });
};