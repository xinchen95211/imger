//登陆封装
const login_support = (params) => axios.post("/api/login", params);
const register_support = (params) => axios.post("/api/register",params);
//photo封装

//video封装
const play_video_to_id = (params) => axios.get("https://vernelproxy.dynv6.net/proxy/frp-air.top:31540/video/" + params);