import { getAllLocalitys, createLocality } from "../models/Locality.model.js"

export const ctrlGetAllLocalitys = async (req, res) => {
    try {
        const allLocalitys = await getAllLocalitys()

        if (!allLocalitys || allLocalitys.length === 0) {
            res.status(404).send({
                status: 404,
                message: 'No se han encontrado Localidades!'
            })
        }

        res.status(200).send(allLocalitys)
    } catch (err) {
        console.error(err);
    }
}

export const ctrlCreateLocality = async (req, res) => {
    try {
        const newLocality = await createLocality(req.body)

        if (!newLocality) {
            res.status(500).send({
                status: 500,
                message: 'No se ha podido registrar la Localidad!'
            })
        }

        res.status(201).send({ message: "Localidad registrada correctamente!", newLocality })
    } catch (err) {
        console.error(err);
    }
}