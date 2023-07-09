const { createApp } = Vue
    createApp({
        data() {
            return {
                profesionales:[],
                url:'https://vaguuu.pythonanywhere.com/staff',
                /*atributos para el guardar los valores del formulario */
                mn:"",
                nombre:"", 
                especialidad:"",
                correo:"",
                horarios:"",
                foto:"",
            }  
        },
        methods: {
            async fetchData(url) {
                try {
                const response = await fetch(url);
                const data = await response.json();
                this.profesionales = data;
                this.cargando = false;
                } catch (err) {
                console.error(err);
                this.error = true;
                }
            },
            async remover_profesional(mn) {
                const url = this.url + '/' + mn;
                const options = {
                    method: 'DELETE',
                };
                try {
                    const res = await fetch(url, options);
                    const data = await res.json();
                    alert("Profesional removido correctamente del staff.");    
                    location.reload(); // recarga el json luego de eliminado el registro
                } catch (err) {
                    console.error(err);
                    alert("Mensaje 3.");
                }
            },
            agregar_profesional(){
                let profesional = {
                    mn:this.mn,
                    nombre:this.nombre,
                    especialidad:this.especialidad,
                    correo:this.correo,
                    horarios:this.horarios,
                    foto:this.foto
                }
                var options = {
                    body:JSON.stringify(profesional),
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    redirect: 'follow'
                }
                fetch(this.url, options)
                    .then(response => {
                        if (response.ok) {
                        alert("Profesional incorporado al staff.");
                        window.location.href = "./staff.html"; // recarga productos.html
                        } else {
                        throw new Error("Error al incorporar profesional al staff.");
                        }
                    })
                    .catch(err => {
                        console.error(error);
                        alert("Error al incorporar profesional al staff.")  // puedo mostrar el error tambien
                    })
            }
        },
        created() {
            this.fetchData(this.url)
        },
    }).mount('#app')