export const post = (data,callback)=>{
    fetch(url, {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
            "Authorization":"auth token"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: JSON.stringify({
            "email":email,
            "password":password
        })
    }).then(function(response){
        response.json().then(function(data){
            console.log(data);
        })
    })
}