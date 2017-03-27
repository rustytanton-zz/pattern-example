import attribute from './decorators/attribute'
import required from './decorators/required'
import type from './decorators/type'
import { Settings } from './Settings'

// Use the settings class to
// 1) optionally do error checking against config
// 2) choose which properties to expose as element attributes
//
// If you specified this element:
// <div data-my-plugin data-prop1="2"></div>
//
// The plugin would load as expected, and only expose prop2
// as an attribute because that's what you told it to do:
//
// <div data-my-plugin data-prop2="a default string"></div>
//
// If you loaded the element any of these ways:
// <div data-my-plugin></div>
// <div data-my-plugin prop1="some string"></div>
// <div data-my-plugin prop2="some string"></div>
//
// The JS would throw an error.
//
// If this is too much overhead for what you're doing, you
// can just work directly with el.dataset or manage some other
// way
class Module1Settings extends Settings {
  @required @type('number') prop1
  @attribute @type('string') prop2 = 'a default string'
  @type('json') prop3
}

export class Module1 {
  constructor (el) {
    this.el = el
    this.settings = new Module1Settings(el)
    // do other stuff
  }
}
