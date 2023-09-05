const formIngreso = document.getElementById("formIngreso")


formIngreso.addEventListener("submit",(e)=>{
        e.preventDefault()
        localStorage.setItem("DNI",formIngreso["dni"].value)
        window.location.href = "./src/views/paginaMarcador.html"
})

