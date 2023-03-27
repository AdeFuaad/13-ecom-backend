const { Tag } = require('../models');

const tagData = [
  {
    tag_name: 'New',
  },
  {
    tag_name: 'Hot',
  },
  {
    tag_name: 'Sale',
  },
];

const seedTags = () => Tag.bulkCreate(tagData);

module.exports = seedTags;
