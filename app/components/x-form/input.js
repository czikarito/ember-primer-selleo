import Component from '@ember/component';
import { computed, get } from '@ember/object';

const Input = Component.extend({
  inputType: 'string',
  inputWidth: 100,
  inputClassess: computed('inputWidth', function(){
    let base = 'input-reset ba b--black-20 pa2 mb2 db';
    let inputWidth = get(this, 'inputWidth');

    if (inputWidth) {
      base += ` w-${inputWidth}`;
    }
    return base;
  }),

  placeholder: computed('label', function(){
    return `Please enter ${get(this, 'label').toLowerCase()}`
  })
});

Input.reopenClass({
  positionalParams: ['value']
});

export default Input;
