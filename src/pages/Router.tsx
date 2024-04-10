import { Route, Routes } from "react-router-dom"

import { Main } from "./Main"
import { AboutSchool } from "./AboutSchool";

export const Router = () => {
  return (<Routes>
    <Route path="/" element={<Main />}></Route>
    <Route path="/aboutschool" element={<AboutSchool />}></Route>
  </Routes>)
}