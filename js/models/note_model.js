
"use strict";


//APP.NoteModel = Backbone.Model.extend({
APP.NoteModel = Parse.Object.extend({
  className: "Note",
  
  // you can set any defaults you would like here
  defaults: {
    title: "",
    description: "",
    author: ""
  },

  validate: function (attrs) {
    var errors = {};
    if (!attrs.title) errors.title = "Hey! Give this thing a title.";
    if (!attrs.description) errors.description = "You gotta write a description, duh!";
    if (!attrs.author) errors.author = "Put your name in dumb dumb...";

    if (!_.isEmpty(errors)) {
      return errors;
    }
  }
});

APP.NoteCollection = Parse.Collection.extend({
  // Reference to this collection's model.
  model: APP.NoteModel
});
