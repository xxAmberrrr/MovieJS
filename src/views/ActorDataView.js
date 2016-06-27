import {View} from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

let ActorDataView = View.extend({
  initialize: function(){
    App.events.on('reloadActorPage', this.loadActors, this);
  },

  loadActors: function(actor){
    //console.log("Hallo");

    this.collection.fetch({
      success:(collection) => {this.actorsLoaded(collection)},
      error:(collection, response) => {this.loadError(collection, response)},
      data: {
        id: actor.id,
      }
    });
  },

  actorsLoaded: function(collection){
    _.templateSettings.variable = 'obj';

    var template = _.template(
      $('script#template-actors').html()
    );

    $('#dataDisplay').html(
      template(collection)
    );
  },

  loadError: function(collection, error){
    console.log(error);
  }
});

export default ActorDataView;
