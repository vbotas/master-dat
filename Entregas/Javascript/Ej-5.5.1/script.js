movie={
	title: 'The Godfather',
	'releaseInfo': {
		'year': 1972, 
		rating: 'PG'
		}
}

for (i in movie) {
	console.log(i);
	console.log(movie[i]);
	for (ii in i) {
		console.log(ii)
		console.log(movie[i][ii])
	}
}