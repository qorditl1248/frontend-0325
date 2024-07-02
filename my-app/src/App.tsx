import React from "react";
import logo from "./logo.svg";
import "./App.css";

import { Route, Routes } from "react-router-dom";

// 폴더명까지만 명시하는 경우 해당 폴더의
// , index라는 이름의 파일을 가져옴
import NavigationBar from "./components/NavigationBar";
import Header from "./components/Header";


import Index0621 from './views/0621';
import Index0624 from './views/0624';
import Index0625 from './views/0625';
import Index0626 from './views/0626';
import Index0627 from './views/0627';
import Index0628 from './views/0628';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      {/* 
        npm run start
          기본 경로 - localhost:3000
          
          Route의 path속성으로 지정된 경로를 element가 렌더링

          npm run start의 첫 번째 렌더링 페이지의 경우: 경로를 /로 전달
          (a태그의 href="#"와 유사)
      */}
      <h1>Recat 수업 자료</h1>
      <Header/>
      <NavigationBar/>

      {/* Routes 태그 */}
      <Routes>
        <Route path="/0621" element={<Index0621 />} />
        <Route path="/0624" element={<Index0624 />} />
        <Route path="/0625" element={<Index0625 />} />
        <Route path="/0626" element={<Index0626 />}/>
        <Route path="/0627" element={<Index0627 />}/>
        <Route path="/0628" element={<Index0628 />}/>
      </Routes>

      <Footer/>  
    </>
  )
}

export default App;