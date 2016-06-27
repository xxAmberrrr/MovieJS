import {Collection} from 'backbone';
import MovieDataModel from '../models/MovieDataModel';

let MovieDataCollection = Collection.extend({
  model: MovieDataModel,
  url: 'http://amberhoogland.nl/api/movies.json'
});

export default MovieDataCollection;
