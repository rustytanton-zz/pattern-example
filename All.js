import plugins from './PluginRegistry'
import { Module1 } from './Module1'
import { Module2 } from './Module2'
import { Module3 } from './Module3'

// watch for elements with data-bsp-plugin="module-1",
// init Module1 on or after document.readyState === 'interactive'
// when found, which is default behavior. You could pass
// 'interactive' as a third argument, but it would be redundant.
// @see https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
plugins.register(Module1, 'module-1')

// watch for elements with data-bsp-plugin="module-2",
// init Module2 on or after document.readyState === 'complete'
plugins.register(Module2, 'module-2', 'complete')

// watch for elements with data-bsp-plugin="module-3",
// init Module3 when an arbitrary condition is met
plugins.register(Module3, 'module-3', (checkDuration) => {
  // This custom condition will be called in an interval
  // until the function returns true or it times out
  // after a globally-configured duration
  //
  // checkDuration tells you how long the registry has
  // been waiting for this function to return true
  //
  // a generic error message for plugins failing to meet
  // a custom condition after a specified amount of time
  // could optionally be configured globally
  if (checkDuration >= 10000) {
    throw new Error(`Failed to load Module3, Facebook API not found after ${checkDuration} seconds`)
  }

  // make sure the Facebook API is available and document
  // is fully loaded before initing the plugin
  return window.FB && (document.readyState === 'complete')
})
