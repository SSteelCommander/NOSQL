const { Schema, model } = require('mongoose');
const reactSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    string: {
        type: String,
        required: 'Leave a thought',
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    buildSuccess: {
      type: Boolean,
      default: true,
    },
    description: {
      type: String,
      minLength: 15,
      maxLength: 500,
    },
    reactions: [reactSchema]
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getTags` that gets the amount of tags associated with an application
thoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
  });

// Initialize our Application model
const Thought = model('Thought', thoughtSchema);

module.exports = Thought;
