// coffeeProduct.js

export default {
  name: 'coffeeProduct',
  title: 'Coffee Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'Name of Product',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'oldPrice',
      title: 'Old Price',
      type: 'number',
    },
    {
      name: 'newPrice',
      title: 'New Price',
      type: 'number',
    },
    {
      name: 'inStock',
      title: 'In Stock',
      type: 'boolean',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 200,
      },
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{type: 'category'}],
    },
    {
      name: 'rating',
      title: 'Rating',
      type: 'object',
      fields: [
        {
          name: 'rate',
          title: 'Rate',
          type: 'number',
        },

        {
          name: 'count',
          title: 'Count',
          type: 'number',
        },
      ],
    },
    {
      title: 'description',
      name: 'description',
      type: 'text',
      description: 'Make it catchy',
      validation: (Rule: any) =>
        Rule.max(120).warning(`A title shouldn't be more than 120 characters.`),
    },
  ],
}
