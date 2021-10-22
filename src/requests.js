 const API_KEY = "e2f00f43612c7b61ed7f6a0e4f7c9bca";

 const requests = {


    fetchTrendingMovies: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchAdventureMovies: `/discover/movie?api_key=${API_KEY}&with_genres=12`,
	fetchAnimationMovies: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchCrimeMovies: `/discover/movie?api_key=${API_KEY}&with_genres=80`,
	fetchDocumentariesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchDramaMovies: `/discover/movie?api_key=${API_KEY}&with_genres=18`,
	fetchFamilyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10751`,
	fetchFantasyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=14`,
	fetchHistoryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=36`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchMusicMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10402`,
	fetchMysteryMovies: `/discover/movie?api_key=${API_KEY}&with_genres=9648`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchScienceFictionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=878`,
	fetchWarMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10752`,
	fetchThrillerMovies: `/discover/movie?api_key=${API_KEY}&with_genres=53`,
	fetchWesternMovies: `/discover/movie?api_key=${API_KEY}&with_genres=37`,

	
	fetchAdventureTv: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
	
	fetchActionTv: `/discover/tv?api_key=${API_KEY}&with_genres=10759`,
	fetchAnimationTv: `/discover/tv?api_key=${API_KEY}&with_genres=16`,
	fetchComedyTv: `/discover/tv?api_key=${API_KEY}&with_genres=35`,
	fetchCrimeTv: `/discover/tv?api_key=${API_KEY}&with_genres=80`,
	fetchDocumentariesTv: `/discover/tv?api_key=${API_KEY}&with_genres=99`,
	fetchDramaTv: `/discover/tv?api_key=${API_KEY}&with_genres=18`,
	fetchFamilyTv: `/discover/tv?api_key=${API_KEY}&with_genres=10751`,
	fetchFantasyTv: `/discover/tv?api_key=${API_KEY}&with_genres=14`,
	fetchHistoryTv: `/discover/tv?api_key=${API_KEY}&with_genres=36`,
	fetchHorrorTv: `/discover/tv?api_key=${API_KEY}&with_genres=27`,
	fetchMusicTv: `/discover/tv?api_key=${API_KEY}&with_genres=10402`,
	fetchMysteryTv: `/discover/tv?api_key=${API_KEY}&with_genres=9648`,
	fetchRomanceTv: `/discover/tv?api_key=${API_KEY}&with_genres=10749`,
	fetchScienceFictionTv: `/discover/tv?api_key=${API_KEY}&with_genres=10765`,
	fetchWarTv: `/discover/tv?api_key=${API_KEY}&with_genres=10768`,
	fetchWesternTv: `/discover/tv?api_key=${API_KEY}&with_genres=37`,

	fetchThrillerTv: `/discover/tv?api_key=${API_KEY}&with_genres=53`,
	fetchKidsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10762`,
	fetchNewsTv: `/discover/tv?api_key=${API_KEY}&with_genres=10763`,
	fetchSoapTv: `/discover/tv?api_key=${API_KEY}&with_genres=10766`,
	fetchRealityTv: `/discover/tv?api_key=${API_KEY}&with_genres=10764`,

	

};

export default requests;

