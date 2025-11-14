import * as Content from "@/lib/content";
import * as Page from "@/ui/page";
import * as Text from "@/ui/text";
import * as Utils from "@/lib/utils";

import Link from "next/link";

export const Bar = () => {
  if (!Content.CURRENT_ANNOUNCEMENT) return null;

  return (
    <Link
      href={Content.CURRENT_ANNOUNCEMENT.cta.href}
      className="bg-black h-announcement-height grid grid-cols-subgrid col-span-full group"
    >
      <Page.Container className="flex justify-center items-center group-hover:opacity-70 transition-opacity">
        <div className="flex items-center gap-x-8">
          <div className="flex items-center gap-x-2">
            <Beacon />
            <Text.Interface16 className="text-white">
              {Utils.formatDate(Content.CURRENT_ANNOUNCEMENT.publishedAt)}
            </Text.Interface16>
          </div>
          <Text.Interface16 className="text-white">
            {Content.CURRENT_ANNOUNCEMENT.message}
          </Text.Interface16>

          <Text.Interface16 className="text-brand underline decoration-dotted">
            {Content.CURRENT_ANNOUNCEMENT.cta.label}
          </Text.Interface16>
        </div>
      </Page.Container>
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
