import * as Paths from '@/lib/paths';
import * as Quiz from '@/lib/quiz';
import * as Types from '@/lib/types';

/*
The protection quiz on the homepage and /protect.

A branching set of questions: each answer decides which question comes next, and the answers
decide the outcome. A question with `when` is only asked on the paths listed. Outcomes are
checked in order and the first whose `when` matches wins. Questions and outcome copy can vary
by earlier answers through `variants`, though no outcome does at the moment.

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
  // The client's outline names the product for each path, and the copy for each result is theirs.
  outcomes: [
    {
      id: 'integrated',
      label: 'MAP Sensors',
      when: [{ solution: 'integrate' }],
      cta: { label: 'Explore MAP Sensors', href: Paths.MAP_SENSORS },
      title: 'MAP Sensors',
      summary:
        'You want to work with your security installer to add art protection to your existing security system or separate parallel system.',
      bullets: [
        'Wireless sensors are enrolled for always-on supervision',
        'Covers any art or valuable stationary objects',
        'Safe, point-of-contact application for each piece with precise location ID',
      ],
      note: {
        label: 'Worth knowing',
        body: 'Whether the main security is armed to prevent outsiders from coming in or disarmed to allow insiders free movement and access, your art is discreetly protected, 24/7.',
      },
    },
    {
      id: 'silver',
      label: 'MAP Silver',
      when: [{ alert: 'audible' }],
      cta: { label: 'Explore the MAP Silver System', href: Paths.MAP_SYSTEM_SILVER },
      title: 'MAP Silver',
      summary:
        'You want a separate system that sounds an alarm the moment a piece is moved. MAP Silver is a stand-alone system with an audible siren, designed especially for daytime protection.',
      bullets: [
        'Wireless MAP sensors pre-enrolled for plug-and-play operation',
        'Dedicated protection, separate from the main security',
        'Covers up to 127 pieces with panel or remote siren',
      ],
      note: {
        label: 'Worth knowing',
        body: 'The ultimate protection from grab-and-run theft for galleries, small museums and special and traveling exhibitions.',
      },
    },
    {
      id: 'gold',
      label: 'MAP Gold',
      cta: { label: 'Explore the MAP Gold System', href: Paths.MAP_SYSTEM_GOLD },
      title: 'MAP Gold',
      summary:
        "You want a system of comprehensive protection for your art and any valuable stationary assets that's discreet and separate from the main security.",
      bullets: [
        'Wireless MAP sensors pre-enrolled for plug-and-play operation',
        'Multiple communication channels and customized alerts to unauthorized movement',
        'Can be managed from a mobile device for ease-of-use and total flexibility',
      ],
      note: {
        label: 'Worth knowing',
        body: 'Gold is the choice of high-end collectors the world over for its uncompromising protection with minimal fuss.',
      },
    },
  ],
};

// Fails the build if the definition is inconsistent or any answer path has no outcome.
if (typeof window === 'undefined') Quiz.assertValid(PROTECTION_QUIZ);
