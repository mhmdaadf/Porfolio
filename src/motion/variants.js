export const EASING_STANDARD = [0.4, 0, 0.2, 1];

export const MOTION_TIMING = {
  micro: 0.18,
  standard: 0.3,
  entrance: 0.5
};

export const microTransition = {
  duration: MOTION_TIMING.micro,
  ease: EASING_STANDARD
};

export const standardTransition = {
  duration: MOTION_TIMING.standard,
  ease: EASING_STANDARD
};

export const entranceTransition = {
  duration: MOTION_TIMING.entrance,
  ease: EASING_STANDARD
};

export const revealSection = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: entranceTransition
  }
};

export const staggerContainer = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.06
    }
  }
};

export const revealItem = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: entranceTransition
  }
};

export const navbarVariants = {
  visible: { y: 0, opacity: 1 },
  hidden: { y: '-110%', opacity: 1 }
};

export const mobileMenuVariants = {
  open: { x: 0, opacity: 1 },
  closed: { x: '100%', opacity: 1 }
};

export const cardHover = {
  y: -6,
  scale: 1.015,
  boxShadow: '0 18px 34px rgba(2, 8, 23, 0.28)'
};

export const buttonHover = {
  y: -1,
  scale: 1.03
};

export const buttonTap = {
  y: 0,
  scale: 0.97
};

export const linkHover = {
  y: -1
};
