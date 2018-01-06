import { debounce } from '@ember/runloop';
import Component from '@ember/component';

export default Component.extend({
  updateQuery() {
    this.get('onChange')(this.get('searchText'));
  },

  actions: {
    onChange() {
      debounce(this, this.updateQuery, 500);
    }
  }
});
