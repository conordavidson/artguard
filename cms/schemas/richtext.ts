import * as Sanity from 'sanity';

export const Base = Sanity.defineType({
  name: 'richtext',
  title: 'Rich Text',
  type: 'array',
  of: [
    {
      type: 'block',
      styles: [
        { title: 'Normal', value: 'normal' },
        { title: 'H2', value: 'h2' },
        { title: 'H3', value: 'h3' },
        { title: 'H4', value: 'h4' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
        ],
        annotations: [{ name: 'link', title: 'Link', type: 'link' }],
      },
    },
  ],
});

export const WithImages = Sanity.defineType({
  name: 'richtextWithImages',
  title: 'Rich Text with Images',
  type: 'array',
  of: [
    ...Base.of,
    {
      type: 'image',
      name: 'image',
      title: 'Image',
      options: {
        hotspot: true,
      },
      preview: {
        select: {
          caption: 'caption',
          alt: 'alt',
          asset: 'asset',
        },
        prepare({ caption, alt, asset }) {
          return { title: caption || alt || 'Image', media: asset };
        },
      },
      fields: [
        {
          name: 'caption',
          type: 'string',
          title: 'Caption',
          options: {
            isHighlighted: true,
          },
        },
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
          description: 'Important for SEO and accessibility',
          validation: (Rule) => Rule.required(),
        },
      ],
    },
  ],
});
