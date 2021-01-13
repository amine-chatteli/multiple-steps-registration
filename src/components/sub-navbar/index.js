import React from 'react';
import LanguageSelector from '../language-selector/index'
import translate from '../../translation-library/translate'
import './styles.css';

const SubNavbar = ({ currentPageName }) => {
    console.log(currentPageName);
    const TranslatedPageName = translate.use().pageName[currentPageName]
    console.log(TranslatedPageName);
    return (
        <div className="sub-navbar">
            <h3>{TranslatedPageName}</h3>
            <LanguageSelector />
        </div>
    )
}

export default SubNavbar
