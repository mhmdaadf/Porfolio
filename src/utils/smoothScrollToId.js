export function getNavOffset(navElement, extraOffset = 12) {
  const navHeight = navElement?.offsetHeight ?? 76;
  return navHeight + extraOffset;
}

export function smoothScrollToId(id, navElement) {
  const target = document.getElementById(id);
  if (!target) {
    return false;
  }

  const offset = getNavOffset(navElement);
  const top = target.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(top, 0),
    behavior: 'smooth'
  });

  return true;
}
