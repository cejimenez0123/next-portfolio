import { SchemaTypeDefinition } from 'sanity'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [{
  title: 'Article',
  name: 'article',
  type: 'document',
  fields: [
    {
      title: 'Title',
      name: 'title',
      type: 'string'
    },
    {
      title: 'Image',
      name: 'image',
      type: 'image'
    },
    {
      title: 'Content',
      name: 'content',
      type: 'string',
      
    }
  ]
}],
}
