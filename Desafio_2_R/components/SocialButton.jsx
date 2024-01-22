import{faGithub} from '@fortawesome/free-brands-svg-icons'
import{faFacebook} from '@fortawesome/free-brands-svg-icons'
import{FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faLinkedinIn} from '@fortawesome/free-brands-svg-icons'



const SocialButton = ({ github, facebook, linkedin }) => {
  return (
    <>
    <button>
        {github && <FontAwesomeIcon icon={faGithub} size='3x'/>}
    </button>
    <button>
        {facebook && <FontAwesomeIcon icon={faFacebook} size='3x' />}
    </button>
    <button>
        {linkedin && <FontAwesomeIcon icon={faLinkedinIn} size='3x' />}
    </button>
    </>

  )
}


export default SocialButton