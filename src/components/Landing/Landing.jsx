import './Landing.css'
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';

function Landing() {
  return (
    <div className={'landing'}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </div>
  )
}

export default Landing;
