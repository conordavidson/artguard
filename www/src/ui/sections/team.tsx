import * as Ui from '@/ui';
import * as Utils from '@/lib/utils';
import * as Page from '@/ui/page';
import * as Types from '@/lib/types';
import * as Text from '@/ui/text';
import * as Graphics from '@/ui/graphics';

import Image from 'next/image';
import Link from 'next/link';

type TeamSectionProps = {
  section: Types.TeamSection;
};

const TeamSection: React.FC<TeamSectionProps> = (props) => {
  return (
    <section
      className={Utils.cx(
        'section team-section col-span-full grid grid-cols-subgrid',
        props.section.className
      )}
    >
      <Page.Container>
        <div className="text-center max-w-[500px] mx-auto">
          <Ui.Heading.CenterStack heading={props.section.heading} />
        </div>
      </Page.Container>
      <Page.Container className="mt-12">
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="grid grid-cols-12 lg:gap-x-12">
            <div className="col-span-12 lg:col-span-6">
              <Text.Display32 as="h2" className="text-foreground text-pretty">
                {props.section.featuredFounder.name}
              </Text.Display32>
              <div className="mt-2">
                <Text.Interface18 bold className="text-faint text-pretty">
                  {props.section.featuredFounder.title}
                </Text.Interface18>
              </div>
              {props.section.featuredFounder.image && (
                <div className="relative lg:hidden mt-4 aspect-square">
                  <Image
                    src={props.section.featuredFounder.image.src}
                    alt={props.section.featuredFounder.image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="mt-6">
                <Text.Interface16 className="text-muted text-pretty">
                  {props.section.featuredFounder.bio}
                </Text.Interface16>
              </div>
              {props.section.featuredFounder.linkedinUrl && (
                <div className="mt-4">
                  <Link
                    href={props.section.featuredFounder.linkedinUrl}
                    className="text-muted hover:opacity-70 transition-opacity"
                  >
                    <div className="w-[28px] h-[28px]">
                      <Graphics.LinkedInIcon />
                    </div>
                  </Link>
                </div>
              )}
            </div>
            <div className="col-span-12 lg:col-span-6 hidden lg:block">
              {props.section.featuredFounder.image && (
                <div className="relative aspect-square">
                  <Image
                    src={props.section.featuredFounder.image.src}
                    alt={props.section.featuredFounder.image.alt}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
            </div>
          </div>
          <div className="mt-20 grid grid-cols-12 lg:gap-x-12 gap-y-6">
            <div className="col-span-12 lg:col-span-4">
              <Text.Display32 as="h2" className="text-foreground text-pretty">
                {props.section.secondaryFounder.name}
              </Text.Display32>
              <div className="mt-2">
                <Text.Interface18 bold className="text-faint text-pretty">
                  {props.section.featuredFounder.title}
                </Text.Interface18>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <Text.Interface16 className="text-muted text-pretty">
                {props.section.featuredFounder.bio}
              </Text.Interface16>
            </div>
          </div>
        </div>
      </Page.Container>
      <Page.Container className="mt-24">
        <div className="text-center max-w-[500px] mx-auto">
          <Ui.Heading.CenterStack heading="Board of Advisors" />
        </div>
      </Page.Container>
      <Page.Container className="mt-12">
        <div className="w-full max-w-[1000px] mx-auto">
          <div className="grid grid-cols-12 lg:gap-x-12 gap-y-14">
            {props.section.boardOfAdvisors.map((advisor) => (
              <div key={advisor.name} className="col-span-12 lg:col-span-6">
                <Text.Interface18 bold className="text-muted text-pretty">
                  {advisor.name}
                </Text.Interface18>
                <div className="mt-4">
                  <Text.Interface16 className="text-muted text-pretty">
                    {advisor.bio}
                  </Text.Interface16>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Page.Container>
    </section>
  );
};

export default TeamSection;
