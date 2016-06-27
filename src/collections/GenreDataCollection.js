import {Collection} from 'backbone';
import GenreDataModel from '../models/GenreDataModel';

let GenreDataCollection = Collection.extend({
  model: GenreDataModel,
  url: 'http://amberhoogland.nl/api/genres.json'
});

export default GenreDataCollection;
