import axios from "axios"

let baseUrl = "";
let token = ["srawungToken"]

const getHeaders = (listDefine: string[]): any => {
    let result: any = {}
    for(let o of listDefine){
        result[o] = localStorage.getItem(o)
    }
    return result
} 

const doPost: any = async(path: string, data: any) => {
    let result: any = null
    try {
        result  = await axios.post(baseUrl+path, data, {headers: getHeaders(token)})
    } catch (error) {
        result = error
    }
    return result;
}