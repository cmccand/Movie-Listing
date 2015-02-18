// Model View

var PostView = Backbone.View.extend({
  template: _.template($('#postTmpl').html()),
  tagName: 'article',
  initialize: function () {
    // console.log(this.el);
    /*this.on('change:title', function(model){
      var name = model.get('title');
      alert('Changed title to ' + title);
    });*/
  },
  events: {
    "click .deletePost": "removePost"
  },
  render: function () {
    // console.log(this.el);
    var markup = this.template(this.model.toJSON());
    this.$el.html(markup);

    return this;
  },
  removePost: function () {
    this.$el.remove();
    this.model.destroy();

  }
});

// Collection View

var AppView = Backbone.View.extend({
  el: $('section'),
  initialize: function () {
    console.log('app view initialized!');
    this.addAllPosts();
  },
  events: {
    "click .showCreate": "showCreate",
    "submit #createPost": "createPost"
  },
  createPost: function (e) {
    e.preventDefault();
    var newPost = {
      title: $('#createPost').find('input[name="newTitle"]').val(),
      poster: $('#createPost').find('textarea[name="newPoster"]').val(),
      director: $('#createPost').find('input[name="newDirector"]').val()
    };

    var newModelPost = new PostModel(newPost);
    newModelPost.save();
    console.log(this.collection.length);
    this.collection.add(newModelPost);
    console.log(this.collection.length);
    // this.addOnePost(newModelPost); // alternative method
    this.addAllPosts();
    this.$el.find('#createPost').find('input').val('');
    this.showCreate();


  },
  showCreate: function () {
    // e.preventDefault();
    this.$el.find('#createPost').toggleClass('show');
  },
  addOnePost: function (post) {

    var postView = new PostView({model: post});
    this.$el.append(postView.render().el);
  },
  addAllPosts: function () {
    _.each(this.collection.models, this.addOnePost, this)
  },
  alertMe: function () {
    alert("hi everyone!");
  },

});
