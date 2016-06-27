import {Collection} from 'backbone';
import ActorDataModel from '../models/ActorDataModel';

let ActorDataCollection = Collection.extend({
  model: ActorDataModel,
  url: 'http://amberhoogland.nl/api/actors.json'
});

export default ActorDataCollection;
