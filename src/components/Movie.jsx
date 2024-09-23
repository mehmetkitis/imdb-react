import React, { useEffect, useState } from 'react';
import { Link, useParams, useHistory } from 'react-router-dom';

import axios from 'axios';

const Movie = (props) => {
    const { deleteMovie, addToFavorites } = props;

    const [movie, setMovie] = useState('');

    const { id } = useParams();
    const history = useHistory();

    useEffect(() => {
        axios
            .get(`https://nextgen-project.onrender.com/api/s11d3/movies/${id}`)
            .then((res) => {
                setMovie(res.data);
            })
            .catch((err) => {
                console.log(err.response);
            });
    }, [id]);

    return (
        <div className="bg-white rounded-md shadow flex-1 dark:bg-slate-800 dark:text-white">
            <div className="p-5 pb-3 border-b border-zinc-200">
                <h4 className="text-xl font-bold">{movie.title} Detayları</h4>
            </div>
            <div className="px-5 py-3">
                <div className="py-1 flex">
                    <div className="view-label mr-1 font-bold">İsim:</div>
                    <div className="flex-1">{movie.title}</div>
                </div>
                <div className="py-1 flex">
                    <div className="view-label mr-1 font-bold">Yönetmen:</div>
                    <div className="flex-1">{movie.director}</div>
                </div>
                <div className="py-1 flex">
                    <div className="view-label mr-1 font-bold">Tür:</div>
                    <div className="flex-1">{movie.genre}</div>
                </div>
                <div className="py-1 flex">
                    <div className="view-label mr-1 font-bold">Metascore:</div>
                    <div className="flex-1">{movie.metascore}</div>
                </div>
                <div className="py-1 flex">
                    <div className="view-label mr-1 font-bold">Açıklama:</div>
                    <p className="flex-1">{movie.description}</p>
                </div>
            </div>

            <div className="px-5 py-3 border-t border-zinc-200 flex justify-end gap-2">
                <button
                    className="myButton bg-blue-600 hover:bg-blue-500 dark:bg-blue-200 dark:hover:bg-blue-400 dark:text-slate-800 p-1 rounded"
                    onClick={() => addToFavorites(movie)}
                >
                    Favorilere ekle
                </button>
                <button
                    className="myButton bg-red-600 hover:bg-red-500 dark:bg-red-200 dark:hover:bg-red-400 dark:text-slate-800 p-1 rounded"
                    onClick={() => deleteMovie(id)}
                >
                    Sil
                </button>

            </div>
        </div>
    );
};

export default Movie;
