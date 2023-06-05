export const MayalsoLike = {
  name: 'mayAlsoLike',
  title: 'MayAlsoLike',
  type: 'document',
  fields: [
    {
      name: 'topCategories',
      title: 'Top Categories',
      type: 'array',
      of: [
        {
          type: 'references',
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
