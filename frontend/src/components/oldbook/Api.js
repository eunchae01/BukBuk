import React from "react";
import axios from "axios";


async function Api(){
    try{
        const response = await axios.get('http://api.kcisa.kr/API_CNV_045/request?serviceKey=5e8d50c4b451c038625e52b3d4837682&numOfRows=10&pageNo=1')
        console.log(response.data.response.body.items.item) // 전국 서점 리스트
    }catch(e){
        console.error(e);
    }
}

export default Api;

