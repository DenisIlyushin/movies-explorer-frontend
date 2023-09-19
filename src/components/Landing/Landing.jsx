import './Landing.css'
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';

function Landing() {
  return (
    <div className={'landing'}>
      <Promo />
      <AboutProject />
      <Techs />
    </div>
  )
}

export default Landing;
