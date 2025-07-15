import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

export interface ObserveIntersectionProps {
  id: string;
  children: React.ReactNode;
  threshold?: number;
  onChange?: (id: string, inView: boolean) => void;
}

const ObserveIntersection = ({
  id,
  children,
  threshold = 0,
  onChange,
}: ObserveIntersectionProps) => {
  const { ref, inView } = useInView({ threshold: threshold });

  useEffect(() => {
    if (onChange) {
      onChange(id, inView);
    }
  }, [inView]);

  return <div ref={ref}>{children}</div>;
};

export default ObserveIntersection;
