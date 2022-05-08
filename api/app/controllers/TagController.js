const Tag = require("../models/TagModel");
const slugify = require("slugify");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { json } = require("body-parser");

exports.Create = (req, res) => {
  const name = req.body;
  const slug = slugify(name).toLowerCase();
  const tag = new Tag({ name, slug });

  tag.save((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler });
    }
    res.json(data);
  });
};

exports.List = (req, res) => {
  Tag.find({}).exec((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    res.json(data);
  });
};

exports.Read = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Tag.findOne({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({ error: errorHandler(err) });
    }
    res.json(data);
  });
};

exports.Delete = (req, res) => {
  const slug = req.params.slug.toLowerCase();

  Tag.findOneAndRemove({ slug }).exec((err, data) => {
    if (err) {
      return res.status(400).json({ err: errorHandler(err) });
    }
    res.json(data);
  });
};
