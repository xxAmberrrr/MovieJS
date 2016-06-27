import {View} from 'backbone';
import GenreDataRouter from '../routers/GenreDataRouter';

let GenreButtonsView = View.extend
({
	router: null,

	events:
	{
		'click a' : 'clickHandler'
	},

	initialize: function()
	{
		this.router = new GenreDataRouter();
	},

	clickHandler: function(e)
	{
		let t = e.currentTarget;

		let url = "genres/" + t.dataset['id'];
		this.router.navigate(url, {trigger: true, replace: true});
		console.log(url);
	}
});

export default GenreButtonsView;
