// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sudocu Docs',
  tagline: 'Documentación sobre la intregración Sudocu - Diaguita - Pilagá',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  // URL for your site. For a site deployed at https://my-org.com/my-project/, url is https://my-org.com/
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  // Base URL for your project, with a trailing slash. For a site deployed at https://my-org.com/my-project/, baseUrl is /my-project/.
  baseUrl: '/sudocs',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'marianomat', // Usually your GitHub org/user name.
  projectName: 'sudocs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SuDocs',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Documentación',
          },
          
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/solicitud-express',
              },
            ],
          },
          {
            title: 'Comunidad',
            items: [
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/UNRoficial/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/UNRoficial',
              },
            ],
          },
          {
            title: 'Más',
            items: [
              {
                label: 'Web UNR',
                to: 'https://unr.edu.ar/',
              },

            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()}, Inc. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
