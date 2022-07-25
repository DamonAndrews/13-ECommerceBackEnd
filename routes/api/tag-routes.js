const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  try {
    const productTagData = await ProductTag.findAll({
      include: [{ model: Product }],
    });
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(500).json(err);
  }
  // find all tags
  // be sure to include its associated Product data
});

router.get('/:id', (req, res) => {
  try {
    const productTagData = await ProductTag.findByPk(req.params.id, {
      include: [{ model: Category }],
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

router.post('/', (req, res) => {
  try {
    const productTagData = await ProductTag.create({
      category_id: req.body.category_id,//fix this
    });
    res.status(200).json(productTagData);
  } catch (err) {
    res.status(400).json(err);
  };
  // create a new tag
});

router.put('/:id', (req, res) => {
  try {
    const productTagData = await ProductTag.update(req.body, {
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

router.delete('/:id', (req, res) => {
  try {
    const productTagData = await ProductTag.destroy({
      where: {
        category_id: req.params.category_id,
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
