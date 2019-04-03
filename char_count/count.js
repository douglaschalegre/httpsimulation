var fs = require('fs');
     
fs.readFile('text.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    count = data.split('');

    fs.writeFile('response.txt', count.length, function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Contagem de letras feita com sucesso, informação em ../response");
    });

});

