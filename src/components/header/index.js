import React from 'react';
import './styles.css'
import photo from '../../images/photo.png';
import { connect } from 'react-redux';
import { toggleShowSideBar } from '../../redux/dashboard/actions'
import LanguageSelector from '../language-selector';
import translate from '../../translation-library/translate'

const Header = ({ toggleShowSideBar, currentUser }) => {
    const { currentUser: { firstname } } = currentUser
    const welcomeMsg = translate.use().welcomeMsg.welcomeMsg({ name: firstname })
    return (
        <div className="header">

            <ul className="header-menu">

                <LanguageSelector />
                <li className="header-item"><img src={photo} alt="image" />  {welcomeMsg} !</li>
                <div className="menu-icon" id="menu-icon" onClick={toggleShowSideBar}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </ul>


        </div>
    )
}
const mapDispatchToProps = dispatch => ({
    toggleShowSideBar: () => (dispatch(toggleShowSideBar()))
})
const mapStateToProps = ({ currentUser }) => ({
    currentUser: currentUser
})
export default connect(mapStateToProps, mapDispatchToProps)(Header)
