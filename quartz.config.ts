import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Trabajo Público",
    pageTitleSuffix: "",
    enableSPA: true,
    enablePopovers: true,
    analytics: null,
    locale: "es-ES",
    baseUrl: "TU_USUARIO.github.io/obsidian-public-notes",
    ignorePatterns: [
      ".obsidian",
      "templates",
      "private",
      "drafts",
      "**/*.canvas",
      "**/*.excalidraw.md",
    ],
    defaultDateType: "modified",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "IBM Plex Sans",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fcfbf7",
          lightgray: "#e6e0d6",
          gray: "#b3ab9d",
          darkgray: "#5b564d",
          dark: "#1f1b18",
          secondary: "#0f6d5f",
          tertiary: "#b7791f",
          highlight: "rgba(15, 109, 95, 0.12)",
          textHighlight: "#ffe08a88",
        },
        darkMode: {
          light: "#161616",
          lightgray: "#2b2b2b",
          gray: "#7a7a7a",
          darkgray: "#d3d3d3",
          dark: "#f3f3f3",
          secondary: "#53b6a7",
          tertiary: "#e9b35b",
          highlight: "rgba(83, 182, 167, 0.16)",
          textHighlight: "#b98c0d88",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents({
        maxDepth: 3,
      }),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
        prettyLinks: true,
        openLinksInNewTab: false,
        lazyLoad: true,
      }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "katex",
      }),
    ],
    filters: [
      Plugin.ExplicitPublish(),
    ],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.Favicon(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
