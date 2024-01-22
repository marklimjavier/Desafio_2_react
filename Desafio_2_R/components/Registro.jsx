import SocialButton from "./SocialButton";
import Formulario from "./Formulario";
import 'bootstrap/dist/css/bootstrap.min.css'
import Alert from "./Alert";



const Registro = ({ error, setError }) => {
  return (
    <>
      <h1>Crea Tu Cuenta</h1>
      <SocialButton github={"githud"} facebook={"facebook"} linkedin={"linkedin"} />
      <Formulario  error={error} setError={setError} />
      <Alert color={Formulario.color} msg={Formulario.msg} /> 
    </>//creo que se rompio el metodo para detectar las props, solo me faltaba la Alert y llevo todo el dia con el
    //mismo error "Uncaught TypeError: setError is not a function" sinceramente no se si hice algo mal o si se
    //rompio la aplicacion, aunque me quite puntos quisiera saber cual era la respuesta correcta porque de verdad que
    //me gano esta actividad, intente absolutamente de todo y por cierto no es que lo intente a ultima hora 
    //me enferme como esa gripe de temporada que anda en santiago y el sabado me dio una baja de tension y de paso
    //tome una pastilla que me dejo tieso, no es excusa lo se, apreciaria mucho si me dijera que hice mal
  );
}

export default Registro;