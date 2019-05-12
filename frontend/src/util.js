export const post = (url,data,callback)=>{
    /* Get token from localStorage*/
    let token = window.localStorage.getItem("token");
    if(token){
        fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                "Authorization":token
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data)
        }).then(function(response){
            response.json().then(callback);
        })
    } else{
        fetch(url, {
            method: "POST",
            mode: "cors",
            cache: "no-cache",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: JSON.stringify(data)
        }).then(function(response){
            response.json().then(callback);
        })
    }
}