import axios from "axios";
import cookie from "react-cookies";
import {TOKEN_COOKIE_NAME} from "../constant";


const token = cookie.load(TOKEN_COOKIE_NAME);
export default axios.create(
    {

        baseURL:"http://localhost:8080",
        //baseURL:"http://course-enrollment-alb-1491139060.us-east-2.elb.amazonaws.com:8080",
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
)