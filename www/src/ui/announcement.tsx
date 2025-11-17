import * as Content from "@/lib/content";
import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";

import Marquee from "react-fast-marquee";
import Link from "next/link";

export const Bar = () => {
  if (!Content.CURRENT_ANNOUNCEMENT) return null;

  return (
    <Link
      href={Content.CURRENT_ANNOUNCEMENT.cta.href}
      className="bg-emphasis h-announcement-height grid grid-cols-subgrid col-span-full group overflow-hidden"
    >
      <div className="col-start-2 col-end-15 lg:col-end-14 flex justify-center items-center group-hover:opacity-70 transition-opacity">
        <div className="w-full flex justify-center-safe items-center gap-x-3 md:gap-x-8">
          <div className="flex items-center gap-x-2 shrink-0">
            <Beacon />
            <div className="hidden md:block">
              <Text.Interface16 className="text-white">
                {Utils.formatDate(Content.CURRENT_ANNOUNCEMENT.publishedAt)}
              </Text.Interface16>
            </div>
            <div className="block md:hidden">
              <Text.Interface12 bold className="text-white">
                {Utils.formatDateShort(
                  Content.CURRENT_ANNOUNCEMENT.publishedAt
                )}
              </Text.Interface12>
            </div>
          </div>
          <div className="relative overflow-hidden">
            <div className="absolute z-10 left-0 top-0 bottom-0 w-3 bg-linear-to-r to-transparent from-emphasis"></div>
            <Marquee autoFill speed={30} pauseOnHover>
              <div className="flex gap-x-8 pl-8 announcement-content">
                <Text.Interface16 className="text-white whitespace-nowrap">
                  {Content.CURRENT_ANNOUNCEMENT.message}
                </Text.Interface16>
                <Text.Interface16 className="text-brand underline decoration-dotted whitespace-nowrap">
                  {Content.CURRENT_ANNOUNCEMENT.cta.label}
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
      <div className="absolute bg-brand w-[5px] h-[5px] rounded-full"></div>
      <div className="absolute border border-brand/75 w-[11px] h-[11px] rounded-full"></div>
      <div className="border border-brand/50 w-[17px] h-[17px] rounded-full"></div>
    </div>
  );
};
