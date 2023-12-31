import '../../assets/css/survey.css';
import React, { useState, useEffect } from 'react';

export const Formsurvey = () => {

    const [genres, setGenres] = useState([])

    const [formInputs, setFormInputs] = useState({
        name: "",
        age: "",
        genre: "",
        email: "",
        locality: "",
        ocupation: "",
        level_study: "",
        job: "",
        favouriteSong: "",
        favouriteGenre: "",
        favouriteArtist: "",
    })

    useEffect(() => {
        fetch("http://localhost:4000/api/musicGenre", {
            method: "GET",
            headers: {
                "content-type": "application/json"
            }
        })
            .then(res => res.json())
            .then(res => setGenres(res))
    }, [])

    const handleChange = (e) => {
        setFormInputs((prevInputs) => {
            const newInputs = {
                ...prevInputs,
                [e.target.name]: e.target.value
            }
            console.log(newInputs);
            return newInputs
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const registeredResponses = fetch("http://localhost:4000/api/question", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formInputs)
        })
            .then(res => res.json())
            .then(res => alert(`${res.message}`))
            .catch(err => {
                alert("Ha ocurrido un error al registrar tus respuestas!")
                console.error(err)
            })
    }

    {/* Nombre, Edad, Localidad, Genero(hombre o mujer), artista favorito, cancion favorita, genero favorito, si es estudiante, trabajador o vago (que no hace nada) */ }
    return (
        <div className="container">
            <div className='title'>Encuesta: Radio Formosa</div>
            <form action="" onChange={handleChange} onSubmit={handleSubmit}>
                <div className="user-details">
                    <div className='input-box'>
                        <span className='details'>Nombre Completo</span>
                        <input type="text" name="name" autoComplete='off' placeholder='Ingrese su nombre completo' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Edad</span>
                        <input type="number" name="age" autoComplete='off' placeholder='Ingrese su edad' />
                    </div>
                </div>
                <div className='gender-details'>
                    <input type="radio" name='genre' value="1" id="dot-1" />
                    <input type="radio" name='genre' value="2" id="dot-2" />
                    <input type="radio" name='genre' value="3" id="dot-3" />
                    <span className='gender-title'>Género</span>
                    <div className='category'>
                        <label htmlFor="dot-1">
                            <span className='dot one'></span>
                            <span className='gender'>Masculino</span>
                        </label>
                        <label htmlFor="dot-2">
                            <span className='dot two'></span>
                            <span className='gender'>Femenino</span>
                        </label>
                        <label htmlFor="dot-3">
                            <span className='dot three'></span>
                            <span className='gender'>Prefiero no decirlo</span>
                        </label>
                    </div>
                </div>
                <div className="user-details">

                    <div className='input-box'>
                        <span className='details'>Artista Favorito</span>
                        <input type="text" autoComplete='off' name="favouriteArtist" placeholder='Artista' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Género favorito</span>
                        <select className='w-100 form-select' name="favouriteGenre" id="">
                            <option value="">Selecciona un Genero</option>
                            {
                                genres.length ? genres.map(genre => {
                                    return (
                                        <option key={genre.id} value={parseInt(genre.id)}>{genre.type}</option>
                                    )
                                }) : <option value=""></option>
                            }
                        </select>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Ocupación</span>
                        <select className='w-100 form-select' name="ocupation">
                            <option value="">Seleccione su ocupación</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Trabajador">Trabajador</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    {
                        formInputs.ocupation.length && formInputs.ocupation !== "Otro" ? (
                            <div className="input-box">
                                {
                                    formInputs.ocupation === "Estudiante" ?
                                        (
                                            <>
                                                <span className='details'>Nivel de estudio</span>
                                                <select name="level_study" className='form-select'>
                                                    <option value="">Seleccionar</option>
                                                    <option value="1">Primaria</option>
                                                    <option value="2">Secundaria</option>
                                                    <option value="3">Terciario</option>
                                                    <option value="4">Univsersitario</option>
                                                    <option value="5">Otro</option>
                                                </select>
                                            </>
                                        ) : (
                                            <>
                                                <span>Descripción del trabajo</span>
                                                <input type="text" autoComplete='off' name="job" placeholder='Breve descripción de su trabajo...' />
                                            </>
                                        )
                                }
                            </div>
                        ) : null
                    }
                    <div className='input-box'>
                        <span className='details'>Canción Favorita</span>
                        <input type="text" autoComplete='off' name="favouriteSong" placeholder='Canción' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Email</span>
                        <input type="text" autoComplete='off' name="email" placeholder='Ingrese su email' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>localidad</span>
                        <input type="text" autoComplete='off' name="locality" placeholder='Ingrese su localidad' />
                    </div>
                </div>
                <div className='button'>
                    <button type='submit' className='btn btn-outline-dark'>Enviar</button>
                </div>
            </form>
        </div>
    )
}