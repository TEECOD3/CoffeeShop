export default {
  name: 'mayAlsoLike',
  title: 'MayAlsoLike',
  type: 'document',
  fields: [
    {
      name: 'topCategories',
      title: 'TopCategories',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [
            {
              type: 'category',
            },
          ],
        },
      ],
    },
  ],
}
