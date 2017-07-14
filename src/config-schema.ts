export const configSchema = {
  "fileExtension": {
    "type": "string",
    "default": ".md, .mmark, .markdown",
    "description": "You may need restart Atom after making changes here.",
    "order": 0
  },
  "singlePreview": {
    "title": "Open Only One Preview",
    "type": "boolean",
    "default": true,
    "order": 5
  },
  "openPreviewPaneAutomatically": {
    "title": "Open preview pane automatically when opening a markdown file",
    "type": "boolean",
    "default": true,
    "order": 10
  },
  "automaticallyShowPreviewOfMarkdownBeingEdited": {
    "title": "Automatically show preview of markdown being edited",
    "type": "boolean",
    "default": true,
    "order": 11
  },
  "closePreviewAutomatically": {
    "title": "Automatically close preview when closing a markdown file",
    "description": "This option only works if `Open Only One Preview` is unchecked.",
    "type": "boolean",
    "default": true,
    "order": 12
  },
  "breakOnSingleNewLine": {
    "type": "boolean",
    "default": true,
    "description": "In Markdown, a single newline character doesn't cause a line break in the generated HTML. In GitHub Flavored Markdown, that is not true. Enable this config option to insert line breaks in rendered HTML for single newlines in Markdown source.",
    "order": 15
  },
  "enableTypographer": {
    "type": "boolean",
    "default": false,
    "description": "Enable smartypants and other sweet transforms.",
    "order": 16
  },
  "enableZenMode": {
    "title": "Zen Mode",
    "type": "boolean",
    "default": false,
    "description": "Distraction free writing.",
    "order": 17
  },
  "codeBlockTheme": {
    "description": "Code block theme.",
    "default": "default.css",
    "type": "string",
    "enum": [
      "atom-dark.css",
      "coy.css",
      "darcula.css",
      "dark.css",
      "default.css",
      "funky.css",
      "github.css",
      "hopscotch.css",
      "monokai.css",
      "okaidia.css",
      "onedark.css",
      "pojoaque.css",
      "solarized-light.css",
      "twilight.css",
      "vs.css",
      "xonokai.css"
    ],
    "order": 20
  },
  "previewTheme": {
    "description": "Preview Theme",
    "default": "github-light.css",
    "type": "string",
    "enum": [
      "github-light.css",
      "github-dark.css",
      "gothic.css",
      "newsprint.css",
      "night.css",
      "medium.css",
      "none.css"
    ],
    "order": 21
  },
  "revealjsTheme": {
    "description": "RevealJS Presentation Theme",
    "default": "white.css",
    "type": "string",
    "enum": [
      "beige.css",
      "black.css",
      "blood.css",
      "league.css",
      "moon.css",
      "night.css",
      "serif.css",
      "simple.css",
      "sky.css",
      "solarized.css",
      "white.css",
      "none.css"
    ],
    "order": 22
  },
  "mermaidTheme": {
    "description": "Mermaid theme, you can choose one from [\"mermaid.css\", \"mermaid.dark.css\", \"mermaid.forest.css\"]",
    "default": "mermaid.css",
    "type": "string",
    "enum": [
      "mermaid.css",
      "mermaid.dark.css",
      "mermaid.forest.css"
    ],
    "order": 23
  },
  "protocolsWhiteList": {
    "title": "Protocols Whitelist",
    "type": "string",
    "default": "http, https, atom, file",
    "description": "Accepted protocols followed by `://` for links.",
    "order": 25
  },
  "mathRenderingOption": {
    "type": "string",
    "default": "KaTeX",
    "description": "Choose the Math expression rendering method here. You can also disable math rendering if you want by choosing 'None'.",
    "enum": [
      "KaTeX",
      "MathJax",
      "None"
    ],
    "order": 30
  },
  "mathInlineDelimiters": {
    "title": "Inline Indicator",
    "type": "string",
    "default": "[[\"$\", \"$\"], [\"\\\\(\", \"\\\\)\"]]",
    "description": "Use customized Math expression inline indicator. By default it is '[[\"$\", \"$\"]]', which means content within '**$**' and '**$**' will be rendered in inline mode. You can also define multiple indicators separated by comma. For example, '[[\"$\", \"$\"], [\"\\\\\\\\(\", \"\\\\\\\\)\"]]' will render inline math expression within '**$**' and '**$**', '**\\\\(**' and '**\\\\)**'.",
    "order": 31
  },
  "mathBlockDelimiters": {
    "title": "Block Indicator",
    "type": "string",
    "default": "[[\"$$\", \"$$\"], [\"\\\\[\", \"\\\\]\"]]",
    "description": "Use customized Math expression block indicator. By default it is [[\"$$\", \"$$\"]].",
    "order": 32
  },
  "usePandocParser": {
    "title": "Use Pandoc Parser",
    "type": "boolean",
    "default": false,
    "description": "Enable this option will render markdown by pandoc instead of remarkable. Live update will be disabled automatically if this option is enabled.",
    "order": 35
  },
  "pandocPath": {
    "title": "Pandoc Options: Path",
    "type": "string",
    "default": "pandoc",
    "description": "Please specify the correct path to your pandoc executable",
    "order": 36
  },
  "pandocArguments": {
    "title": "Pandoc Options: Commandline Arguments",
    "type": "string",
    "default": "",
    "description": "Comma separated pandoc arguments e.g. `--smart, --filter=/bin/exe`. Please use long argument names.",
    "order": 37
  },
  "pandocMarkdownFlavor": {
    "type": "string",
    "default": "markdown-raw_tex+tex_math_single_backslash",
    "title": "Pandoc Options: Markdown Flavor",
    "description": "Enter the pandoc markdown flavor you want",
    "order": 38
  },
  "phantomPath": {
    "title": "PhantomJS Options: Path",
    "type": "string",
    "default": "phantomjs",
    "description": "Please specify the correct path to your phantomjs executable",
    "order": 45
  },
  "enableWikiLinkSyntax": {
    "title": "Enable Wiki Link syntax",
    "type": "boolean",
    "default": true,
    "description": "Enable Wiki Link syntax support. More information can be found at https://help.github.com/articles/adding-links-to-wikis/",
    "order": 50
  },
  "wikiLinkFileExtension": {
    "title": "Wiki Link file extension",
    "type": "string",
    "default": ".md",
    "description": "By default, [[test]] will direct to file path `test.md`.",
    "order": 51
  },
  "liveUpdate": {
    "type": "boolean",
    "default": true,
    "description": "Re-render the preview as the contents of the source changes, without requiring the source buffer to be saved. If disabled, the preview is re-rendered only when the buffer is saved to disk. Disable live update will also disable scroll sync.",
    "order": 55
  },
  "frontMatterRenderingOption": {
    "title": "Front Matter rendering option",
    "type": "string",
    "description": "You can choose how to render front matter here. 'none' option will hide front matter.",
    "default": "table",
    "enum": [
      "table",
      "code block",
      "none"
    ],
    "order": 60
  },
  "scrollSync": {
    "type": "boolean",
    "default": true,
    "description": "2 way scroll sync. Sync both markdown source and markdown preview when scrolling.",
    "order": 65
  },
  "printBackground": {
    "title": "Print Background when generating pdf",
    "type": "boolean",
    "default": true,
    "description": "Whether to print background for PDF file export or not. If set to `false`, then `github-light` preview theme will be used.",
    "order": 70
  },
  "imageFolderPath": {
    "title": "Image save folder path",
    "description": "When using Image Helper to copy images, by default images will be copied to root image folder path '/assets'",
    "type": "string",
    "default": "/assets",
    "order": 75
  },
  "imageUploader": {
    "title": "Image Uploader",
    "description": "you can choose different image uploader to upload image.",
    "type": "string",
    "default": "imgur",
    "enum": [
      "imgur",
      "sm.ms"
    ],
    "order": 76
  }
}
