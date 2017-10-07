import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | item element', function() {
  setupComponentTest('item-element', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#item-element}}
    //     template content
    //   {{/item-element}}
    // `);

    this.render(hbs`{{item-element}}`);
    expect(this.$()).to.have.length(1);
  });
});
