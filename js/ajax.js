class Ajax {
    GET(url, handler){
        let xhr = this.CreateRequestAndConfigure("GET", url, true);
        xhr.onload = function(){
            xhr.status === 200 ? handler(xhr.responseText):xhr.statusText;
        }
        xhr.send();
    }

    GETJson(url, callback){
        let xhr = this.CreateRequestAndConfigure("GET", url, true);
        let jsonArray = [];
        xhr.onload = function(){
            xhr.status === 200 ? jsonArray = JSON.parse(xhr.responseText) : xhr.statusText;
            callback(jsonArray);
        }
        xhr.send();
    }

    POST(url, data){
        let xhr = this.CreateRequestAndConfigure("POST", url, true);
        xhr.setRequestHeader('Content-type', 'application/json; charset=utf-8');
        xhr.send(data);
    }

    CreateRequestAndConfigure(method, url, isAsync){
        let xhr = new XMLHttpRequest();
        xhr.open(method, url, isAsync);
        return xhr;
    }
}

function readData(){
    let ajax = new Ajax();
    return ajax.GET('./Data/data.json', (result)=>{alert(result)});
}

function sendData(id, description){
    let json = JSON.stringify({id:id, description:description});
    let ajax = new Ajax();
    ajax.POST("./Data/data.json", json);
}

function getJson(callback){
    let ajax = new Ajax();
    ajax.GETJson("./Data/data.json", callback);
}