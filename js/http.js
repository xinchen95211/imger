//登陆封装
const login_support = (params) => axios.post("/api/login", params);
const register_support = (params) => axios.post("/api/register",params);
//photo封装

//video封装
const play_video_to_id = (params) => axios.get("/video/" + params);