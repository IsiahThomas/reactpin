import axios from 'axios'

export default function ajax(url,data={},type='GET') {
  if(type==='GET'){
    let dataStr = '';
    Object.keys(data).forEach(key=>{
      dataStr+=key+"="+data[key]+'&';
    })
    if(dataStr!==''){
      url = url+'?'+dataStr.substring(0,dataStr.lastIndexOf('&'));
    }
    return axios.get(url);
  }else{
    return axios.post(url,data);
  }
}
