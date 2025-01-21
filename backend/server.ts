import express from "express";
import cors from "cors";
import { res_data } from "../src/data";

const app = express();


app.use(cors({
    credentials: true,
    origin: ["http://localhost:4200"]

}));

app.get('/api/reservations', (req, res) => {
    res.send(res_data);
})

app.get('/api/reservations/:reserID', (req, res) => {
    const resID = req.params.reserID;
    const reserva = res_data.find(reserva => reserva.id == resID)
    res.send(reserva);
    // console.log(resID)
    // console.log(reserva)
})

const port = 5000;

app.listen(port, () => {
    console.log("Estoy escuchando y resiviendo una respuesta del puerto: " + port)
})