import '../../assets/css/survey.css';
import React, { useState, useEffect } from 'react';

export const Formsurvey = () => {

    const [genres, setGenres] = useState([])

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

    {/* Nombre, Edad, Localidad, Genero(hombre o mujer), artista favorito, cancion favorita, genero favorito, si es estudiante, trabajador o vago (que no hace nada) */ }
    return (
        <div className="container">
            <div className='title'>Encuesta: Radio Formosa</div>
            <form action="">
                <div className="user-details">
                    <div className='input-box'>
                        <span className='details'>Nombre Completo</span>
                        <input type="text" placeholder='Ingrese su nombre completo' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Edad</span>
                        <input type="text" placeholder='Ingrese su edad' />
                    </div>
                </div>
                <div className='gender-details'>
                    <input type="radio" name='gander' id="dot-1" />
                    <input type="radio" name='gander' id="dot-2" />
                    <input type="radio" name='gander' id="dot-3" />
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
                        <input type="text" placeholder='Artista' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Género favorito</span>
                        <select className='w-100' name="" id="">
                            <option value="">Selecciona un Genero</option>
                            {
                                genres.length ? genres.map(genre => {
                                    return (
                                        <option value={genre.type}>{genre.type}</option>
                                    )
                                }) : <option value=""></option>
                            }
                        </select>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Ocupación</span>
                        <select className='w-100' name="" id=""></select>
                    </div>
                    <div className='input-box'>
                        <span className='details'>Canción Favorita</span>
                        <input type="text" placeholder='Canción' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>Email</span>
                        <input type="text" placeholder='Ingrese su email' />
                    </div>
                    <div className='input-box'>
                        <span className='details'>localidad</span>
                        <input type="text" placeholder='Ingrese su localidad' />
                    </div>
                </div>
                <div className='button'>
                    <button type='submit' className='btn btn-outline-dark'>Enviar</button>
                </div>
            </form>
        </div>
    )
}