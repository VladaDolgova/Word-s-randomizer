import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';

const Table = () => {

    const { state } = useLocation();
    const [words, setWords] = useState([]);

    const shuffle = (array) => {
        array.sort(() => Math.random() - 0.5);
    }

    useEffect(() => {
        axios
            .get("https://vladadolgova.github.io/randomwords/db/words.json")
            .then((res) => { shuffle(res.data); setWords(res.data.slice(0, state.count)) })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="d-flex flex-wrap justify-content-center position-absolute w-100 h-100 align-items-center align-content-center">
            <table className="table text-center" style={{ width: '600px' }}>
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Word</th>
                        {!state.translation &&
                            <th scope="col">Translation</th>
                        }
                    </tr>
                </thead>
                <tbody>
                    {words.map((word, index) => (
                        <tr key={index}>
                            <th scope="row">{index + 1}</th>
                            <td>{word.word}</td>
                            {!state.translation &&
                                <td>{word.translate} </td>
                            }
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Table;