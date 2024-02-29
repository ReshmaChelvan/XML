const xmlRequest = (method, url, que) => {
    const xml = new XMLHttpRequest();
    xml.open(method, url);

    xml.responseType = "json"
  
    xml.onload = () => {
            const result = xml.response; 
            const lengthOfArray = xml.response.length;
            if(que === 1) {
                for(let i = 0; i < lengthOfArray; i++) {
                    console.log(result[i].flags)
                }
            } else {
                for(let i = 0; i < lengthOfArray; i++) {
                    console.log(`${result[i].name.official}----${result[i].region}---${result[i].subregion}---${result[i].population}`)
                }
            }
        }

    xml.send();
}

//First Question Answer 
// xmlRequest("GET", "https://restcountries.com/v3.1/all", 1);

//Second Question Answer 
// xmlRequest("GET", "https://restcountries.com/v3.1/all", 2);

3.//JSON:
let obj1 ={name:"person1",age: 5};
let obj2 ={age:5,name:"person1"};
let Json;
if(Object.keys(obj1).length == Object.keys(obj2).length){
    for(let key in obj1){
        if(obj1[key]== obj2[key]){
            Json = true;
        }
        else{
            Json = false;
            break;
        }
    }
} 
// console.log(Json)
