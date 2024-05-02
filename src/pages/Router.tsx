import { Route, Routes } from "react-router-dom";

import { Main } from "./Main";
import { AboutSchool } from "./AboutSchool";
import { Course } from "./Course";
import { Mentors } from "./Mentors";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/aboutschool" element={<AboutSchool />}></Route>
      <Route path="/course" element={<Course />}></Route>
      <Route path="/mentors/:mentor" element={<Mentors />}></Route>
    </Routes>
  );
};
