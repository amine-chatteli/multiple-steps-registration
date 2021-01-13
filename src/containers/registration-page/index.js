import React from 'react';
import InfoBanner from '../../components/info-banner';
import Steps from '../../components/steps';
import './styles.css';
import Form from '../../components/form/index';
import Navbar from '../../components/navbar';
import SubNavbar from '../../components/sub-navbar';


const RegistrationPage = () => (
    <div className='registration-page'>
        <Navbar />
        <SubNavbar currentPageName="registration" />
        <InfoBanner />
        <Steps />
        <Form />
    </div>
)
export default RegistrationPage
