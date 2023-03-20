import React from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { ToastContainer, toast } from "react-toastify";
import { FaFilm, FaCopy } from "react-icons/fa";

import "react-toastify/dist/ReactToastify.css";
const Card = ({ movie }) => {
    const dateFormater = (date) => {
        let [yy, mm, dd] = date.split("-");
        return [dd, mm, yy].join("/");
    };

    const genreFinder = () => {
        let genreArray = [];
        for (let i = 0; i < movie.genre_ids.length; i++) {
            switch (movie.genre_ids[i]) {
                case 28:
                    genreArray.push(`Action`);
                    break;
                case 12:
                    genreArray.push(`Aventure`);
                    break;
                case 16:
                    genreArray.push(`Animation`);
                    break;
                case 35:
                    genreArray.push(`Comédie`);
                    break;
                case 80:
                    genreArray.push(`Policier`);
                    break;
                case 99:
                    genreArray.push(`Documentaire`);
                    break;
                case 18:
                    genreArray.push(`Drame`);
                    break;
                case 10751:
                    genreArray.push(`Famille`);
                    break;
                case 14:
                    genreArray.push(`Fantasy`);
                    break;
                case 36:
                    genreArray.push(`Histoire`);
                    break;
                case 27:
                    genreArray.push(`Horreur`);
                    break;
                case 10402:
                    genreArray.push(`Musique`);
                    break;
                case 9648:
                    genreArray.push(`Mystère`);
                    break;
                case 10749:
                    genreArray.push(`Romance`);
                    break;
                case 878:
                    genreArray.push(`Science-fiction`);
                    break;
                case 10770:
                    genreArray.push(`Téléfilm`);
                    break;
                case 53:
                    genreArray.push(`Thriller`);
                    break;
                case 10752:
                    genreArray.push(`Guerre`);
                    break;
                case 37:
                    genreArray.push(`Western`);
                    break;
                default:
                    break;
            }
        }
        return genreArray.map((genre) => <li key={genre}>{genre}</li>);
    };

    const addStorage = () => {
        //* on va dabord  checker si il y a quelquechose dans widow.lo..
        //si oui tu me donne widow.l..split pour le recuperer avec des , sinon rien
        let storedData = window.localStorage.movies
            ? window.localStorage.movies.split(",")
            : [];
        //le if permet de dire si jamais c'est un id de film que tu n'a pas deja alors tu peux le rajouter
        if (!storedData.includes(movie.id.toString())) {
            storedData.push(movie.id); //ajoute l'id du film dans storageData
            window.localStorage.movies = storedData;
        }
    };

    const deleteStorage = () => {
        let storedData = window.localStorage.movies.split(",");
        let newData = storedData.filter((id) => id != movie.id);

        window.localStorage.movies = newData;
    };
    const notify = () => {
        toast.info(
            <>
                <FaCopy />
                <span> {movie.title}</span>
            </>,
            {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }
        );
    };
    const notifyAdd = () => {
        toast.success(
            <>
                <FaFilm />
                <span> {movie.title} a été ajouté !</span>
            </>,
            {
                position: "bottom-center",
                autoClose: 2500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            }
        );
    };

    return (
        <div className="card">
            <img
                className="img-flou"
                src={
                    movie.poster_path
                        ? "https://image.tmdb.org/t/p/original/" +
                          movie.poster_path
                        : "./src/assets/img/cute-christmas-background-with-bokeh.jpg"
                }
                alt={`affiche ${movie.title}`}
            />
            <img
                className="img-clean"
                src={
                    movie.poster_path
                        ? "https://image.tmdb.org/t/p/original/" +
                          movie.poster_path
                        : "./src/assets/img/cute-christmas-background-with-bokeh.jpg"
                }
                alt={`affiche ${movie.title}`}
            />
            <CopyToClipboard text={movie.title} className="copy">
                <h2 onClick={notify}>
                    {movie.title.length > 45
                        ? `${movie.title.slice(0, 45)}...`
                        : movie.title}
                </h2>
            </CopyToClipboard>
            <ToastContainer
                position="bottom-center"
                autoClose={2500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="colored"
            />
            {movie.release_date ? (
                <h5>Sorti le : {dateFormater(movie.release_date)}</h5>
            ) : null}
            <h4>
                {movie.vote_average.toFixed(1)}/10 <span>⭐</span>
            </h4>

            <ul>
                {movie.genre_ids
                    ? genreFinder()
                    : movie.genres.map((genre) => (
                          <li key={genre}>{genre.name}</li>
                      ))}
            </ul>

            {movie.overview ? <h3>Synopsis</h3> : ""}
            <p>{movie.overview}</p>
            {movie.genre_ids ? (
                <div
                    className="btn"
                    onClick={() => {
                        addStorage();
                        notifyAdd();
                    }}>
                    Ajouter aux coups de noël
                </div>
            ) : (
                <div
                    className="btn"
                    onClick={() => {
                        deleteStorage();
                        window.location.reload();
                    }}>
                    Supprimer de la liste
                </div>
            )}
        </div>
    );
};

export default Card;
