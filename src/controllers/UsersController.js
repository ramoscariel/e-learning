import * as Users from "../models/users";

export const loginUser = async (email, password) => {
  const resp = await Users.login(email, password);
  localStorage.setItem("token", resp.access_token);
};

export const logoutUser = () => {
  localStorage.removeItem("token");
};

export const getInstructors = (setInstructors) => {
  Users.getInstructors().then((resp) => {
    const instructorsArray = resp.instructors;
    const instructors = [];
    instructorsArray.forEach((instructor) => {
        instructors.push({
          id: instructor[0],
          name: instructor[1],
          email: instructor[2]
        });
      });
      setInstructors(instructors);
  });
};