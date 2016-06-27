import {View} from 'backbone';
import MovieDataRouter from '../routers/MovieDataRouter';

let MovieButtonsView = View.extend
({
	router: null,

	events:
	{
		'click a' : 'clickHandler'
	},

	initialize: function()
	{
		this.router = new MovieDataRouter();
	},

	clickHandler: function(e)
	{
		let t = e.currentTarget;

		let url = "movies/" + t.dataset['id'];
		this.router.navigate(url, {trigger: true, replace: true});
		console.log(url);
	}
});

export default MovieButtonsView;
