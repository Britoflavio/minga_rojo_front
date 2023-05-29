import React from 'react'
import Google from "../components/Google"





export default function Form() {
    let name= useRef()
    let email= useRef()
    let photo= useRef()
    let password= useRef()

    let role= useRef()
    let navigate = useNavigate()


    function handleform(e){
        e.preventDefault()
       

        let data={
            photo:photo.current.value,
            email: email.current.value,
            password: password.current.value,
        }
        axios.post("http://localhost:8000/auth/signup",data)

        .then(res => {console.log(res)
            

            const Toast = Swal.mixin({
                toast: true,
                position: 'center',
                showConfirmButton: false,
                timer: 4000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              Toast.fire({
                icon: 'success',
                title: 'User Registred!',
              })
              navigate('/')}
          )
        .catch(err=>{
           
            Swal.fire({
                        icon:"error",
                        title: err.response.data.message
                    })
        

        })
    }
  return (
    
  )
}
