import * as RichText from './richtext';

import Announcement from './announcement';
import Author from './author';
import Link from './link';
import Post from './post';
import Settings from './settings';
import Tag from './tag';

export default [
  Announcement,
  Author,
  Link,
  Post,
  RichText.Base,
  RichText.WithImages,
  Settings,
  Tag,
];
