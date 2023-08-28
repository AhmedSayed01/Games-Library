import axios from "axios";

const APIs = {
    getGeneral : (pageNumber) => axios.get(`${process.env.REACT_APP_API_GAMES_URL}?page=${pageNumber}&${process.env.REACT_APP_API_KEY}`),
    getPsGeneral : (pageNumber) => axios.get(`${process.env.REACT_APP_API_GAMES_URL}?page=${pageNumber}&${process.env.REACT_APP_API_KEY}`),
}
export default APIs