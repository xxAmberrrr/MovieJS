import {Router} from 'backbone';

let GenreRouter = Router.extend({
  routes:{
    'genres/:id': 'showGenre'
  },

  showGenre: function(id){
    App.events.trigger('reloadGenrePage', {id:id});
  }
});

export default GenreRouter;
