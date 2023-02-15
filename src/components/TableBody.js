const TableBody = ({ words, translation, mode }) => {

    const newWords = (wordObj, index) => {
        switch (mode) {
            case 2:
                return { word: wordObj.translate, translate: wordObj.word }
            case 3:
                if (index % 2 === 0) {
                    return { word: wordObj.translate, translate: wordObj.word }
                }
                else {
                    return wordObj
                }
            default:
                return wordObj
        }
    }

    return (
        <tbody>
            {words.map((wordObj, index) => (
                <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{newWords(wordObj, index).word}</td>
                    {!translation &&
                        <td>{newWords(wordObj, index).translate} </td>
                    }
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;