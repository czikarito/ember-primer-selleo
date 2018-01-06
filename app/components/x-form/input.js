import Component from '@ember/component';
import { computed, get } from '@ember/object';

const Input = Component.extend({
  placeholder: computed('label', function(){
    return `Please enter ${get(this, 'label').toLowerCase()}`
  })
});

Input.reopenClass({
  positionalParams: ['value']
});

export default Input;
