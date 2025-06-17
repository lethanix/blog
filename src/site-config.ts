export const siteConfig = {
  author: 'Lethanix',
  themeAuthor: 'Kieran Wong',
  title: 'Lethanix',
  subtitle: 'Lethanix\'s blog',
  description: 'I\'m Louis (aka Lethanix) and this is my blog where I talk about cloud, linux and software development.',
  image: {
    src: '/hero.jpg',
    alt: 'Website Main Image',
  },
  email: 'me@lethanix.com',
  socialLinks: [
    {
      text: 'GitHub',
      href: 'https://github.com/lethanix',
      icon: 'i-simple-icons-github',
      header: 'i-ri-github-line',
    },
    {
      text: 'Linkedin',
      href: 'https://www.linkedin.com/in/louismurguia/',
      icon: 'i-simple-icons-linkedin',
    },
    {
      text: 'Mail',
      href: 'mailto:me@lethanix.com',
      icon: 'i-simple-icons-protonmail',
    },
    // {
    //   text: 'Twitter',
    //   href: '',
    //   icon: 'i-simple-icons-x',
    //   header: 'i-ri-twitter-x-line',
    // },
    // {
    //   text: 'Instagram',
    //   href: '',
    //   icon: 'i-simple-icons-instagram',
    // },
    // {
    //   text: 'Youtube',
    //   href: '',
    //   icon: 'i-simple-icons-youtube',
    // },
  ],
  header: {
    logo: {
      src: '/favicon.svg',
      alt: 'Logo Image',
    },
    navLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Pills',
        href: '/blog/pills',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
    ],
  },
  page: {
    blogLinks: [
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'Pills',
        href: '/blog/pills',
      },
      {
        text: 'Talks',
        href: '/blog/talks',
      },
    ],
  },
  footer: {
    navLinks: [
      {
        text: 'Home',
        href: '/',
      },
      {
        text: 'Projects',
        href: '/projects',
      },
      {
        text: 'Blog',
        href: '/blog',
      },
      {
        text: 'GitHub',
        href: 'https://github.com/lethanix',
      },
    ],
    themeLinks: [
      {
        text: 'View on Astro',
        href: 'https://astro.build/themes/details/vitesse-theme-for-astro/',
      },
      {
        text: 'GitHub Repository',
        href: 'https://github.com/kevinwong865/astro-theme-vitesse',
      },
    ],
  },
}

export default siteConfig
