declare namespace Cypress {
  interface Chainable {
    /**
     * Mounts a component for component testing.
     * @param component The component to mount.
     * @param options Options for mounting the component.
     */
    mount(component: any, options?: any): Chainable<any>
  }
}
