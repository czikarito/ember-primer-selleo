import { set } from '@ember/object';
import Component from '@ember/component';

export default Component.extend({

  actions: {
    archive(item) {
      set(item, 'archive', true);
    },
  }
});
