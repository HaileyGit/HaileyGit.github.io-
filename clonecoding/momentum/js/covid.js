const covid = document.querySelector("#covid span:first-child");
const covid2 = document.getElementById('cnt');
const city2 = document.querySelector("#covid span:last-child");
const APIKEY = "ViUSE6iXTBt%2FxfX20NnIkWuxEC2Fv3IWZlM%2FNZfedpK6n8eDBX%2F070cjkiFBhmzKHiXzqmaMSM2avHKyZ6Iimg%3D%3D";
const getFormatDate = (date) => {
    const year = date.getFullYear();             
    let month = (1 + date.getMonth());          
    month = month >= 10 ? month : '0' + month; 
    let day = date.getDate();               
    day = day >= 10 ? day : '0' + day;          
    return  `${year}${month}${day}`;      
}

const getCovid = () => {
  const today = new Date()
  const yesterday = ( d => new Date(d.setDate(d.getDate()-1)) )(new Date)

  const url = `http://openapi.data.go.kr/openapi/service/rest/Covid19/getCovid19InfStateJson?serviceKey=${APIKEY}&pageNo=1&numOfRows=10&startCreateDt=${getFormatDate(yesterday)}&endCreateDt=${getFormatDate(today)}`;
    const config = {mode:'cors',headers : {'Accept' : 'application/json'}}
  fetch(url,config)
    .then((response) => {
      console.log('re',response)
      response.json()})
    .then((data) => {
        // const todayCovid = data.response.body.items.item[0].decideCnt
        // const yesterdayCovid = data.response.body.items.item[1].decideCnt
        console.log(data.response)
    //     covid2.innerText = `
    //  ${Intl.NumberFormat().format(todayCovid-yesterdayCovid)}`
    }).catch((err)=>{console.log(err)});
}

getCovid();