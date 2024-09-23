import React from 'react';
import { NavLink } from 'react-router-dom';

const MovieHeader = () => {
    return (
        <div className="flex justify-between items-center shadow rounded-md bg-white p-2 pl-3 my-2 dark:bg-zinc-800 ">
            <h2 className="text-zinc-600 dark:text-gray-200">IMDB Movie Database</h2>
            <div className="flex items-center gap-2">
                <NavLink
                    to="/moviesDatabaseList"
                    className="myButton  bg-blue-600 hover:bg-blue-500 dark:bg-blue-200 dark:hover:bg-blue-400 dark:text-slate-800 p-1 rounded"
                >
                    Tüm filmler
                </NavLink>
                <NavLink
                    to="/moviesDatabase/add"
                    className="myButton bg-green-600 hover:bg-green-500 dark:bg-green-200 dark:hover:bg-green-400 dark:text-slate-800 p-1 rounded"
                >
                    <i className="material-icons text-sm">&#xE147;</i>
                    <span>Yeni film ekle</span>
                </NavLink>
            </div>
        </div>
    );
};

export default MovieHeader;
