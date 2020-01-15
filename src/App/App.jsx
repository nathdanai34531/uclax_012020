import React from 'react';
import './App.scss';
import Header from './Header/Header.jsx';
import Nav from './Nav/Nav.jsx';
import Main from './Main/Main.jsx';
import Footer from './Footer/Footer.jsx';


const App = () => {

    return (
        <div className="wrapper">
            <Header />
            <Nav />
            <Main />
            <Footer />

            <main className="Main">Main</main>
            <footer className="Footer">Footer</footer>
        </div>
    )
}

export default App;

