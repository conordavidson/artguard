import * as Sanity from 'sanity';

import Icons from '../lib/icons';

const Announcement = Sanity.defineType({
  name: 'announcement',
  title: 'Announcement',
  type: 'document',
  icon: Icons.Announcement,
  preview: {
    select: {
      title: 'content',
    },
  },
  fields: [
    {
      name: 'content',
      title: 'Content',
      type: 'richtextSimple',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published At',
      type: 'date',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'cta',
      title: 'CTA',
      type: 'object',
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: 'label',
          title: 'Label',
          type: 'string',
          validation: (Rule) => Rule.required(),
        },
        {
          name: 'href',
          title: 'Href',
          type: 'url',
          validation: (Rule) =>
            Rule.required().uri({
              allowRelative: true,
              scheme: ['http', 'https', 'mailto', 'tel'],
            }),
        },
      ],
    },
  ],
});

export default Announcement;
