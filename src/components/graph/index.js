import React from 'react'
import graph from '../../images/full graph.svg'
import translate from '../../translation-library/translate'
import './styles.css'

const Graph = ({ date }) => {
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;
    const TranslatedToday = translate.use().graphData.today
    const TranslatedYesterday = translate.use().graphData.yesterday
    const TranslatedHeader = translate.use().graphData.header
    return (
        <div>
            <div className="graph-heading">
                <h1>{TranslatedHeader}</h1>
                <div className="date">
                    <span className="numeric-date">{TranslatedToday},<strong>{today}</strong> </span>
                    <div className="toggle-date">
                        <div><span className="line"></span>{TranslatedToday}</div>
                        <div><span className="line"></span>{TranslatedYesterday}</div>
                    </div>
                </div>
            </div>
            <img class="chart" src={graph} alt=""></img>
        </div>

    )
}

export default Graph
