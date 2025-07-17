import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "ESRIEACT Docs",
  favicon: "img/esrieact-logo-3.png",

  // Set the production url of your site here
  url: "https://slutske22.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/esrieact/",
  organizationName: "slutske22",

  // GitHub pages deployment config.
  projectName: "esrieact", // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  themes: ["@docusaurus/theme-live-codeblock"],

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  // i18n: {
  //   defaultLocale: "en",
  //   locales: ["en"],
  // },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: false, // disables built-in docs plugin
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "default",
        path: "docs",
        routeBasePath: "/",
        sidebarPath: require.resolve("./sidebars.js"),
      },
    ],
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "examples",
        path: "examples",
        routeBasePath: "examples",
        sidebarPath: require.resolve("./sidebars.examples.js"),
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "ESRIEACT Documentation",
      logo: {
        alt: "My Site Logo",
        src: "img/esrieact-logo-3.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "API Docs",
          docsPluginId: "default",
        },
        {
          type: "docSidebar",
          sidebarId: "examplesSidebar",
          position: "left",
          label: "Examples",
          docsPluginId: "examples",
        },
        {
          href: "https://github.com/slutske22/esrieact",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Tutorial",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "ArcGIS JS API",
              to: "https://developers.arcgis.com/javascript/latest/api-reference/",
            },
            {
              label: "GitHub",
              href: "https://github.com/slutske22/esrieact",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
