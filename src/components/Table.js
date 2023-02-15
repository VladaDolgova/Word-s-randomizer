import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import TableBody from './TableBody';

const Table = () => {
    const { state } = useLocation();
    const [words, setWords] = useState([]);

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    };

    useEffect(() => {
        axios
            .get("https://vladadolgova.github.io/randomwords/db/words.json")
            .then((res) => { shuffle(res.data); setWords(res.data.slice(0, state.number)) })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className={"d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center"}>
            <table className="table text-center" style={{ width: '600px' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Word</th>
                        {!state.translation &&
                            <>
                                <th scope="col">Part of speech</th>
                                <th scope="col">Translation</th>
                            </>
                        }
                    </tr>
                </thead>
                <TableBody
                    mode={state.mode}
                    words={words}
                    translation={state.translation}
                />
            </table>
        </div>
    );
}

export default Table;