const { Schema, type } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

// Schema to create Post model
const reactSchema = new Schema(
  {
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId()
      },
      reactionBody: {
        type: String,
        required: true,
        maxlength: 280
      },
      username: {
        type: String,
        required: true
      },
      createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
      }
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);


module.exports = reactSchema;
