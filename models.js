var PostModel = Backbone.Model.extend({
  urlRoot: 'http://tiy-fee-rest.herokuapp.com/collections/chrismovies',
  idAttribute: '_id',
  defaults: function () {
    return {
      poster: 'http://darkroom.shortlist.com/1000/0beb90b5f830d2e13f37978f42472ae7:e0fed69842826666fd4110a617ce6e91/apocalypse-now-1979'
    };
  },
  initialize: function () {
    console.log("model was created");
  }
});
