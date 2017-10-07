import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    archive(item) {
      Ember.set(item, 'archive', true);
    },
  }
});
