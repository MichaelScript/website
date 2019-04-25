export const post = (data,callback)=>{
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
            body: JSON.stringify({
                "email":email,
                "password":password
            })
        }).then(function(response){
            response.json().then(function(data){
                callback(data);
            })
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
            body: JSON.stringify({
                "email":email,
                "password":password
            })
        }).then(function(response){
            response.json().then(function(data){
                callback(data);
            })
        })
    }
}