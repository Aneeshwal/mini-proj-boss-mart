import axios from "axios";
import { Component } from 'react';

const EDUCONNECT_URL = `http://localhost:8080/boss`

class Service extends Component {

    getAllBoss(){
        return axios.get(`${EDUCONNECT_URL}/list`);
    }
    saveBoss(boss){
        return axios.post(`${EDUCONNECT_URL}/save`,boss)
    }
    getAllImage(){
        return axios.get(`${EDUCONNECT_URL}/limage`);
    }
    saveImage(image){
        return axios.post(`${EDUCONNECT_URL}/simage`,image)
    }
    uploadImage(image){
        return axios.post(`${EDUCONNECT_URL}/upload`,image)
    }
    deleteBoss(id){
        return axios.delete(`${EDUCONNECT_URL}`+'/'+id)
    }
    getBossById(id){
        return axios.get(`${EDUCONNECT_URL}`+'/'+id)
    }
    updateBoss(id,boss){
        return axios.put(`${EDUCONNECT_URL}`+'/'+id,boss)
    }
}
export default new Service();