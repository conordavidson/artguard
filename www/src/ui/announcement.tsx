import * as Richtext from '@/ui/richtext';
import * as Sanity from '@/lib/sanity';
import * as Text from '@/ui/text';
import * as Utils from '@/lib/utils';

import Marquee from 'react-fast-marquee';
import Link from 'next/link';

export const Bar = async () => {
  const globals = await Sanity.Globals.get();
  const activeAnnouncement = globals.settings.activeAnnouncement;

  if (!activeAnnouncement) return null;

  const target = (() => {
    if (activeAnnouncement.cta.href.toLowerCase().endsWith('.pdf')) return '_blank';
    if (activeAnnouncement.cta.href.startsWith('/')) return '_self';
    return '_blank';
  })();

  return (
    <Link
      href={activeAnnouncement.cta.href}
      className="bg-emphasis h-announcement-height grid grid-cols-subgrid col-span-full group overflow-hidden"
      target={target}
    >
      <div className="col-start-2 col-end-15 lg:col-end-14 flex justify-center items-center group-hover:opacity-70 transition-opacity">
        <div className="w-full flex justify-center-safe items-center gap-x-3 md:gap-x-8">
          <div className="flex items-center gap-x-2 shrink-0">
            <Beacon />
            <div className="hidden md:block">
              <Text.Interface16 className="text-white">
                {Utils.formatDate(activeAnnouncement.publishedAt)}
              </Text.Interface16>
            </div>
            <div className="block md:hidden">
              <Text.Interface12 bold className="text-white">
                {Utils.formatDateShort(activeAnnouncement.publishedAt)}
              </Text.Interface12>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute z-10 left-0 top-0 bottom-0 w-3 bg-linear-to-r to-transparent from-emphasis"></div>
            <div className="absolute z-10 right-0 top-0 bottom-0 w-3 bg-linear-to-l to-transparent from-emphasis"></div>
            <Marquee autoFill speed={30} pauseOnHover>
              <div className="flex gap-x-8 pl-8 announcement-content">
                <Text.Interface16 className="text-white whitespace-nowrap" as="div">
                  <Richtext.Inherited content={activeAnnouncement.content} />
                </Text.Interface16>
                <Text.Interface16 className="text-brand underline decoration-dotted whitespace-nowrap">
                  {activeAnnouncement.cta.label}
                </Text.Interface16>
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Beacon = () => {
  return (
    <div className="flex items-center justify-center relative">
      <div className="beacon-dot absolute bg-brand/90 text-brand w-[5px] h-[5px] rounded-full"></div>
      <div className="beacon-ring-inner absolute border border-brand/50 w-[11px] h-[11px] rounded-full"></div>
      <div className="beacon-ring-outer border border-brand/30 w-[17px] h-[17px] rounded-full"></div>
    </div>
  );
};
