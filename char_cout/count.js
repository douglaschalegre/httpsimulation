var fs = require('fs');
const http = require('http')
const port = 3000
const ip = 'localhost'

const server = http.createServer((req, res) => {
  console.log('Recebendo uma request!')
  var count;
  fs.readFile('text.txt', 'utf8', function(err, data) {  
    if (err) throw err;
    count = data.split('');
    fs.writeFile('response.txt', count.length, function(err) {
        if(err) {
            return console.log(err);
        } 
    }); 
    });
    setTimeout(function(){
        res.end(`<p>${count.length}</p> <p>Arquivo de texto com saida disponivel em ../response</p>`);
    },1000);
});

server.listen(port, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${port}`)
  console.log('Para derrubar o servidor: ctrl + c');
})
     


