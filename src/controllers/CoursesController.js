import * as Courses from "../models/courses";

export const getCourses = (setCourses) => {
  Courses.getAllCourses().then((resp) => {
    const courseArray = resp.courses;
    const courses = [];
    courseArray.forEach((course) => {
      courses.push({
        id_course: course[0],
        id_teacher: course[1],
        name: course[2],
        description: course[3],
        start_date: formatDate(course[4]),
        end_date: formatDate(course[5]),
      });
    });
    setCourses(courses);
  });
};

export const getCourse = (id, setCourse) => {
  Courses.getCourse(id).then((resp) => {
    const courseArray = resp.course;
    const [id_course, id_teacher, name, description, start_date, end_date] =
      courseArray;
    const course = {
      id_course: id_course,
      id_teacher: id_teacher,
      name: name,
      description: description,
      start_date: formatDate(start_date),
      end_date: formatDate(end_date),
    };
    console.log(course);
    setCourse(course);
  });
};

export const saveCourse = (id, course, onSuccess) => {
  console.log(course.id_teacher, typeof(course.id_teacher))
  if(course.id_teacher===''){
    course.id_teacher = null
  }
  course.start_date = formatToMySQLDateTime(course.start_date);
  course.end_date = formatToMySQLDateTime(course.end_date);

  try {
    if (id) {
      Courses.updateCourse(id, course).then(() => onSuccess());
    } else {
      Courses.createCourse(course).then(() => onSuccess());
    }
  } catch (error) {
    console.error("Error saving course:", error);
  }
};

export const deleteCourse = (id, onSuccess) => {
  try {
    Courses.deleteCourse(id).then(() => onSuccess());
  } catch (error) {
    console.error("Error deleting course:", error);
  }
};

function formatDate(dateString) {
  const date = new Date(dateString); // Convert the string to a Date object
  const formattedDate = date.toISOString().split("T")[0];
  return formattedDate;
}

const formatToMySQLDateTime = (date) => {
  const d = new Date(date);
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(
    2,
    "0"
  )}-${String(d.getDate()).padStart(2, "0")} ${String(d.getHours()).padStart(
    2,
    "0"
  )}:${String(d.getMinutes()).padStart(2, "0")}:${String(
    d.getSeconds()
  ).padStart(2, "0")}`;
};
