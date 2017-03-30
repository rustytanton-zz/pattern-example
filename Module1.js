import attribute from './decorators/attribute'
import required from './decorators/required'
import type from './decorators/type'
import { Settings } from './Settings'

// Use the settings class to
// 1) optionally do error checking against config
// 2) choose which properties to expose as element attributes
//
// If you specified this element:
// <div class="MyPlugin" data-prop1="2"></div>
//
// The plugin would load as expected, and only expose prop2
// as an attribute because that's what you told it to do:
//
// <div class="MyPlugin" data-prop2="a default string"></div>
//
// If you loaded the element any of these ways:
// <div class="MyPlugin"></div>
// <div class="MyPlugin" data-prop1="some string"></div>
// <div class="MyPlugin" data-prop2="some string"></div>
//
// The JS would throw an error.
//
// If this is too much overhead for what you're doing, you
// can just work directly with el.dataset or manage some other
// way
export class Module1Settings extends Settings {
  @required @type('number') prop1
  @attribute @type('string') prop2 = 'a default string'
  @type('boolean') prop3 = false
}

export class Module1 {
  constructor (el) {
    this.el = el
    this.settings = new Module1Settings(el)
    // do other stuff
  }
}
