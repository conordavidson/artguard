import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Page from '@/ui/page';
import * as Types from '@/lib/types';
import * as Text from '@/ui/text';

import Link from 'next/link';
import Icon from '@/ui/icon';

type LinkGridProps = {
  section: Types.LinkGridSection;
};

const LinkGrid: React.FC<LinkGridProps> = (props) => {
  return (
    <div className={Utils.cx('col-span-full grid grid-cols-subgrid', props.section.className)}>
      <Page.Container className="text-center max-w-[500px] mx-auto">
        <Ui.Heading.CenterStack
          heading={props.section.heading}
          subheading={props.section.subheading}
          ctas={props.section.ctas}
        />
      </Page.Container>
      <Page.Container className="mt-12 max-w-[1000px] mx-auto">
        <div className="grid grid-cols-12 gap-x-6 gap-y-6">
          {props.section.links.map((link, index) => (
            <Link
              href={link.href}
              key={index}
              target={link.target || '_self'}
              className={Utils.cx(
                'col-span-12 sm:col-span-6 border border-outline rounded-xl px-4 pt-4 pb-4 hover:bg-panel transition-colors flex flex-col justify-between cursor-pointer',
                {
                  'lg:col-span-4':
                    props.section.links.length === 3 || props.section.links.length > 4,
                }
              )}
            >
              <div>
                {link.icon && (
                  <div className="mb-3">
                    <Icon icon={link.icon} className="text-brand" />
                  </div>
                )}
                <div>
                  {link.eyebrow && (
                    <div className="mb-3">
                      <Text.Interface16 className="text-subtle">{link.eyebrow}</Text.Interface16>
                    </div>
                  )}
                  <Text.Interface20 className="text-muted">{link.heading}</Text.Interface20>
                  {link.body && (
                    <div className="mt-3">
                      <Text.Interface16 className="text-muted">{link.body}</Text.Interface16>
                    </div>
                  )}
                </div>
              </div>
              <div className="mt-5">
                <Text.Interface16 bold className="text-muted">
                  {link.ctaLabel}
                </Text.Interface16>
              </div>
            </Link>
          ))}
        </div>
      </Page.Container>
    </div>
  );
};

export default LinkGrid;
