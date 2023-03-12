const checkValidJson = (text) =>{
    if (/^[\],:{}\s]*$/.test(text.replace(/\\["\\\/bfnrtu]/g, '@').
    replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').
    replace(/(?:^|:|,)(?:\s*\[)+/g, ''))) {
        return true;
}else{
    return false;
}
}

export const checkParams = (formData, jsonText,paramData,headerData,setErrorMessage) =>{
    if(!formData.url){
        setErrorMessage("Request url is missing");
        return false;
    }
    if(!checkValidJson(jsonText)){
        setErrorMessage("Text is not valid json");
        return false;
    }

    return true;  

}

export const getHeaderAndParams =(objArr) =>{
  console.log(objArr);
let obj= {};
objArr.forEach(data=>{
    if(data.hasOwnProperty('check') && data.check){
        obj ={...obj, [data.key]:data.value};
    }
});
return obj;
}