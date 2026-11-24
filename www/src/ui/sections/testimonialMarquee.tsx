'use client';

import * as React from 'react';
import * as Text from '@/ui/text';
import * as Types from '@/lib/types';
import * as Utils from '@/lib/utils';

type TestimonialMarqueeProps = {
  section: Types.TestimonialMarqueeSection;
};

// Pixels per second. Slow enough to read a quote as it passes.
const SPEED = 22;

// How long the row waits after the visitor stops scrolling it before it drifts again.
const RESUME_DELAY_IN_MS = 1500;

// The cards are repeated so the row can loop. Three sets cover screens up to 1.5 sets wide.
const COPIES = 3;

// Longer quotes get a wider card, so every card ends up a similar height.
const LONG_QUOTE_LENGTH = 220;

/*
Drifts a scrollable row sideways and loops it, so it reads as a marquee but can still be scrolled
by hand. The row pauses under the mouse, under a finger, and off screen.
*/
const useDrift = (trackRef: React.RefObject<HTMLDivElement | null>, cardsPerCopy: number) => {
  React.useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const drifts = !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Width of one set of cards.
    let loopWidth = 0;
    // Kept apart from `scrollLeft`, which drops the fractions of a pixel a slow drift moves by.
    let position = 0;
    let lastFrameAt = performance.now();
    let pausedUntil = 0;
    let isHovered = false;
    let isTouched = false;
    let isOnScreen = true;
    let frameId = 0;

    const measure = () => {
      const first = track.children[0] as HTMLElement;
      const repeat = track.children[cardsPerCopy] as HTMLElement;
      loopWidth = repeat.offsetLeft - first.offsetLeft;
    };

    // Each set looks the same, so stepping back or forward by one is invisible. Staying around
    // the middle set leaves cards to scroll into on both sides.
    const wrap = (value: number) => {
      if (value >= loopWidth * 1.5) return value - loopWidth;
      if (value < loopWidth * 0.5) return value + loopWidth;
      return value;
    };

    const isPaused = () => {
      return !drifts || isHovered || isTouched || !isOnScreen || performance.now() < pausedUntil;
    };

    const onFrame = (now: number) => {
      const elapsed = Math.min(now - lastFrameAt, 100);
      lastFrameAt = now;

      if (isPaused()) {
        // Pick up from wherever the visitor leaves the row.
        position = track.scrollLeft;
      } else {
        position = wrap(position + (SPEED * elapsed) / 1000);
        track.scrollLeft = position;
      }

      frameId = window.requestAnimationFrame(onFrame);
    };

    const onScroll = () => {
      // While drifting, the only scrolling is our own.
      if (!isPaused()) return;

      // A flick keeps scrolling after the finger lifts. Wait for it to settle.
      if (performance.now() < pausedUntil) pausedUntil = performance.now() + RESUME_DELAY_IN_MS;

      const wrapped = wrap(track.scrollLeft);
      if (wrapped !== track.scrollLeft) track.scrollLeft = wrapped;
    };

    const onPointerEnter = (e: PointerEvent) => {
      if (e.pointerType === 'mouse') isHovered = true;
    };

    const onPointerLeave = () => {
      isHovered = false;
    };

    const onTouchStart = () => {
      isTouched = true;
    };

    const onTouchEnd = () => {
      isTouched = false;
      pausedUntil = performance.now() + RESUME_DELAY_IN_MS;
    };

    const resizeObserver = new ResizeObserver(() => {
      measure();
      position = wrap(track.scrollLeft);
      track.scrollLeft = position;
    });

    const intersectionObserver = new IntersectionObserver(([entry]) => {
      isOnScreen = entry.isIntersecting;
    });

    measure();
    position = loopWidth;
    track.scrollLeft = position;

    resizeObserver.observe(track);
    intersectionObserver.observe(track);
    track.addEventListener('scroll', onScroll, { passive: true });
    track.addEventListener('pointerenter', onPointerEnter);
    track.addEventListener('pointerleave', onPointerLeave);
    track.addEventListener('touchstart', onTouchStart, { passive: true });
    track.addEventListener('touchend', onTouchEnd);
    track.addEventListener('touchcancel', onTouchEnd);
    frameId = window.requestAnimationFrame(onFrame);

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      track.removeEventListener('scroll', onScroll);
      track.removeEventListener('pointerenter', onPointerEnter);
      track.removeEventListener('pointerleave', onPointerLeave);
      track.removeEventListener('touchstart', onTouchStart);
      track.removeEventListener('touchend', onTouchEnd);
      track.removeEventListener('touchcancel', onTouchEnd);
    };
  }, [trackRef, cardsPerCopy]);
};

const TestimonialMarquee: React.FC<TestimonialMarqueeProps> = (props) => {
  const { testimonials } = props.section;

  const trackRef = React.useRef<HTMLDivElement | null>(null);
  useDrift(trackRef, testimonials.length);

  return (
    <section
      className={Utils.cx(
        'section testimonial-marquee-section col-span-full',
        props.section.className
      )}
    >
      <h2 className="sr-only">{props.section.heading}</h2>
      {/* The row below repeats its cards to loop, so screen readers get this list instead. */}
      <ul className="sr-only">
        {testimonials.map((testimonial) => (
          <li key={testimonial.name}>
            <blockquote>{testimonial.quote}</blockquote>
            {testimonial.name}, {testimonial.role}
          </li>
        ))}
      </ul>
      <div aria-hidden className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-background to-transparent md:w-24"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-background to-transparent md:w-24"></div>
        {/* The padding keeps a scrollbar, where one shows, clear of the cards. */}
        <div ref={trackRef} className="testimonial-marquee-track flex overflow-x-auto pb-6">
          {Array.from({ length: COPIES }).flatMap((_, copy) =>
            testimonials.map((testimonial) => (
              <figure
                key={`${copy}-${testimonial.name}`}
                className={Utils.cx(
                  'mr-4 flex max-w-[82vw] shrink-0 flex-col justify-between gap-y-5 rounded-xl bg-panel p-5 md:mr-5 md:p-6',
                  {
                    'w-[360px]': testimonial.quote.length <= LONG_QUOTE_LENGTH,
                    'w-[520px]': testimonial.quote.length > LONG_QUOTE_LENGTH,
                  }
                )}
              >
                <Text.Display18 as="blockquote" className="text-pretty text-muted">
                  “{testimonial.quote}”
                </Text.Display18>
                <figcaption>
                  <Text.Interface16 bold>{testimonial.name}</Text.Interface16>
                  <Text.Interface16 className="text-subtle">{testimonial.role}</Text.Interface16>
                </figcaption>
              </figure>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialMarquee;
