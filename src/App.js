import './App.css';
import './index.css';
import React from "react";
import {Link, Routes, Route, BrowserRouter} from "react-router-dom";
import {Nav} from "react-bootstrap";
import Logo from "./img/Logo_1.svg";


import Home from "./Pages/Home";
import About from "./Pages/About";
import Cases from "./Pages/Cases";
import Timeline from "./Pages/Timeline";
import Prizes from "./Pages/Prizes";
import Partners from "./Pages/Partners";


function App() {
  return (
      <div className="App">
          <header className="MainHeader" >
              <Nav class='main-navigation'>
                  <a className={'main-header-logo'} href={"/"}>
                      <img src={Logo} alt="Логотип Уртиси"/>
                  </a>
                  <ul className="site-navigation">
                      <li className="header-item">
                          <a href ="/about">О хакатоне</a>
                      </li>
                      <li className="header-item">
                          <a href="/cases">Кейсы</a>
                      </li>
                      <li className="header-item">
                          <a href="/timeline">Таймлайн</a>
                      </li>
                      <li className="header-item">
                          <a href="/prizes">Призы</a>
                      </li>
                      <li className="header-item">
                          <a href="/partners">Партнёры</a>
                      </li>
                  </ul>
                  <ul className="user-navigation">
                      <li className={"button-chat"}>
                          <a className={"button"} href="https://t.me/+bARieX8rdjwyNDVi">Чат хакатона</a>
                      </li>
                  </ul>
              </Nav>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
                  <Route path="/about" element={<About />}></Route>
                  <Route path="/cases" element={<Cases />}></Route>
                  <Route path="/timeline" element={<Timeline />}></Route>
                  <Route path="/prizes" element={<Prizes />}></Route>
                  <Route path="/partners" element={<Partners />}></Route>
              </Routes>
          </header>
      </div>
  )
}

export default App