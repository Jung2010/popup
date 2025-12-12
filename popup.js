// type : alert,confirm,prompt
const popup = (function(){
    let count = 0;
    let closedCount = 0;
    return async function(type,title="Title",text="Text",components={},bodyStyle={}){
        console.log("Start",count);

        const comps = components??{};

        comps.main??={};
        comps.main.mainColor??="lightgray";
        comps.main.subColor??="gray";

        comps.confirmBtn??={};
        comps.confirmBtn.text??="OK";

        const $ = v=>document.querySelector(v);
        if(!(["alert","confirm","prompt"].includes(type)))
            throw Error("The pop-up type is invalid.\nOnly notification, confirmation, and prompt types are available.");

        document.body.innerHTML += `
        <div id="popup${++count}">
            <h1>${title}</h1>
            <p>${text}</p>
            <button id="confirmBtn${count}">
                ${comps.confirmBtn.text}
            </button>
        </div>
        `;

        const applyCss = (ele,style)=>{ // ele : dom, style : obj
            Object.entries(style).forEach(v=>{
                const [key,val] = v;
                ele.style[key] = val;
            });
        };

        const $pu = $("#popup"+count);
        const $confBtn = $("#confirmBtn"+count);
        applyCss($pu,{
            padding: "100px",
            background: "none",
            backdropFilter: "blur(50px)",
            position: "fixed",
            textAlign: "center",
            bottom: "25%",
            top: "25%",
            left: "0px",
            right: "0px"
        });
        applyCss($pu,bodyStyle);
        applyCss($confBtn,{
            background: comps.main.mainColor,
            border: "none",
            padding: "10px",
            fontSize: "20px",
            paddingLeft: "20px",
            paddingRight: "20px",
            minWidth: "200px",
            marginTop: "50px",
            borderRadius: "10px",
            cursor: "pointer"
        });

        const close = function(){
            $pu.remove();
        };

        $confBtn.onclick = ()=>{
            close();
        };

        console.log("End",count);
        return false;
    }
})();