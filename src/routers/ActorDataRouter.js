import {Router} from 'backbone';

let ActorRouter = Router.extend({
  routes:{
    'actors/:id': 'showActor'
  },

  showActor: function(id){
    App.events.trigger('reloadActorPage', {id:id});
  }
});

export default ActorRouter;
