import React, {useEffect, useState}from "react";
import {CourseService} from "../service/CourseService";
import CourseTable from "../components/CourseTable";

export default function  EnrolledCourses() {

    const [courses, setCourse] = useState([]);
    useEffect(()=>{
        CourseService.getStudentEnrolledCourse().then(response =>{
                setCourse(response.data);
            }).catch(error =>{
                console.log(error);
        })
        },[])

        return (
            <div>
                <CourseTable courses={courses}
                             buttonText ={"Drop"}
                             buttonColor={"error"}
                             handleButtonClick={dropCourses}
                />
            </div>
        )

}
function dropCourses(courseName){
    CourseService.dropCourse(courseName)
        .then(response =>{
            alert(`Congrats!${courseName} enrolled successfully!`);
            window.location.reload();
        }).catch(error =>{
        alert(`Sorry,${courseName} enrollment failed due to ${error}`);
    })

}