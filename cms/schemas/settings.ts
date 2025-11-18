import * as Sanity from 'sanity';

import Icons from '../lib/icons';

const Settings = Sanity.defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: Icons.Settings,
  preview: {
    select: {
      title: 'Settings',
    },
  },
  fields: [
    {
      name: 'activeAnnouncement',
      title: 'Active Announcement',
      type: 'reference',
      to: [{ type: 'announcement' }],
      description:
        'The announcement that is currently active. If no announcement is active, the site will not display an announcement.',
    },
  ],
});

export default Settings;
