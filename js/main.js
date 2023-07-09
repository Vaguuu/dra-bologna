document.getElementById("header").innerHTML= `<nav class="navbar">
<div class="name">
    <img id="logo" src="img/logo.png" alt="logo">
    <h1>Dra. Micaela Bologna</h1>
    <br>
    <p class="subtext">
        Médica Ginecóloga y Obstetra.
</div> 
<div class="menu">
    <ul class="navButton" id="navButton">
        <li><a href="index.html" title="Ir a inicio"> <button class="sin-bordes">Inicio</button></a> </li>
        <li><a href="publicaciones.html" title="Ir a Publicaciones"><button class="sin-bordes">Publicaciones</button></a> </li>
        <li><a href="cv.html" title="Ir a 'Sobre mi'"><button class="sin-bordes">Sobre mí</button></a> </li>
        <li><a href="contacto.html" title="Ir a formulario de Contacto"><button class="sin-bordes">Contacto</button></a></li>
        <li><a href="staff.html" title="Ver staff"><button class="sin-bordes">Staff</button></a></li>
    </ul>
</div>
</nav>
`
document.getElementById("footer").innerHTML= `<div class="adress">
<div class="text_adress">
    <p>Atención en consultorio particular<br>
        Médicas de familia<br>
        Zapiola 2449, Belgrano (Ciudad de Buenos Aires)</p>
</div>
<div class="map">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3285.6364870899374!2d-58.46603689999999!3d-34.562758200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb67e339fec23%3A0xe5f11f2e86f8cf!2sZapiola%202449%2C%20C1428CXK%20CABA!5e0!3m2!1ses-419!2sar!4v1682100902860!5m2!1ses-419!2sar" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
</div>
<div class="redes">
<ul>
    <li><a href="https://www.instagram.com/gineco.micabologna/" target="_blank" title="Ir a Instagram"><button><img src="img/instagram.png" alt="Instagram"></button></a></li>
    <li><a href="https://www.youtube.com/" target="_blank" title="Ir a YouTube"><button><img src="img/youtube.png" alt="YouTube"></button></a></li>
    <li><a href="https://twitter.com/" target="_blank" title="Ir a Twitter"><button><img src="img/twitter.png" alt="Twitter"></button></a></li>
    <li><a href="mailto:micabologna@gmail.com?subject=Contacto vía web" target="_blank" title="Enviar email"><button><img src="img/gmail.png" alt="Gmail"></button></a></li>
</ul>
</div>
`