const RedirectPage = () => {
    const hoy = new Date();
    const thisDate = `${hoy.getDate()}-${hoy.getMonth()+1}-${hoy.getFullYear()}--${hoy.getHours()}:${hoy.getMinutes()}`
    const getPais = () => {
        let pais = ''
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition((position) => {
                pais = position
            })
        }
        return pais
    }

    //El idioma que usa el usuario
    console.log(navigator.language)
    //Fecha, hora y minuto del click
    console.log(thisDate)
    //SO del user
    console.log(navigator.userAgentData.platform)
    //De donde viene el user (Solo reaccionara con clicks)
    console.log(document.referrer)

    console.log(getPais())


  
    console.log(navigator)

    return (
        <section>
            <div></div>
        </section>
    )
}

export default RedirectPage