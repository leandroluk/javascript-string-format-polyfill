interface Context {
    view: any;
    parent: Context | undefined;

    /**
     * Initializes a new instance of the {@link Context `Context`} class.
     */
    new(view: any, parentContext?: Context);

    /**
     * Creates a new context using the given view with this context as the parent.
     *
     * @param view
     * The view to create the new context with.
     */
    push(view: any): Context;

    /**
     * Returns the value of the given name in this context, traversing up the context hierarchy if the value is absent in this context's view.
     *
     * @param name
     * The name to look up.
     */
    lookup(name: string): any;
}
type PartialLookupFn = (partialName: string) => string | undefined;

type PartialsOrLookupFn = Record<string, string> | PartialLookupFn;

type OpeningAndClosingTags = [string, string];

type RenderOptions = {
    escape?: EscapeFunction | undefined;
    tags?: OpeningAndClosingTags | undefined;
}

interface String {
  format(template: string): string
  format(template: string, props: {
    view: any | Context,
    partials?: PartialsOrLookupFn,
    config?: OpeningAndClosingTags | RenderOptions
  }): string
  format(
    template: string,
    view: any | Context,
    partials?: PartialsOrLookupFn,
    config?: OpeningAndClosingTags | RenderOptions,
  ): string
}