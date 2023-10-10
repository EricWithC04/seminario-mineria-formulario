import '../../assets/css/survey.css';

export const Formsurvey = () => {
    return (
        <div className="box container">
            <div className='row'>
                <div className='col'>
                    <div className="head">
                        Encuesta: Radio EFR
                    </div>
                </div>
            </div>
            {/* Nombre, Edad, Localidad, Genero(hombre o mujer), artista favorito, cancion favorita, genero favorito, si es estudiante, trabajador o vago (que no hace nada) */}
            <form className='m-4'>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <label>Nombre completo</label>
                            <input type="text" name="fullname" placeholder="Nombre" className="name" />
                        </div>
                    </div>
                    <div className="col">
                        <div className='row'>
                            <label>Email</label>
                            <input type="email" name="email" placeholder="example@gmail.com" className="mail" />
                        </div>
                    </div>
                    <div className="col">
                        <div className='row'>
                            <label>Localidad</label>
                            <input type="email" name="email" placeholder="localidad" className="mail" />
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col'>
                        <div className='row'>
                            <label htmlFor="">Género</label>
                            <select className='w-50' name="" id="">
                                <option className='' value="">Masculino</option>
                                <option className='' value="">Femenino</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className='row'>
                            <label htmlFor="">Artista favorito</label>
                            <input type="text" />
                        </div>
                    </div>
                </div>
                <div className="boxbutton">
                    <button>Submit</button>
                </div>
            </form >
        </div>
    )
}