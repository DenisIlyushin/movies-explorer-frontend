import './Landing.css'
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';

function Landing() {
  return (
    <div className={'landing'}>
      <Promo />
      <AboutProject />
    </div>
  )
}

export default Landing;
