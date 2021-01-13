import React from 'react';
import { connect } from 'react-redux'
import logo from '../../images/logo.svg'
import translate from "../../translation-library/translate"


import './styles.css'
const SideBar = ({ showSideBar, sideBarData }) => {


    function displayTranslatedName(name, id) {
        const sideBarItems = translate.use().sideBarItems
        return sideBarItems[id]({ name: name })
    }


    const className = showSideBar ? "side-bar" : "side-bar hide"
    return (
        <div>
            <div id="sidebar" className={className}>
                <div className="menu">
                    <div className="logo-img">
                        <img src={logo} />
                        <h1>Dashboard Kit</h1>
                    </div>
                    <ul className="list-menu">
                        {
                            sideBarData.map(item => {
                                let name = item.itemName
                                let id = item.id
                                return (<li className="menu-item"><img src={item.itemIcon} alt /><span>{displayTranslatedName(name, id)}</span></li>)
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = ({ dashboard: { showSideBar } }) => ({
    showSideBar: showSideBar
})

export default connect(mapStateToProps)(SideBar)
