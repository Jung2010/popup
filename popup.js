// type : alert,confirm,prompt
const popup = (function(){
    let count = 0;
    return async function(type,title,text){
        const $ = v=>document.querySelector(v);
        if(!(["alert","confirm","prompt"].includes(type)))
            throw Error("The pop-up type is invalid.\nOnly notification, confirmation, and prompt types are available.");

        document.body.innerHTML += `
        <popup id="popup${++count}">
        </popup>
        `;
        return false;
    }
})();