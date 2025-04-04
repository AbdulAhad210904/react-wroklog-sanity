export default {
    name: 'log',
    title: 'Work Log',
    type: 'document',
    fields: [
      {
        name: 'description',
        title: 'Description',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'hours',
        title: 'Hours',
        type: 'number',
        validation: Rule => Rule.required().min(0)
      },
      {
        name: 'member',
        title: 'Team Member',
        type: 'reference',
        to: [{ type: 'member' }],
        validation: Rule => Rule.required()
      }
    ]
  }