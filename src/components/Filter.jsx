import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Movie from "./Movie";
import axios from "axios";
import ToTop from "./ToTop";
const filter = () => {
    const [data, setData] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [sortGoodBad, setSortGoodBad] = useState(null);

    useEffect(() => {
        axios
            .get(
                inputValue
                    ? `https://api.themoviedb.org/3/search/movie?api_key=ed82f4c18f2964e75117c2dc65e2161d&query=${inputValue}&language=fr-FR`
                    : `https://api.themoviedb.org/3/movie/popular?api_key=40e2d1dcb3dcabab36d0db124b9473fb&language=fr-FR&page=1`
            )
            .then((res) => setData(res.data.results));
    }, [inputValue]);

    return (
        <div>
            <div className="all">
                <div className="filter-container">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                        }}>
                        <div className="search-container">
                            <input
                                type="text"
                                placeholder={"Entrez le film voulue"}
                                id="search"
                                onChange={(e) => {
                                    setInputValue(e.target.value);
                                }}
                            />
                            <input
                                type="submit"
                                value="Rechercher"
                                id="submit"
                            />
                        </div>
                    </form>
                    <div className="sort-container">
                        <ul className="sort">
                            <li>
                                <button
                                    className="btn-sort"
                                    id="goodToBad"
                                    onClick={() => setSortGoodBad("goodToBad")}>
                                    Meilleurs <span>&#10138;</span>
                                </button>
                            </li>
                            <li>
                                <button
                                    className="btn-sort"
                                    id="badToGood"
                                    onClick={() => setSortGoodBad("badToGood")}>
                                    Pires<span>&#10136;</span>
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="cardsContainer">
                {data
                    .slice(0, 21)
                    .sort((a, b) => {
                        if (sortGoodBad === "goodToBad") {
                            return b.vote_average - a.vote_average;
                        } else if (sortGoodBad === "badToGood") {
                            return a.vote_average - b.vote_average;
                        }
                    })
                    .map((movie) => (
                        <Movie movie={movie} key={movie.id} />
                    ))}
            </div>
            <ToTop />
        </div>
    );
};

export default filter;
