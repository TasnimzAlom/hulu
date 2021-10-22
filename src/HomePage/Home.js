import React from 'react'

import Row from './Row'
import requests from '../requests'


const Home = () => {


   


    return (
    
        <div>
        
      
			<Row title="Trending" fetchUrl={requests.fetchTrendingMovies} />

			<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />

			<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
               

            <Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />
                <Row title="Adventure and Action Tv Shows " fetchUrl={requests.fetchAdventureTv}/>

            <Row title="Animated Movies" fetchUrl={requests.fetchAnimationMovies} />
                <Row title="Animated Tv Shows" fetchUrl={requests.fetchAnimationTv} />


			<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
                <Row title="Comedy Tv" fetchUrl={requests.fetchComedyTv} />


            <Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />
                <Row title="Crime Tv Shows" fetchUrl={requests.fetchCrimeTv} />

			<Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />
                <Row title="Docu-series " fetchUrl={requests.fetchDocumentariesTv} />

            <Row title="Dramatic Movies" fetchUrl={requests.fetchDramaMovies} />
                <Row title="Dramatic Tv Shows" fetchUrl={requests.fetchDramaTv} />


            <Row title="Family Friendly Movies" fetchUrl={requests.fetchFamilyMovies} />
                <Row title="Family Friendly Tv Shows" fetchUrl={requests.fetchFamilyTv} />
                
            <Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />
                <Row title="Fantasy Tv Shows" fetchUrl={requests.fetchFantasyTv} />


            <Row title="Historical Movies" fetchUrl={requests.fetchHistoryMovies} />
                <Row title="Historical Tv Shows" fetchUrl={requests.fetchHistoryTv} />


			<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
                <Row title="Horror Tv Shows" fetchUrl={requests.fetchHorrorTv} />


            <Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />
                <Row title="Mystery Tv Shows " fetchUrl={requests.fetchMysteryTv} />

			<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
                <Row title="Romantic Tv Shows " fetchUrl={requests.fetchRomanceTv} />

            <Row title="SciFi Movies" fetchUrl={requests.fetchScienceFictionMovies} />
                <Row title="SciFi and Fantasy Tv Shows" fetchUrl={requests.fetchScienceFictionTv} />

            <Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
               

            <Row title="War Movies" fetchUrl={requests.fetchWarMovies} />
                <Row title="War Tv Shows " fetchUrl={requests.fetchWarTv} />

            <Row title="Western movies" fetchUrl={requests.fetchWesternMovies} />
            <Row title="Western Tv Shows " fetchUrl={requests.fetchWesternTv} />

            <Row title="Kids Tv Shows " fetchUrl={requests.fetchKidsTv} />
            <Row title="News" fetchUrl={requests.fetchNewsTv} />
            <Row title="Soaps" fetchUrl={requests.fetchSoapTv} />
            <Row title="Reality Tv " fetchUrl={requests.fetchRealityTv} />




        </div>

        
    )
}

export default Home
