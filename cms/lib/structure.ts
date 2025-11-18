import * as SanityStructure from 'sanity/structure';

import Icons from './icons';

const structure: SanityStructure.StructureResolver = (S) => {
  return S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Settings')
        .icon(Icons.Settings)
        .child(S.document().schemaType('settings').documentId('settings')),

      S.listItem().title('Posts').icon(Icons.Post).child(S.documentTypeList('post')),

      S.listItem().title('Tags').icon(Icons.Tag).child(S.documentTypeList('tag')),

      S.listItem().title('Authors').icon(Icons.Author).child(S.documentTypeList('author')),

      S.listItem()
        .title('Announcements')
        .icon(Icons.Announcement)
        .child(S.documentTypeList('announcement')),
    ]);
};

export default structure;
