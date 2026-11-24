import * as Paths from '@/lib/paths';
import * as Quiz from '@/lib/quiz';
import * as Types from '@/lib/types';

/*
The protection quiz on the homepage and /protect.

A branching set of questions: each answer decides which question comes next, and the answers
decide the outcome. A question with `when` is only asked on the paths listed. Outcomes are
checked in order and the first whose `when` matches wins. Questions and outcome copy can vary
by earlier answers through `variants`.

  Private facility  ->  solution: integrate -> MAP Sensors
                        solution: separate  -> MAP Gold
  Public space      ->  solution: integrate -> MAP Sensors
                        solution: separate  -> alert: audible -> MAP Silver
                                               alert: alerts  -> MAP Gold
  Traveling art     ->  alert: audible -> MAP Silver
                        alert: alerts  -> MAP Gold
*/
export const PROTECTION_QUIZ: Types.Quiz = {
  id: 'protection',
  segmentQuestionId: 'location',
  copy: {
    eyebrow: 'Protection quiz',
    matchLabel: 'Your match',
    leadHeading: 'Get your plan from an Art Guard specialist',
    leadCta: 'Send my plan',
    successHeading: 'Thank you.',
    successBody: 'A specialist will be in touch to talk through next steps.',
  },
  questions: [
    {
      id: 'location',
      prompt: 'Where do you want to protect your art?',
      options: [
        {
          id: 'private',
          label: 'Private facility',
          sub: 'Home, yacht, office, rental property',
        },
        {
          id: 'public',
          label: 'Public-facing space',
          sub: 'Museum, gallery, hotel, library, etc.',
        },
        {
          id: 'travel',
          label: 'Traveling art',
          sub: 'In-house works on loan, traveling exhibitions, fairs',
        },
      ],
    },
    {
      id: 'solution',
      when: [{ location: 'private' }, { location: 'public' }],
      prompt: 'What type of solution are you looking for?',
      options: [
        {
          id: 'integrate',
          label: 'Integrate object-specific sensors into your existing security system',
        },
        {
          id: 'separate',
          label:
            'Deploy a separate 24-hour security system for art with text, email and phone alerts and emergency dispatch',
        },
      ],
      variants: [
        {
          when: { location: 'public' },
          prompt: 'What type of solution are you looking for?',
          options: [
            {
              id: 'integrate',
              label: 'Integrate object-specific sensors into your existing security system',
            },
            { id: 'separate', label: 'Separate system for art' },
          ],
        },
      ],
    },
    {
      id: 'alert',
      when: [{ location: 'travel' }, { location: 'public', solution: 'separate' }],
      prompt: 'How would you prefer to be alerted to an event?',
      options: [
        { id: 'audible', label: 'Audible alarm from panel or a remote siren' },
        {
          id: 'alerts',
          label: '24-hour alerts via text, email, phone or emergency dispatch',
        },
      ],
      variants: [
        {
          when: { location: 'public' },
          prompt: 'How would you prefer to be alerted to an event?',
          options: [
            {
              id: 'audible',
              label: 'Audible alarm from panel or a remote siren',
              sub: 'Specific for daytime protection',
            },
            {
              id: 'alerts',
              label: '24-hour alerts via text, email, phone or emergency dispatch',
            },
          ],
        },
      ],
    },
  ],
  // The client's outline names the product for each path. The summaries below are DRAFTS written
  // from the product pages and need client sign-off, as do the lines marked DRAFT.
  outcomes: [
    {
      id: 'integrated',
      label: 'MAP Sensors',
      when: [{ solution: 'integrate' }],
      cta: { label: 'Explore MAP Sensors', href: Paths.MAP_SENSORS },
      title: 'MAP Sensors',
      summary:
        'You want to protect your art through the security system you already have. MAP sensors are added to your existing panel by an installer or integrator, so each piece is alarmed on its own.',
      bullets: [
        'Sensors added to the alarm panel you already own',
        'Each piece alarmed individually, not just the doors',
        // DRAFT. Replaces "Simple to move to a dedicated system as you grow".
        'Installed with your installer or integrator',
      ],
      note: {
        label: 'Worth knowing',
        body: 'MAP protects at the point of contact, whether other security is on or off. Art stays covered while staff and visitors can move around freely.',
      },
    },
    {
      id: 'silver',
      label: 'MAP Silver',
      when: [{ alert: 'audible' }],
      cta: { label: 'Explore the MAP Silver System', href: Paths.MAP_SYSTEM_SILVER },
      title: 'MAP Silver',
      summary:
        'You want a separate system that sounds an alarm the moment a piece is moved. MAP Silver is a stand-alone system with an audible siren, built for daytime protection.',
      bullets: [
        "Protection that doesn't depend on your alarm's schedule",
        'Individual sensors on each piece you choose',
        // DRAFT, from the MAP Silver spec table.
        'Up to 127 sensors on one panel, with a siren that sounds the moment a piece is moved',
      ],
      note: {
        label: 'Worth knowing',
        body: 'MAP Silver is completely portable and simple to install, making it a versatile, dependable security option that easily moves across locations with your exhibit.',
      },
      variants: [
        {
          when: { location: 'travel' },
          summary:
            'You want an audible alarm that travels with the work. MAP Silver is a stand-alone system with an audible siren that moves from show to show.',
        },
      ],
    },
    {
      id: 'gold',
      label: 'MAP Gold',
      cta: { label: 'Explore the MAP Gold System', href: Paths.MAP_SYSTEM_GOLD },
      title: 'MAP Gold',
      summary:
        'You want a separate system that watches your art around the clock and alerts you wherever you are. MAP Gold is a dedicated system that works independently of your main security.',
      bullets: [
        'Completely dedicated and entirely discreet',
        '24/7. Turn it on, leave it on',
        'Alerts wherever you are in the world',
      ],
      note: {
        label: 'Why dedicated matters',
        body: "Gold keeps working on its own, so a compromised or disarmed primary alarm doesn't leave your art exposed.",
      },
      variants: [
        {
          when: { location: 'travel' },
          summary:
            "You want round-the-clock alerts that travel with the work. MAP Gold is a dedicated, portable system that works independently of each venue's security.",
          note: {
            label: 'Worth knowing',
            body: 'MAP Gold protects art, memorabilia, and jewelry of any size with insurer-approved security, a low initial investment, and negligible lifetime costs.',
          },
        },
      ],
    },
  ],
};

// Fails the build if the definition is inconsistent or any answer path has no outcome.
if (typeof window === 'undefined') Quiz.assertValid(PROTECTION_QUIZ);
