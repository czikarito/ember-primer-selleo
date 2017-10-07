import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['list measure center ba pa2'],

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
      console.log(item);
      this.get('onSubmit')(item);
      this._resetForm();
    },
  },
});
