const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
const indexRoutes = require("./routes/index");
app.use("/", indexRoutes);
app.use("/about", indexRoutes);
app.use("/blog", indexRoutes);
app.use("/contact", indexRoutes);
app.use("/course", indexRoutes);
app.use("/feature", indexRoutes);
app.use("/team", indexRoutes);
app.use("/testimonial", indexRoutes);
app.use("/404", indexRoutes);
app.use("/newRoute", indexRoutes);


//rota com parametro 
// app.get("/consulta/:parametro", function(req,res){
//     //req --> dados enviados pelo cliente
//     //res --> resposta enviada pelo servidor de volta ao cliente
//     res.send("retorno consulta:" + req.params.parametro);
// })

app.listen(PORT,function(erro){
    if (erro){
        console.log("Erro ao Iniciar.");
    }else{
        console.log(`Servidor Iniciado na porta ${PORT}.`);
    }
})