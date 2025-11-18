import * as Sanity from 'sanity';
import * as SanityStructure from 'sanity/structure';
import * as SanityVision from '@sanity/vision';

import Schemas from './schemas';
import Structure from './lib/structure';

export default Sanity.defineConfig({
  name: 'default',
  title: 'artguard.net',
  projectId: 'la9s93b5',
  dataset: 'production',
  plugins: [
    SanityStructure.structureTool({
      structure: Structure,
    }),
    SanityVision.visionTool(),
  ],
  schema: {
    types: Schemas,
  },
});
