export class PluginRegistry {
  constructor () {
    // create storage for plugins
    // create object observer
  }
  register (Module, name, namespace = 'bsp', load = 'immediately') {
    // tell object observer to watch for data-[namespace]-[name]
    // load determines when to load, other possible values might be
    //   DOMReady, documentReady, windowReady
  }
  load (plugin) {
    // plugin contains:
    //   el
    //   Module
    //   name
    //   namespace
    //   load config
    // called from the object observer when an element
    // is inserted into the DOM
    //
  }
}

// use a singleton so Modules can see each other
let plugins = new PluginRegistry()
export default plugins
