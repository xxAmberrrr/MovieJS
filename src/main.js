import _ from 'underscore';
import {Events} from 'backbone';
import MovieDataView from './views/MovieDataView';
import GenreDataView from './views/GenreDataView';
import ActorDataView from './views/ActorDataView';
import MovieDataCollection from './collections/MovieDataCollection';
import GenreDataCollection from './collections/GenreDataCollection';
import ActorDataCollection from './collections/ActorDataCollection';
import MovieButtonsView from './views/MovieButtonsView';
import GenreButtonsView from './views/GenreButtonsView';
import ActorButtonsView from './views/ActorButtonsView';

(function(){
  let setGlobalVariables = function(){
    window.App = {};
    App.events = _.clone(Events);
  };

  let init = function(){
    setGlobalVariables();

    loadButtons();

    Backbone.history.start({pushState: true, root: '/Jaar2/MovieJS'});
  };

  let loadButtons = function(){
    var movieDataCollection = new MovieDataCollection();
    var genreDataCollection = new GenreDataCollection();
    var actorDataCollection = new ActorDataCollection();

    new MovieButtonsView({el: '#movieButtons'});
    new GenreButtonsView({el: '#genreButtons'});
    new ActorButtonsView({el: '#actorButtons'});

    new MovieDataView({el: '#movies', collection: movieDataCollection});
    new GenreDataView({el: '#genres', collection: genreDataCollection});
    new ActorDataView({el: '#actors', collection: actorDataCollection});

    // new movieButtons({el: '#movieButtons'});
    //
    // new moviesView({el: '#movies', collection: movieDataCollection});
  }

  window.addEventListener('load', init);
})();
