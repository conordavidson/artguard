"use client";

import * as Button from "@/ui/button";
import * as React from "react";
import * as Utils from "@/lib/utils";
import * as Page from "@/ui/page";
import * as Types from "@/lib/types";
import * as Text from "@/ui/text";
import * as Inputs from "@/ui/inputs";

import Link from "next/link";

type ContactFormSectionProps = {
  section: Types.ContactFormSection;
};

type ContactInfo = {
  name: string;
  email: string;
  phone: string;
  typeOfAsset: string;
  typeOfFacility: string;
  response: string;
  timeline: string;
  additionalComments: string;
};

type State =
  | {
      status: "IDLE";
      contactInfo: ContactInfo;
    }
  | {
      status: "PENDING";
      contactInfo: ContactInfo;
    }
  | {
      status: "SUCCESS";
      contactInfo: ContactInfo;
    }
  | {
      status: "ERROR";
      error: string;
      contactInfo: ContactInfo;
    };

const TYPE_OF_FACILIY_OPTIONS = [
  {
    label: "Museum",
    value: "museum",
  },
  {
    label: "Gallery",
    value: "gallery",
  },
  {
    label: "Private Residence",
    value: "private_residence",
  },
  {
    label: "Other",
    value: "other",
  },
];

const RESPONSE_OPTIONS = [
  {
    label: "Audible Alarm",
    value: "audible_alarm",
  },
  {
    label: "Text/Email",
    value: "text_email",
  },
  {
    label: "Phone Call",
    value: "phone_call",
  },
  {
    label: "Other",
    value: "other",
  },
];

const TIMELINE_OPTIONS = [
  {
    label: "Immediate",
    value: "immediate",
  },
  {
    label: "Within 6 Months",
    value: "within_6_months",
  },
  {
    label: "Just Comparing Solutions / No Timeline",
    value: "just_comparing_solutions_no_timeline",
  },
];

const ContactFormSection: React.FC<ContactFormSectionProps> = (props) => {
  const [state, setState] = React.useState<State>({
    status: "IDLE",
    contactInfo: {
      name: "",
      email: "",
      phone: "",
      typeOfAsset: "",
      typeOfFacility: TYPE_OF_FACILIY_OPTIONS[0].value,
      response: RESPONSE_OPTIONS[0].value,
      timeline: TIMELINE_OPTIONS[0].value,
      additionalComments: "",
    },
  });

  const onChange = (key: keyof ContactInfo, value: string) => {
    setState((prevState) => ({
      ...prevState,
      contactInfo: {
        ...prevState.contactInfo,
        [key]: value,
      },
    }));
  };

  return (
    <div
      className={Utils.cx(
        "col-span-full grid grid-cols-subgrid",
        props.section.className
      )}
    >
      <Page.Container>
        <div className="max-w-[575px] mx-auto">
          <Text.Display32 as="h2" className="text-foreground text-balance">
            {props.section.heading}
          </Text.Display32>
          {props.section.subheading && (
            <div className="mt-6">
              <Text.Interface18 className="text-subtle text-pretty">
                {props.section.subheading}
              </Text.Interface18>
            </div>
          )}
          <div className="mt-8">
            <div className="grid grid-cols-2 gap-x-5">
              <div>
                <Text.Interface14 bold className="text-muted">
                  By Email:
                </Text.Interface14>
                <div className="mt-1">
                  <Link
                    href={`mailto:${props.section.email}`}
                    className="hover:opacity-70 transition-opacity text-subtle underline decoration-dotted"
                  >
                    <Text.Interface20>{props.section.email}</Text.Interface20>
                  </Link>
                </div>
              </div>
              <div>
                <Text.Interface14 bold className="text-muted">
                  By Phone:
                </Text.Interface14>
                <div className="mt-1">
                  <Link
                    href={`tel:${props.section.phone}`}
                    className="hover:opacity-70 transition-opacity text-subtle underline decoration-dotted"
                  >
                    <Text.Interface20>{props.section.phone}</Text.Interface20>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <form className="mt-8 space-y-6">
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
              <Inputs.Input label="Name (Required)" id="name">
                <Inputs.Text
                  id="name"
                  placeholder="Enter your name"
                  value={state.contactInfo.name}
                  onChange={(value) => onChange("name", value)}
                />
              </Inputs.Input>
              <Inputs.Input label="Email (Required)" id="email">
                <Inputs.Text
                  id="email"
                  placeholder="Enter your email"
                  value={state.contactInfo.email}
                  onChange={(value) => onChange("email", value)}
                />
              </Inputs.Input>
            </section>
            <section>
              <Inputs.Input label="Phone" id="phone">
                <Inputs.Text
                  id="phone"
                  placeholder="Phone"
                  value={state.contactInfo.phone}
                  onChange={(value) => onChange("phone", value)}
                />
              </Inputs.Input>
            </section>
            <section>
              <Inputs.Input
                label="What type of asset are you protecting?"
                id="typeOfAsset"
              >
                <Inputs.TextArea
                  id="typeOfAsset"
                  placeholder="Let us know what type of asset your looking to protect"
                  value={state.contactInfo.typeOfAsset}
                  onChange={(value) => onChange("typeOfAsset", value)}
                  rows={6}
                />
              </Inputs.Input>
            </section>
            <section className="grid grid-cols-1 sm:grid-cols-2 gap-x-5 gap-y-6">
              <Inputs.Input
                label="What type of facility are you protecting?"
                id="typeOfFacility"
                className="justify-between"
              >
                <Inputs.Select
                  id="typeOfFacility"
                  placeholder="Select the type of facility you are protecting"
                  value={state.contactInfo.typeOfFacility}
                  onChange={(value) => onChange("typeOfFacility", value)}
                  options={TYPE_OF_FACILIY_OPTIONS}
                />
              </Inputs.Input>
              <Inputs.Input
                label="What response do you need?"
                id="response"
                className="justify-between"
              >
                <Inputs.Select
                  id="response"
                  placeholder="Select the type of response you are looking for"
                  value={state.contactInfo.response}
                  onChange={(value) => onChange("response", value)}
                  options={RESPONSE_OPTIONS}
                />
              </Inputs.Input>
            </section>
            <section>
              <Inputs.Input label="What is your timeline?" id="timeline">
                <Inputs.Select
                  id="timeline"
                  placeholder="Select the timeline you are looking for"
                  value={state.contactInfo.timeline}
                  onChange={(value) => onChange("timeline", value)}
                  options={TIMELINE_OPTIONS}
                />
              </Inputs.Input>
            </section>
            <section>
              <Inputs.Input label="Additional Comments" id="additionalComments">
                <Inputs.TextArea
                  id="additionalComments"
                  placeholder="Enter any additional comments"
                  value={state.contactInfo.additionalComments}
                  onChange={(value) => onChange("additionalComments", value)}
                  rows={6}
                />
              </Inputs.Input>
            </section>
            <div className="mt-8 max-w-[300px] mx-auto">
              <Button.Primary type="submit">Submit</Button.Primary>
            </div>
          </form>
        </div>
      </Page.Container>
    </div>
  );
};

export default ContactFormSection;
