import { useState } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

export function useNavbarMotion({ hideOffset = 120, delta = 3, disabled = false } = {}) {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    const diff = latest - previous;

    setIsScrolled(latest > 16);

    if (disabled || latest < hideOffset) {
      setIsHidden(false);
      return;
    }

    if (Math.abs(diff) < delta) {
      return;
    }

    setIsHidden(diff > 0);
  });

  return { isScrolled, isHidden };
}
