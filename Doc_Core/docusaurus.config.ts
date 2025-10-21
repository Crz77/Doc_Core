import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'MES Dokumentation',
  tagline: 'Alles was du übers MES wissen musst',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://mes-sty.skf.net/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Assets/MESDocV2/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SKF', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en'],
    localeConfigs: {
        de: {
          label: 'Deutsch',
          direction: 'ltr',
          htmlLang: 'de-de',
          calendar: 'gregory',
          path: 'de',
        },
        en: {
            label: 'English',
            direction: 'ltr',
            htmlLang: 'en-US',
            calendar: 'gregory',
            path: 'en',
          },
    }
  },

  scripts: [
    {
      src: "https://kit.fontawesome.com/3a02de011f.js",
      crossorigin: "anonymous",
      async: true,
    },
  ],
  themes: [
    '@cmfcmf/docusaurus-search-local',
  ],
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        disableInDev: false,
      },
    ]
  ],
  customFields: {
    images: '/img'
  },
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
        title: 'HOME',
        //logo: {
        //  alt: 'MES Logo',
        //  src: 'img/logo.svg',
        //},
       items: [
            {
                type: 'docSidebar',
                sidebarId: 'fertigungSidebar',
                position: 'left',
                label: 'Fertigung',
            },
            {
                type: 'docSidebar',
                sidebarId: 'feinplanungSidebar',
                position: 'left', 
                label: 'Feinplanung',
            },
            {
                type: 'docSidebar',
                sidebarId: 'wkzmmSidebar',
                position: 'left',
                label: 'Werkzeug & Messmittel',
            },
            {
                type: 'docSidebar',
                sidebarId: 'pprSidebar',
                position: 'left',
                label: 'Produktionspapiere',
            },
            {
                type: 'docSidebar',
                sidebarId: 'newsSidebar',
                position: 'right',
                label: 'NEWS',
            },
        ],
    },
    styles: {
        //Bootstrap 5
        src: [
          'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css'
        ],
    },
          footer: {
        style: 'dark',
        links: [
          {
            title: 'Thomas Higlsberger',
            items: [
              {
                html: `
                    <p style="font-size:13px"> Manager Business Process Design <br/> Manufacturing Execution & Digitalization </p> 
                  `                
              },
              {
                label: 'thomas.higlsberger@skf.com',
                href: 'mailto:thomas.higlsberger@skf.com', 
              },
            ],
          },
          {
            title: 'Stefan Schwarzlmüller',
            items: [
              {
                html: `
                <p style="font-size:13px"> Process Design Engineer <br/> <br/></p> 
                  `                
              },
              {
                label: 'stefan.schwarzlmueller@skf.com',
                href: 'mailto:stefan.schwarzlmueller@skf.com', 
              },
            ],
          },
          {
            title: 'Andreas Maderthaner',
            items: [
              {
                html: `
                    <p style="font-size:13px"> Process Design Engineer <br/> <br/></p> 
                  `                
              },
              {
                label: 'andreas.maderthaner@skf.com',
                href: 'mailto:andreas.maderthaner@skf.com', 
              },
            ],
          },
          {
            title: 'Christoph Lengauer',
            items: [
              {
                html: `
                  <p style="font-size:13px"> Process Design Engineer <br/> <br/></p>
                `                
              },
              {
                label: 'christoph.lengauer@skf.com',
                href: 'mailto:christoph.lengauer@skf.com', 
              },
            ],
          },
        ],
        /* copyright: `<br/> Copyright © ${new Date().getFullYear()} MES Documentation Project`, */
        copyright: `<br/> Made with &#10084;`,
      },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
