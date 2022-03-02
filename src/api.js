import axios from 'axios';

const api = axios.create({
    baseURL: 'https://gist.githubusercontent.com/enzocassemiro/e8a324aff1592ffc296061fdf5f3930f/raw/441a5370da14abbd57ab0c1aafa1de66b3cbab5c/employees.json'
    });

export default api;