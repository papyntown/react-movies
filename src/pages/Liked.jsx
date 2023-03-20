import React, { useState } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import axios from "axios";
import Movie from "../components/Movie";

const Liked = () => {
    const [listData, setListData] = useState([]);
    useEffect(() => {
        let moviesId = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : [];
        for (let i = 0; i < moviesId.length; i++) {
            axios
                .get(
                    `https://api.themoviedb.org/3/movie/${moviesId[i]}?api_key=ed82f4c18f2964e75117c2dc65e2161d&language=fr-FR`
                )
                .then((res) =>
                    setListData((listData) => [...listData, res.data])
                ); //je luis dis de mettre dans data sans remplacer
        }
    }, []);
    return (
        <div className="user-list-page">
            <Header />
            <h2>Coup de Noël</h2>
            <div className="result">
                <div className="cardsContainer">
                    {listData.length > 0 ? (
                        listData.map((movie) => (
                            <Movie movie={movie} key={movie.id} />
                        ))
                    ) : (
                        <h2>Vous n'avez rien mis en coup de Noël</h2>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Liked;
