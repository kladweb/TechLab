import { Route, Routes } from "react-router-dom";

import { Main } from "./Main";
import { AboutSchool } from "./AboutSchool";
import { Course } from "./Course";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/aboutschool" element={<AboutSchool />}></Route>
      <Route path="/course" element={<Course />}></Route>
    </Routes>
  );
};
