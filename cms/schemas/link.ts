import * as Sanity from 'sanity';

import Icons from '../lib/icons';

const Link = Sanity.defineType({
  name: 'link',
  title: 'Link',
  type: 'object',
  icon: Icons.Link,
  preview: {
    select: {
      label: 'label',
      href: 'href',
    },
  },
  fields: [
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
    {
      name: 'openInNewTab',
      title: 'Open in New Tab',
      type: 'boolean',
      description:
        'Open the link in a new tab. By default, external links will open in a new tab and internal links will open in the same tab. This setting will override the default behavior.',
    },
  ],
});

export default Link;
