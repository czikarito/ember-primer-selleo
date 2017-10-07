import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describe('Integration | Component | items list', function() {
  setupComponentTest('items-list', {
    integration: true
  });

  it('renders', function() {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });
    // Template block usage:
    // this.render(hbs`
    //   {{#items-list}}
    //     template content
    //   {{/items-list}}
    // `);

    this.render(hbs`{{items-list}}`);
    expect(this.$()).to.have.length(1);
  });
});
