import axios from "../axios/config"

export const CourseService = {
    getAllCourses: function() {
        return axios.get('/api/student/courses');
    },
    enrollCourse:function(courseName){
        return axios.post(`/api/student/course/${courseName}`);
    },
    dropCourse:function(courseName){
        return axios.delete(`/api/student/course/${courseName}`);
    },
    getStudentEnrolledCourse:function(){
        return axios.get(`/api/student/courses/`);
    }

}