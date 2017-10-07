import Ember from 'ember';

export default Ember.Component.extend({
  updateQuery() {
    this.get('onChange')(this.get('searchText'));
  },

  actions: {
    onChange() {
      Ember.run.debounce(this, this.updateQuery, 500);
    }
  }
});
