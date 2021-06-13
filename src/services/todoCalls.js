import http from "../utils/http";
import config from "../config";


const{ api } = config;
export async function createApiCalls(){
    const url = `${api.endpoints.todos}/`;
    const response = await http.get(url);
    return response;
};
export async function deleteApiCalls(id){
    const url = `${api.endpoints.todos}/${id}`;
    const response = await http.delete(url);
    return response;
};
export async function updateApiCalls(id, val){
    const url = `${api.endpoints.todos}/${id}`;
    const response = await http.patch(url, val);
    return response;
};
export async function saveTodoApiCalls(val){
    const url = `${api.endpoints.todos}/`;
    const response = await http.post(url, val);
    return response;
};