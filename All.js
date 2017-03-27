import plugins from './PluginRegistry'
import { Module1 } from './Module1'
import { Module2 } from './Module2'
import { Module3 } from './Module3'

// watch for elements with data-bsp-module-1,
// init Module1 immediately when found
plugins.register(Module1, 'module-1')

// watch for elements with data-bsp-core-module-2,
// init Module2 immediately when element found
plugins.register(Module2, 'module-2', 'bsp-core')

// watch for elements with data-bsp-core-module-3,
// init Module3 on DOMReady when found
plugins.register(Module3, 'module-3', 'bsp-core', 'DOMReady')
