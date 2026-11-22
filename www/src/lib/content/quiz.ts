import * as Paths from '@/lib/paths';
import * as Quiz from '@/lib/quiz';
import * as Types from '@/lib/types';

/*
The protection quiz on /protect.

Each option carries points. The outcomes are checked in order against the total score and the
flags of the chosen options, and the first match wins. Questions and outcome copy can vary by
earlier answers through `variants`.
*/
export const PROTECTION_QUIZ: Types.Quiz = {
  id: 'protection',
  segmentQuestionId: 'location',
  copy: {
    eyebrow: 'Protection quiz',
    footnote: 'Free. No email needed to see your result.',
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
        { id: 'home', label: 'Home', sub: 'A private residence or collection', points: 0 },
        {
          id: 'gallery',
          label: 'Gallery / public space',
          sub: 'Gallery, museum, office or other public-facing space',
          points: 1,
        },
        {
          id: 'travel',
          label: 'Traveling exhibition',
          sub: 'Works on tour, on loan or at fairs',
          points: 1,
        },
      ],
    },
    {
      id: 'protection',
      prompt: 'How is your home protected today?',
      options: [
        {
          id: 'consistent',
          label: 'A monitored alarm we use consistently',
          sub: "Armed whenever we're out or asleep",
          points: 0,
          flags: ['has-system'],
        },
        {
          id: 'often-off',
          label: 'A system we often leave off',
          sub: 'Switched off for guests, staff or routine',
          points: 2,
          flags: ['has-system'],
        },
        { id: 'none', label: 'Nothing beyond basic locks', sub: 'No alarm yet', points: 2 },
      ],
      variants: [
        {
          when: { location: 'gallery' },
          prompt: 'What protects the space today?',
          options: [
            {
              id: 'consistent',
              label: 'A monitored alarm and guards, used consistently',
              sub: 'Active during open hours too',
              points: 0,
              flags: ['has-system'],
            },
            {
              id: 'often-off',
              label: "Cameras or an alarm that's often off",
              sub: 'Off during open hours, or covers the room, not each object',
              points: 2,
              flags: ['has-system'],
            },
            {
              id: 'none',
              label: 'Little or nothing at the object level',
              sub: 'We rely on visitors behaving',
              points: 2,
            },
          ],
        },
        {
          when: { location: 'travel' },
          prompt: 'What protects the work on the road?',
          options: [
            {
              id: 'own-protocol',
              label: 'Our own crew, cases and a set routine',
              sub: 'The same protocol at every stop',
              points: 0,
            },
            {
              id: 'host-venue',
              label: 'Whatever each host venue provides',
              sub: 'Varies from stop to stop',
              points: 1,
            },
            {
              id: 'insurance-only',
              label: 'Not much beyond insurance',
              sub: 'We improvise at each venue',
              points: 2,
            },
          ],
        },
      ],
    },
    {
      id: 'access',
      prompt: 'Who has regular access to your home?',
      options: [
        { id: 'family', label: 'Mostly family', sub: 'Occasional visitors', points: 0 },
        {
          id: 'staff',
          label: 'Staff, cleaners or contractors',
          sub: 'People come and go on a schedule',
          points: 1,
        },
        {
          id: 'guests',
          label: 'Frequent guests, events or rentals',
          sub: 'Many people, many days',
          points: 2,
        },
      ],
      variants: [
        {
          when: { location: 'gallery' },
          prompt: 'Who is around the work?',
          options: [
            { id: 'invited', label: 'Staff and invited guests', sub: 'Controlled access', points: 0 },
            {
              id: 'appointment',
              label: 'Visitors by appointment',
              sub: 'Docents, staff and scheduled groups',
              points: 1,
            },
            {
              id: 'public',
              label: 'Open to the public daily',
              sub: 'Heavy foot traffic',
              points: 2,
            },
          ],
        },
        {
          when: { location: 'travel' },
          prompt: 'Who handles the work?',
          options: [
            {
              id: 'trusted-team',
              label: 'A small trusted team',
              sub: 'The same people at every stop',
              points: 0,
            },
            {
              id: 'several-hands',
              label: 'Couriers, installers and venue staff',
              sub: 'Several hands at each stop',
              points: 1,
            },
            {
              id: 'many-venues',
              label: 'Many people at many venues',
              sub: 'Hard to know who touches what',
              points: 2,
            },
          ],
        },
      ],
    },
    {
      id: 'collection',
      prompt: 'How significant is the collection?',
      options: [
        {
          id: 'few',
          label: 'A few key pieces',
          sub: 'Up to 5 objects, or under $250K',
          points: 0,
        },
        {
          id: 'serious',
          label: 'A serious collection',
          sub: '6 to 25 objects, or $250K to $2M',
          points: 1,
        },
        {
          id: 'major',
          label: 'A major collection',
          sub: '25+ objects, or over $2M',
          points: 2,
        },
      ],
    },
  ],
  outcomes: [
    {
      // No traveling answer carries the has-system flag, so there is no traveling variant.
      id: 'integrated',
      label: 'MAP Sensor Integration',
      when: { maxScore: 1, flags: ['has-system'] },
      cta: { label: 'Explore MAP Sensors', href: Paths.MAP_SENSORS },
      title: 'Start by integrating with your home system',
      summary:
        'Your answers point to a focused collection and a home alarm you already rely on. Adding MAP sensors to your existing panel is the fastest, most economical way to protect each piece.',
      bullets: [
        'Sensors added to the alarm panel you already own',
        'Each piece alarmed individually, not just the doors',
        'Simple to move to a dedicated system as you grow',
      ],
      note: {
        label: 'Worth knowing',
        body: 'On a shared system, art is protected only while that system is armed. A dedicated MAP system closes that gap.',
      },
      variants: [
        {
          when: { location: 'gallery' },
          title: "Start by integrating with your building's security system",
          summary:
            'Your answers point to a focused collection and a security system you already rely on. Adding MAP sensors to your existing panel is the fastest, most economical way to protect each piece.',
        },
      ],
    },
    {
      id: 'silver',
      label: 'MAP Silver',
      when: { maxScore: 4 },
      cta: { label: 'Explore the MAP Silver System', href: Paths.MAP_SYSTEM_SILVER },
      title: 'MAP Silver',
      summary:
        'Your answers point to a collection worth protecting independently of your home alarm. MAP Silver gives your most important pieces their own dedicated protection.',
      bullets: [
        "Protection that doesn't depend on your alarm's schedule",
        'Individual sensors on each piece you choose',
        // DRAFT, needs client sign-off. The prototype had "[Confirm with Bill: Silver capacity
        // and alert options]". Written from the MAP Silver spec table.
        'Up to 127 sensors on one panel, with a siren that sounds the moment a piece is moved',
      ],
      note: {
        label: 'Next step',
        body: 'A specialist can walk you through Silver and Gold side by side for your home.',
      },
      variants: [
        {
          when: { location: 'gallery' },
          summary:
            "Your answers point to a collection worth protecting independently of your building's security. MAP Silver gives your most important pieces their own dedicated protection.",
          note: {
            label: 'Next step',
            body: 'A specialist can walk you through Silver and Gold side by side for your space.',
          },
        },
        {
          when: { location: 'travel' },
          summary:
            "Your answers point to a collection worth protecting independently of each venue's security. MAP Silver gives your most important pieces their own dedicated protection.",
          // DRAFT, needs client sign-off. The prototype had "[Confirm portability options with
          // Bill.]". Written from the portability lines on the MAP Gold and Silver pages.
          note: {
            label: 'Next step',
            body: 'Both MAP systems are completely portable and move from venue to venue with your exhibition. A specialist will confirm the right setup for your tour.',
          },
        },
      ],
    },
    {
      id: 'gold',
      label: 'MAP Gold',
      cta: { label: 'Explore the MAP Gold System', href: Paths.MAP_SYSTEM_GOLD },
      title: 'MAP Gold',
      summary:
        "Your answers describe the profile Gold was built for: a significant collection, regular access by others, and an alarm that can't be the only line of defense.",
      bullets: [
        'Completely dedicated and entirely discreet',
        '24/7. Turn it on, leave it on',
        'Alerts wherever you are in the world',
      ],
      note: {
        label: 'Why dedicated matters',
        body: "Gold keeps working on its own, so a compromised or disarmed home alarm doesn't leave your art exposed.",
      },
      variants: [
        {
          when: { location: 'gallery' },
          note: {
            label: 'Why dedicated matters',
            body: "Gold keeps working on its own, so a compromised or disarmed primary alarm doesn't leave your art exposed.",
          },
        },
        {
          when: { location: 'travel' },
          // DRAFT, needs client sign-off. Same replacement as the traveling Silver note.
          note: {
            label: 'Next step',
            body: 'Both MAP systems are completely portable and move from venue to venue with your exhibition. A specialist will confirm the right setup for your tour.',
          },
        },
      ],
    },
  ],
};

// Fails the build if the definition is inconsistent or any answer path has no outcome.
if (typeof window === 'undefined') Quiz.assertValid(PROTECTION_QUIZ);
