import axios from "axios";

const SendEmail = (result)=>axios.post('/api/send',result);

export  {SendEmail};
