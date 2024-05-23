import { dataCourses, IdataCourse } from "../../../data/dataCourses";
import type { IdataUnit } from "../../../data/dataUnits";

export const filterCourseLevel = (dataArr: any, checkedItems: string[]) => {
  let newDataCourses: any[] = [];
  if (checkedItems.includes('Data science')) {
    newDataCourses = newDataCourses.concat(dataArr.filter((course: IdataCourse | IdataUnit) =>
      (course.course === 'Data science')));
  }
  if (checkedItems.includes('Design')) {
    newDataCourses = newDataCourses.concat(dataArr.filter((course: IdataCourse | IdataUnit) => (course.course === 'Design')));
  }
  if (checkedItems.includes('Programming')) {
    newDataCourses = newDataCourses.concat(dataArr.filter((course: IdataCourse | IdataUnit) => (course.course === 'Programming')));
  }
  let newDataCourses2: any[] = [];
  if (checkedItems.includes('Beginner')) {
    newDataCourses2 = newDataCourses2.concat(newDataCourses.filter((course) => (course.level.includes('Beginner'))));
  }
  if (checkedItems.includes('Intermediate')) {
    newDataCourses2 = newDataCourses2.concat(newDataCourses.filter((course) => (course.level.includes('Intermediate'))));
  }
  return newDataCourses2;
}

export const getTypeCourses = (dataArr: any, courseType: string) => {
  return dataArr.filter((course: IdataCourse | IdataUnit) => course.course === courseType);
}