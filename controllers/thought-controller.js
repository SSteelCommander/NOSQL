const { Thought, User } = require("../models");

const thoughtController = {
  // Get thoughts
  getThought(req, res) {
    Thought.find()
      .sort({ createdAt: -1 })
      .then((metaThought) => {
        res.json(metaThought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // Get 1 thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.ThoughtId })
      .select("-__v")
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: "No Thought with that ID" })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create
  createThoughts(req, res) {
    Thought.create(req.body)
      .then((Thought) => res.json(Thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete
  deleteThoughts(req, res) {
    Thought.findOneAndDelete({ _id: req.params.ThoughtId })
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: "No Thought with that ID" })
          : Student.deleteMany({ _id: { $in: Thought.students } })
      )
      .then(() => res.json({ message: "Thought and students deleted!" }))
      .catch((err) => res.status(500).json(err));
  },
  // Update
  updateThoughts(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.ThoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((Thought) =>
        !Thought
          ? res.status(404).json({ message: "No Thought with this id!" })
          : res.json(Thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  removeReactions(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $pull: { reactions: { reactionId: req.params.reactionId } } },
      { runValidators: true, new: true }
    )
      .then((metaThought) => {
        if (!metaThought) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json(metaThought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
  // add a reaction to a thought
  addReactions(req, res) {
    Thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $addToSet: { reactions: req.body } },
      { runValidators: true, new: true }
    )
      .then((metaThought) => {
        if (!metaThought) {
          return res.status(404).json({ message: "No thought with this id!" });
        }
        res.json(metaThought);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },
};

module.exports = thoughtController;
