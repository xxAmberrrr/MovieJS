import {Collection} from 'backbone';
import ActorDataModel from '../models/ActorDataModel';

let ActorDataCollection = Collection.extend({
  model: ActorDataModel,
  url: 'http://amberhoogland.nl/api/actors.json' /** The url to the actors data from my API. */
});

export default ActorDataCollection;
