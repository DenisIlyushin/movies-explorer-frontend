import './Landing.css'
import Promo from '../Promo/Promo.jsx';
import AboutProject from '../AboutProject/AboutProject.jsx';
import Techs from '../Techs/Techs.jsx';
import AboutMe from '../AboutMe/AboutMe.jsx';
import Portfolio from '../Portfolio/Portfolio.jsx';

function Landing() {
  return (
    <main className={'landing'}>
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  )
}

export default Landing;
