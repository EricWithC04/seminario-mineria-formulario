import '../../assets/css/survey.css';
import React, { useState, useEffect } from 'react';
import Swal from 'sweetalert2'

export const Formsurvey = () => {
    const [genres, setGenres] = useState([])

    const [formInputs, setFormInputs] = useState({
        name: "",
        age: "",
        genre: "",
        email: "",
        locality: "",
        ocupation: "",
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

        const registeredResponses = fetch("http://localhost:4000/api/response", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(formInputs)
        })
            .then(res => {
                if (res.status === 201) {
                    return res.json()
                }
                else {
                    Swal.fire({
                        title: "Error al guardar su respuesta",
                        icon: "error"
                    })
                }
            }
            )
            .then(res => {
                Swal.fire({
                    title: res.message,
                    icon: "success"
                })
            })

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
                        <input type="text" name="name" placeholder='Ingrese su nombre completo' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Edad</span>
                        <input type="text" name="age" placeholder='Ingrese su edad' />
                    </div>
                </div>
                <div className='gender-details'>
                    <input type="radio" name='genre' value="Femenino" id="dot-1" />
                    <input type="radio" name='genre' value="Masculino" id="dot-2" />
                    <input type="radio" name='genre' value="Prefiero no decirlo" id="dot-3" />
                    <span className='gender-title'>Género</span>
                    <div className='category'>
                        <label htmlFor="dot-1">
                            <span className='dot one'></span>
                            <span className='gender'>Femenino</span>
                        </label>
                        <label htmlFor="dot-2">
                            <span className='dot two'></span>
                            <span className='gender'>Masculino</span>
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
                        <input type="text" name="favouriteArtist" placeholder='Artista' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Género favorito</span>
                        <select className='w-100 form-select' name="favouriteGenre" id="">
                            <option value="">Selecciona un Genero</option>
                            {
                                genres.length ? genres.map(genre => {
                                    return (
                                        <option key={genre.id} value={genre.type}>{genre.type}</option>
                                    )
                                }) : <option value=""></option>
                            }
                        </select>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Ocupación</span>
                        <select className='w-100 form-select' name="ocupation" id="">
                            <option value="">Seleccione su ocupación</option>
                            <option value="Estudiante">Estudiante</option>
                            <option value="Trabajador">Trabajador</option>
                            <option value="Otro">Otro</option>
                        </select>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Canción Favorita</span>
                        <input type="text" name="favouriteSong" placeholder='Canción' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Email</span>
                        <input type="text" name="email" placeholder='Ingrese su email' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>localidad</span>
                        <input type="text" name="locality" placeholder='Ingrese su localidad' />
                    </div>
                </div>
                <div className='button'>
                    <button type='submit' className='btn btn-outline-dark'>Enviar</button>
                </div>
            </form>
        </div>
    )
}