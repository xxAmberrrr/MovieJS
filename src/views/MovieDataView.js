import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

let MovieDataView = View.extend({
  initialize: function(){
    App.events.on('reloadMoviePage', this.loadMovies, this);
  },

  loadMovies: function(movie){
    //console.log("Hallo");

    this.collection.fetch({
      success:(collection) => {this.moviesLoaded(collection)},
      error:(collection, response) => {this.loadError(collection, response)},
      data: {
        id: movie.id,
      }
    });
  },

  moviesLoaded: function(collection){
    _.templateSettings.variable = 'obj';

    var template = _.template(
      $('script#template-movies').html()
    );

    $('#dataDisplay').html(
      template(collection)
    );
  },

  loadError: function(collection, error){
    console.log(error);
  }
});

export default MovieDataView;
