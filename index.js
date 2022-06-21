const express = require('express');
const express = require('express-session');
const bodyParser = require('bode-parser');

const port = "@@@NOSSA PORTA@@@";
var path = require('path');
const app = express();

app.use(session({secret:"@@@CRIAR GERADOR DE ID DE SESSÃO AUTOMATICO@@@"}));
app.use(bodyParser.urlencoded({extended:true}));

app.engine('html', require('ejs').renderfile);
app.set('view engine', 'html');
app.use('/public', express.static(path.join(__dirname, 'public')));
app.set('views, path.join(__dirname, '/views'));

app.post('/',(req,res)=>{
  
  if(req.body.@@@NOME DA AREA DE SENHA DO FORM@@@ == @@@USAR METODO POST PARA SINCRONIZAR COM O BD@@@ && req.body.@@@NOME DA AREA DE LOGIN DO FORM@@@ == @@@USAR METODO POST PARA SINCRONIZAR COM O BD@@@){
    //logado com sucesso!
    req.session.login = login;
    
    res.render(@@@PAGINA DEPOIS DE LOGAR@@@)
  
  }else{
    res.render(@@@MENSAGEM/PÁGINA DE SENHA/CONTA INCORRETA@@@);
  }
};

app.get('/',(req.res)=>{
  res.render('index');
};
        
app.listen(port,()=>{
  console.log('servidor rodando');
};
