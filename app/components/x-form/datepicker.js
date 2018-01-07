import Date from '../x-form/date';
import layout from 'track-items/templates/components/x-form/input';
import $ from 'jquery';
import { get, set } from '@ember/object';

export default Date.extend({
  layout,
  inputType: 'text',

  didInsertElement() {
    this._super(...arguments);

    set(this, 'pikaday', new Pikaday({
      field: $('input', this.element)[0],
      format: 'YYYY-MM-DD'
    }));
    this.element
  },

  willDestroyElement() {
    this._super(...arguments);
    get(this, 'pikaday').destroy();
  }
});
