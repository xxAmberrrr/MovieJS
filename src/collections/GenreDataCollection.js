import {Collection} from 'backbone';
import GenreDataModel from '../models/GenreDataModel';

let GenreDataCollection = Collection.extend({
  model: GenreDataModel,
  url: 'http://amberhoogland.nl/api/genres.json' /** The url to the genres data from my API. */
});

export default GenreDataCollection;
