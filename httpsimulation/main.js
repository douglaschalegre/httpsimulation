function loadJSON(json, callback) {   
    var xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', json, true);
    xobj.onreadystatechange = function () {
        if (xobj.readyState == 4 && xobj.status == "200") {
            callback(xobj.responseText);
        }
    };
    xobj.send(null);
}
var hqsJSON;
loadJSON('json/hq.json', function(response) {
    // Parse JSON string into object
      var actual_JSON = JSON.parse(response);
      hqsJSON = actual_JSON;
   });

var moviesJSON;
loadJSON('json/movies.json', function(response) {
    // Parse JSON string into object
      var actual_JSON = JSON.parse(response);
      moviesJSON = actual_JSON;
   });

var booksJSON;
loadJSON('json/books.json', function(response) {
     // Parse JSON string into object
       var actual_JSON = JSON.parse(response);
       booksJSON = actual_JSON;
    });

var d1;
var req;
var beenExecuted = false;

document.getElementById('btnStart').onclick = function(){
    if(!beenExecuted){
        d1 = new Data(hqsJSON,moviesJSON,booksJSON);
        let div = document.getElementById('started');
        let select = document.createElement('select');
        select.id = 'options';
        div.appendChild(select);

        let opcoes = ['hqs','movies','books'];
        for (var i = 0; i < opcoes.length; i++) {
            var option = document.createElement("option");
            option.value = i;
            option.text = opcoes[i];
            select.appendChild(option);
        }
        btn = document.createElement('button');
        let txt = document.createTextNode("Obter resposta");
        btn.appendChild(txt);
        btn.id = 'btnResponse';
        div.appendChild(btn);
        
        document.getElementById('btnResponse').onclick = function(){
            let selectedItem = document.getElementById('options').value;
            console.log(selectedItem);
            switch (selectedItem) {
                case '0':
                    req = new Request(d1,'hqs');
                    req.response;
                    console.log(req);
                    break;
                case '1':
                    req = new Request(d1,'movies');
                    req.response;
                    break;
                
                case '2':
                    req = new Request(d1,'books');
                    req.response;
                    break;

                default:
                    break;
            }
        }

        beenExecuted = true;
    }
};


