const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    const productTagData = await Tag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', async (req, res) => {
  try {
    const productTagData = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!productTagData) {
      res.status(404).json({ message: 'No product tag found with that id!' });
      return;
    }
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find a single tag by its `id`
  // be sure to include its associated Product data
});

router.post('/', async (req, res) => {
  try {
    const productTagData = await Tag.create(req.body);
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(400).json(err);
  };
  // create a new tag
});

router.put('/:id', async (req, res) => {
  try {
    const productTagData = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!productTagData[0]) {
      res.status(404).json({ message: 'No product tag with this id!' });
      return;
    }
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // update a tag's name by its `id` value
});

router.delete('/:id', async (req, res) => {
  try {
    const productTagData = await Tag.destroy({
      where: {
        id: req.params.id,
      },
});
if (!productTagData) {
  res.status(404).json({ message: 'No product tag found with that id!' });
  return;
}

res.status(200).json(productTagData);
} catch (err) {
res.status(500).json(err);
}
  // delete on tag by its `id` value
});

module.exports = router;
