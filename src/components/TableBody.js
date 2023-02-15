const TableBody = ({ words, translation, mode }) => {

    const newWords = (wordObj, index) => {
        switch (mode) {
            case 2:
                return { word: wordObj.translate, translate: wordObj.word, partOfSpeech: wordObj.partOfSpeech }
            case 3:
                if (index % 2 === 0) {
                    return { word: wordObj.translate, translate: wordObj.word, partOfSpeech: wordObj.partOfSpeech }
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
                        <>
                            <td><em>{wordObj.partOfSpeech}</em></td>
                            <td>{newWords(wordObj, index).translate} </td>
                        </>
                    }
                </tr>
            ))}
        </tbody>
    );
}

export default TableBody;