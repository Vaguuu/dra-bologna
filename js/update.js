const urlParams = new URLSearchParams(window.location.search);
const mn = urlParams.get('mn');
console.log(mn);

const { createApp } = Vue
    createApp({
        data() {
            return {
                mn:"",
                nombre:"",
                especialidad:"",
                correo:"",
                horarios:"",
                foto:"",
                url:'https://vaguuu.pythonanywhere.com/staff/'+mn,
            }  
            },
            methods: {
                fetchData(url) {
                    fetch(url)
                        .then(response => response.json())
                        .then(data => {
                            console.log(data);
                            this.mn=data.mn
                            this.nombre = data.nombre
                            this.especialidad=data.especialidad
                            this.correo=data.correo
                            this.horarios=data.horarios
                            this.foto=data.foto
                        })
                        .catch(err => {
                            console.error(err);
                            this.error=true              
                        })
                },
                async modificar_profesional() {
                    let profesional = {
                        especialidad: this.especialidad,
                        correo: this.correo,
                        horarios: this.horarios,
                        foto: this.foto
                    }
                    var options = {
                        body: JSON.stringify(profesional),
                        method: 'PUT',
                        headers: { 'Content-Type': 'application/json' },
                        redirect: 'follow'
                    }
                    try {
                        await fetch(this.url, options);
                        alert("Registro modificado.");
                        window.location.href = "./staff.html";
                    } catch (err) {
                        console.error(err);
                        alert("Error al modificar registro de profesional.");
                    }
                }
        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')