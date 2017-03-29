export class PluginRegistry {
  constructor () {
    // create storage for plugins
    // create object observer
  }
  register (Module, name, load = 'interactive') {
    // tell object observer to watch for data-[name]
    // load reflects either:
    //   one of the states of document.readyState as a string (loading, interactive, complete)
    //   or a function with an arbitrary condition that must return true before the plugin loads
  }
  load (plugin) {
    // plugin contains:
    //   el
    //   Module
    //   name
    //   load
    //
    // called from the object observer when
    // the load argument tells it to
  }
}

// use a singleton so Modules can see each other
let plugins = new PluginRegistry()
export default plugins
