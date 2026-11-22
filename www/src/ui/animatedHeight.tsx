'use client';

import * as React from 'react';
import * as Utils from '@/lib/utils';

type AnimatedHeightProps = React.PropsWithChildren<{
  className?: string;
}>;

/*
Eases its own height to follow its content whenever the content's height changes.
*/
const AnimatedHeight: React.FC<AnimatedHeightProps> = (props) => {
  const contentRef = React.useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = React.useState<number | null>(null);

  React.useEffect(() => {
    const content = contentRef.current;
    if (!content) return;

    const observer = new ResizeObserver(() => setHeight(content.offsetHeight));
    observer.observe(content);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={Utils.cx(
        'overflow-hidden transition-[height] duration-[240ms] ease-out motion-reduce:transition-none',
        props.className
      )}
      style={height === null ? undefined : { height }}
    >
      <div ref={contentRef}>{props.children}</div>
    </div>
  );
};

export default AnimatedHeight;
