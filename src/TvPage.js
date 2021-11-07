import React from 'react';
import Row from './HomePage/Row';
import LoggedFooter from './LoggedFooter';
import requests from './requests'


const TvPage = (openModal) => {
    return (
        <div>
            <Row openModal={openModal} title="Adventure and Action Tv Shows " fetchUrl={requests.fetchAdventureTv}/>

            <Row title="Animated Tv Shows" fetchUrl={requests.fetchAnimationTv} />

            <Row title="Comedy Tv" fetchUrl={requests.fetchComedyTv} />

            <Row title="Crime Tv Shows" fetchUrl={requests.fetchCrimeTv} />

            <Row title="Docu-series " fetchUrl={requests.fetchDocumentariesTv} />

            <Row title="Dramatic Tv Shows" fetchUrl={requests.fetchDramaTv} />

            <Row title="Family Friendly Tv Shows" fetchUrl={requests.fetchFamilyTv} />
            
            <Row title="Fantasy Tv Shows" fetchUrl={requests.fetchFantasyTv} />

            <Row title="Historical Tv Shows" fetchUrl={requests.fetchHistoryTv} />

            <Row title="Horror Tv Shows" fetchUrl={requests.fetchHorrorTv} />

            <Row title="Mystery Tv Shows " fetchUrl={requests.fetchMysteryTv} />

            <Row title="Romantic Tv Shows " fetchUrl={requests.fetchRomanceTv} />

            <Row title="SciFi and Fantasy Tv Shows" fetchUrl={requests.fetchScienceFictionTv} />

            <Row title="War Tv Shows " fetchUrl={requests.fetchWarTv} />

            <Row title="Western Tv Shows " fetchUrl={requests.fetchWesternTv} />

            <Row title="Kids Tv Shows " fetchUrl={requests.fetchKidsTv} />

            <Row title="News" fetchUrl={requests.fetchNewsTv} />

            <Row title="Soaps" fetchUrl={requests.fetchSoapTv} />

            <Row title="Reality Tv " fetchUrl={requests.fetchRealityTv} />
            <LoggedFooter/>
        </div>
    )
}

export default TvPage
