export default {
    name: 'member',
    title: 'Team Member',
    type: 'document',
    fields: [
      {
        name: 'name',
        title: 'Full Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'firstName',
        title: 'First Name',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'slug',
        title: 'Slug',
        type: 'string',
        validation: Rule => Rule.required()
      },
      {
        name: 'email',
        title: 'Email',
        type: 'string',
        validation: Rule => Rule.required().email()
      },
      {
        name: 'bio',
        title: 'Biography',
        type: 'text'
      },
      {
        name: 'interests',
        title: 'Interests',
        type: 'array',
        of: [{ type: 'string' }]
      },
      {
        name: 'image',
        title: 'Profile Image',
        type: 'image',
        options: {
          hotspot: true
        }
      }
    ]
  }