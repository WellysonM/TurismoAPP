const list = (req, res) => {
  res.send({ ok: true, user: req.userId });
};

const mongoose = require('mongoose');

const Tourism = mongoose.model('Tourism');

module.exports = {
  list,
  async index(req, res) {
    const { page = 1 } = req.query;
    const tourisms = await Tourism.paginate({}, { page, limit: 10 });

    return res.json(tourisms);
  },

  async show(req, res) {
    const tourism = await Tourism.findById(req.params.id);

    return res.json(tourism);
  },

  async store(req, res) {
    const tourism = await Tourism.create(req.body);
    
    return res.json(tourism);
  },

  async update(req, res) {
    const tourism = await Tourism.findByIdAndUpdate(req.params.id, req.body, { new: true });

    return res.json(tourism);
  },

  async destroy(req, res) {
    await Tourism.findByIdAndRemove(req.params.id);

    return res.send();
  }
};
