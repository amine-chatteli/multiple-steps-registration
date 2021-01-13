import React from 'react';
import './styles.css';
import translate from '../../translation-library/translate'


const LanguageSelector = () => {
    const changeLanguage = (e) => {
        let lang = e.target.value
        let fallback = lang === "en" ? "ja" : "en"
        translate.setOptions({
            language: lang,
            fallback: fallback,
        })
    }
    return (
        <select onChange={(e) => changeLanguage(e)}>
            <option value="en">EN</option>
            <option value="ja">JP</option>
        </select>
    )
}

export default LanguageSelector
