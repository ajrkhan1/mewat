import { type SchemaTypeDefinition } from 'sanity'
import { postType } from './postType'
import { categoryType } from './category'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [postType, categoryType],
}
