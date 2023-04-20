import api from "../api";

function getData(){
    const API_KEY = "AIzaSyBflNnPPWkh82yVIR6yDRIxMe_6c5LwqLM";
    const SHEETS_RANGE = "wdtt_members!A3:M35";

    return async (dispatch, getState) => {
        try{
            dispatch({type: "GET_DATA_REQUEST"});

            const membersApi = await api.get(`/1r-86TPWZ2aDclAprYytrEL7XFY8x_ha9n7Ke-AlC7RQ/values/${SHEETS_RANGE}?key=${API_KEY}`);
            
            const jsonData = JSON.stringify(membersApi.data); // 데이터를 문자열로 변환
            localStorage.setItem('sheetData', jsonData); // 데이터를 localStorage에 저장
            
            const sheetData = localStorage.getItem('sheetData'); // 저장된 데이터를 가져옴
            const parsedData = JSON.parse(sheetData); // 가져온 데이터를 객체로 변환

            const initData = parsedData.values.map(item => [{
                backNum: item[0],
                name: item[2],
                tier: item[1],
                games: item[10],
                goals: item[11],
                assists: item[12]
            }]);

            dispatch({type: "GET_DATA_SUCCESS", payload: {data: initData}});

        }catch(error){
            dispatch({type: "GET_DATA_FAILED"});
        }
        
    }
}

export const memberAction = {getData};