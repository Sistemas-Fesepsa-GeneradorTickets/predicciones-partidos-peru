import Swal from 'https://cdn.jsdelivr.net/npm/sweetalert2@11.7.27/+esm'
const formIngreso = document.getElementById("formIngreso")
const entrada = document.getElementById("dni")
let asociados =['72718154','25621432','44426711','25741815','07795717','07786355','75394168','08141700','46074124','43793987','70438689','63571821','10028032','45473989','25474808','07221292','15714389','46694632','43092645','08055784','10811990','46459049','07513522','45857997','25663056','41763328','75887436','40987791','06669210','45619743','08319683','75499311','08128401','10139837','45876231','02861456','25603428','003147044','74708835','40078546','46114714','29724441','47918622','70674671','70837704','41674271','10231172','06035151','45435374','77351144','41635639','74057640','41987866','41719990','74291662','47879170','72709982','25756772','10319347','09623208','72215125','42338793']


let fechaActual = new Date();
let fechaLimite = new Date("2023-10-11T00:00:00");



formIngreso.addEventListener("submit",(e)=>{
        e.preventDefault()
        let abrir = false;
        for (let i=0;i<asociados.length;i++){
                if(asociados[i]==entrada.value){
                        abrir=true
                }
        }

       if(fechaActual>=fechaLimite){
                if(abrir==true){
                        localStorage.setItem("DNI",formIngreso["dni"].value)
                        window.location.href = "./src/views/paginaMarcador.html"
                }else{
                        Swal.fire({
                                icon: 'error',
                                title: 'DNI no válido',
                                text: 'No perteneces a la organización'
                        })   
                }
       }else{
        Swal.fire({
                icon: 'error',
                title: 'Sistema Inhabilitado',
                text: 'El sistema estará habilitado a partir del 11 desde las 00:00 horas'
        })   
       }

  
        
})

