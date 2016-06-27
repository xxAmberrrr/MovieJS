import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

let GenreDataView = View.extend({
  initialize: function(){
    App.events.on('reloadGenrePage', this.loadGenres, this);
  },

  loadGenres: function(genre){
    //console.log("Hallo");

    this.collection.fetch({
      success:(collection) => {this.genresLoaded(collection)},
      error:(collection, response) => {this.loadError(collection, response)},
      data: {
        id: genre.id,
      }
    });
  },

  genresLoaded: function(collection){
    _.templateSettings.variable = 'obj';

    var template = _.template(
      $('script#template-genres').html()
    );

    $('#dataDisplay').html(
      template(collection)
    );
  },

  loadError: function(collection, error){
    console.log(error);
  }
});

export default GenreDataView;
