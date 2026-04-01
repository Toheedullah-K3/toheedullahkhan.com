export interface NavItem {
  label: string;
  href: string;
}

export const navbarConfig = {
  logo: {
    src: '/assets/dp.png',
    alt: 'logo',
    width: 100,
    height: 100,
  }, 
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
    {
      label: 'Work',
      href: '/work-experience',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Resume',
      href: '/resume',
    },
    {
      label: 'Links',
      href: '/links',
    },
  ] as NavItem[],
};