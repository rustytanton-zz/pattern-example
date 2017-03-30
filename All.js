import plugins from './PluginRegistry'
import { Module1 } from './Module1'
import { Module2 } from './Module2'
import { Module3 } from './Module3'

// watch for elements with class="Module1"
// init Module1 on or after document.readyState === 'interactive'
// when found, which is default behavior. You could pass
// 'interactive' as a third argument, but it would be redundant.
// @see https://developer.mozilla.org/en-US/docs/Web/API/Document/readyState
plugins.register(Module1, '.Module1')

// watch for elements with class="Module2",
// init Module2 on or after document.readyState === 'complete'
plugins.register(Module2, '.Module2', 'complete')

// watch for elements with class="Module3",
// init Module3 when an arbitrary condition is met
plugins.register(Module3, '.Module3', () => {
  // This custom condition will be called repeatedly
  // until the function returns truthy or it times out
  // after a globally-configured duration

  // make sure login credentials for some API that are specified
  // globally on the server side are available before loading the module
  return window.someApiGlobalCredentials
})
