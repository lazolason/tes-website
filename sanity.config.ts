import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './schemas'

export default defineConfig({
  name: 'default',
  title: 'Mexel Energy Sustain',

  projectId: 'y5scr6e4',
  dataset: 'production',

  plugins: [deskTool()],

  schema: {
    types: schemas,
  },
})
