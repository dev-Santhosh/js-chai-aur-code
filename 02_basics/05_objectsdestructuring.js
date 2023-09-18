const course = {
    courseName : "Js in hindi",
    cost : "999",
    courseInstructor: "Hitesh Choudhary",
}
// console.log(course.courseInstructor);
// Another way to do is as follows
// const {courseInstructor} = course
// console.log(courseInstructor);
// If we want to change the key then the syntax is as follows
const {courseInstructor:instructor} = course
console.log(instructor);