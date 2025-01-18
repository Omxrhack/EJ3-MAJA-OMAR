import express from "express";
import cors from "cors";

const app = express();


app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]

}));

app.get('/api/reservations', (req, res) => {
    res.send("Hola mundo");
})

const port = 5000;

app.listen(port, () => {
    console.log("Estoy escuchando y resiviendo una respuesta del puerto: " + port)
})