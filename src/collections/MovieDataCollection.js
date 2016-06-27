import {Collection} from 'backbone';
import MovieDataModel from '../models/MovieDataModel';

let MovieDataCollection = Collection.extend({
  model: MovieDataModel,
  url: 'http://amberhoogland.nl/api/movies.json' /** The url to the movies data from my API. */
});

export default MovieDataCollection;
