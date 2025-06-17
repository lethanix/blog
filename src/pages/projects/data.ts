import type { ProjectData } from '@/types'

export const projectData: ProjectData = [
  {
    title: 'Development',
    projects: [
      // {
      //   text: 'Project Name',
      //   description: 'Your project description information is a long piece of text.',
      //   icon: 'i-simple-icons-gnubash',
      //   href: '/',
      // },
      // {
      //   text: 'Project Name',
      //   description: 'Your project description information is a long piece of text.',
      //   icon: 'i-simple-icons-gnubash',
      //   href: '/',
      // },
    ],
  },
  {
    title: 'Cloud',
    projects: [],
    // projects: [
    //   {
    //     text: 'Project Name',
    //     description: 'Your project description information is a long piece of text.',
    //     icon: 'i-simple-icons-gnubash',
    //     href: '/',
    //   },
    //   {
    //     text: 'Project Name',
    //     description: 'Your project description information is a long piece of text.',
    //     icon: 'i-simple-icons-gnubash',
    //     href: '/',
    //   },
    //   {
    //     text: 'Project Name',
    //     description: 'Your project description information is a long piece of text.',
    //     icon: 'i-simple-icons-gnubash',
    //     href: '/',
    //   },
    // ],
  },
  {
    title: 'CLI Tools',
    projects: [
      {
        text: 'Log Archive Tool',
        description: 'The script will accept the log directory as an argument, compress the logs, and store them in a new directory.',
        icon: 'i-simple-icons-gnubash',
        href: '/posts/pills/log-archive',
      },
      {
        text: 'Nginx Log Analyser',
        description: 'Simple shell tool to analyse an nginx access log file.',
        icon: 'i-simple-icons-gnubash',
        href: '/posts/pills/nginx-log-analyzer',
      },
      {
        text: 'Server Performance Stats',
        description: 'Bash script to analyse basic server performance stats.',
        icon: 'i-simple-icons-gnubash',
        href: '/posts/pills/server-performance-stats',
      },
    ],
  },
]
