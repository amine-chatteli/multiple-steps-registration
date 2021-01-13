import React from 'react';
import translate from '../../translation-library/translate'

import './styles.css'

const InfoBanner = () => {
    const RegistrationPageTranslation = translate.use().bannerText

    return (
        <div className="info-banner">
            <p>{RegistrationPageTranslation.bannerText}</p>
        </div>
    )
}

export default InfoBanner
