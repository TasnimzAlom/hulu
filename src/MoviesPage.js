import React from 'react'
import Row from './HomePage/Row';
import requests from './requests'


const MoviesPage = () => {
    return (
        <div>
            	<Row title="Trending" fetchUrl={requests.fetchTrendingMovies} />

<Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies} />

<Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
   

<Row title="Adventure Movies" fetchUrl={requests.fetchAdventureMovies} />

<Row title="Animated Movies" fetchUrl={requests.fetchAnimationMovies} />


<Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />


<Row title="Crime Movies" fetchUrl={requests.fetchCrimeMovies} />

<Row title="Documentaries" fetchUrl={requests.fetchDocumentariesMovies} />

<Row title="Dramatic Movies" fetchUrl={requests.fetchDramaMovies} />


<Row title="Family Friendly Movies" fetchUrl={requests.fetchFamilyMovies} />
    
<Row title="Fantasy Movies" fetchUrl={requests.fetchFantasyMovies} />


<Row title="Historical Movies" fetchUrl={requests.fetchHistoryMovies} />


<Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />


<Row title="Mystery Movies" fetchUrl={requests.fetchMysteryMovies} />

<Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />

<Row title="SciFi Movies" fetchUrl={requests.fetchScienceFictionMovies} />

<Row title="Thriller Movies" fetchUrl={requests.fetchThrillerMovies} />
   

<Row title="War Movies" fetchUrl={requests.fetchWarMovies} />

<Row title="Western movies" fetchUrl={requests.fetchWesternMovies} />

            
        </div>
    )
}

export default MoviesPage
