movie = {
    title: 'The Godfather',
    releaseinfo: {
        year: 1972,
        rating: 'PG'
    }
}

for ( i in movie) {
    console.log(i);
    console.log(movie[i]);
    for (j in movie.releaseinfo) {
        console.log[j];
        console.log(movie[i][j]);
	}
}