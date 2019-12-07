import '../components/common/template/dependencies'
import React from 'react';
import { HashRouter } from 'react-router-dom'
import Header from '../components/common/template/Header';
import Footer from '../components/common/template/Footer';
import SideBar from '../components/common/template/SideBar';
// import Messages from '../components/common/messages/messages'

import Routes from './routes';

export default props => (
    <HashRouter >
        <div className='wrapper'>
            <Header />
            <SideBar />
            <Routes />
            <Footer />
            {/* <Messages />  */}
        </div>
    </HashRouter >
)