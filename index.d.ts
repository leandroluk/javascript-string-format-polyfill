interface String {
  format(
    template: string,
    view: any | import('mustache').Context,
    partials?: import('mustache').PartialsOrLookupFn,
    tagsOrOptions?: import('mustache').OpeningAndClosingTags | RenderOptions,
  ): string
}