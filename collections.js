// Post Collection
var PostCollection = Backbone.Collection.extend({
  url: 'http://tiy-fee-rest.herokuapp.com/collections/chrismovies',
  model: PostModel
});
