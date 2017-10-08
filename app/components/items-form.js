import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list measure center ba pa2'],
  db: Ember.inject.service(),
  categories: Ember.computed.alias('db.categories'),

  _resetForm() {
    this.setProperties({
      name: null,
      category: null,
      imageUrl: null,
      since: null,
    });
  },

  actions: {
    addItem() {
      let item = this.getProperties('name', 'category', 'imageUrl', 'since');
      
      this.get('db').add('items', item)
      this._resetForm();
    },
  },
});
