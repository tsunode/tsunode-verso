import { useEffect, useRef } from 'react';

export interface IInfiniteScrollProps {
  callback: () => void;
  loading?: boolean;
}

export const InfiniteScroll = ({ callback, loading }: IInfiniteScrollProps) => {
  const divInfiniteScrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(([entry]) => {
      const ratio = entry.intersectionRatio;

      if (ratio > 0 && !loading) {
        callback();
      }
    });

    if (divInfiniteScrollRef.current) {
      intersectionObserver.observe(divInfiniteScrollRef.current);
    }

    return () => {
      intersectionObserver.disconnect();
    };
  }, [divInfiniteScrollRef]);

  return <div ref={divInfiniteScrollRef} />;
};
