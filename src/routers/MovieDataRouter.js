import {Router} from 'backbone';

let MovieRouter = Router.extend({
  routes:{
    'movies/:id': 'showMovie'
  },

  showMovie: function(id){
    App.events.trigger('reloadMoviePage', {id:id});
  }
});

export default MovieRouter;
