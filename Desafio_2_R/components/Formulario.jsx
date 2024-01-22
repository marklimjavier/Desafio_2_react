import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css'
import Button from 'react-bootstrap/Button'
import { useState } from 'react';

const Formulario = ({error, setError}) => {

    const [formData , SetFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })


    const validarDatos = (e) => {
      e.preventDefault({error, setError});
      const { name, email, password, confirmPassword } = formData;
      const ValidosDatos = !name || !email || !password || !confirmPassword;
      const validarPassword = password !== confirmPassword;
    
      if (ValidosDatos) {
        setError({
          error: true,
          msg: 'Completa todos los campos!',
          color: 'warning',
        });
      } else if (validarPassword) {
        setError({
          error: true,
          msg: 'Las contraseñas no coinciden',
          color: 'danger',
        });
      } else if (!email.includes('@')) {
        setError({
          error: true,
          msg: 'El correo electrónico debe contener "@"',
          color: 'danger',
        });
      } else {
        setError({
          error: false,
          msg: 'Cuenta creada exitosamente',
          color: 'success',
        });
        return
      }
    
      SetFormData({
        email: '',
        password: '',
        confirmPassword: ''
      });
    }
    const handleChange = (e) => {
      SetFormData ({...formData, [e.target.name]: e.target.value})
      
    }

  return (
    <>
    <Form
    className='formulario'
    onSubmit={(e) => validarDatos(e)}>
      <div className="form-group mb-3 ">
        <input type="text" className="form-control"  name="name" placeholder="Nombre" onChange={handleChange} value={formData.nombre} />
      </div>
      <div className="form-group mb-3">
        <input type="email" className="form-control" name="email" placeholder="email@ejemplo.com" onChange={handleChange} value={formData.email} />
      </div>
      <div className="form-group mb-3">
        <input type="password" className="form-control" name="password" placeholder="Contraseña" onChange={handleChange} value={formData.password} />
      </div>
      <div className="form-group mb-3">
        <input type="password" className="form-control" name="confirmPassword" placeholder="Confirmar Contraseña" onChange={handleChange} value={formData.confirmPassword} />
      </div>
      <div className="d-grid gap-2">
      <Button variant="success" type='submit' size="lg">
        Registrarse
      </Button>
      </div>
    </Form>
    </>
  )
}

export default Formulario
