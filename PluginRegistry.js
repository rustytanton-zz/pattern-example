export class PluginRegistry {
  constructor () {
    // create storage for plugins
    // create object observer
  }
  register (Module, selector, load = 'interactive') {
    // tell object observer to watch for a selector
    // load reflects either:
    //   one of the states of document.readyState as a string (loading, interactive, complete)
    //   a function with an arbitrary condition that must return truthy before the plugin loads
  }
  load (plugin) {
    // plugin contains:
    //   el
    //   Module
    //   selector
    //   load
    //
    // called on modules found in the DOM on first page load
    // and from the object observer when new nodes are inserted into the DOM
  }
}

// use a singleton so the site shares a single registry
let plugins = new PluginRegistry()
export default plugins
