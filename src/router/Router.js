import React from 'react';
import { Routes, Route} from "react-router-dom";
import All from "./../components/All";
import Manpower from "./../components/Manpower";
import Mobile from "./../components/Mobile";
import Layout from './../components/Layout';
import Design from "./../components/Design";


const Router = () => {
    return (
    <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<All />} />
          <Route path="manpower" element={<Manpower />} />
          <Route path="mobile" element={<Mobile />} />
          <Route path="design" element={<Design />} />
        </Route>
    </Routes> 
    );
};

const RouterUser = () => {
    return Router()
}

export default RouterUser;