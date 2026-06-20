import heroImage from '../assets/pharmacy-hero.png';
import { Icon } from './Icon.jsx';

export function Hero() {
  return (
    <section className="hero" id="home">
      <img className="hero-image" src={heroImage} alt="Σύγχρονος και φωτεινός χώρος φαρμακείου" />
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">Δύο φαρμακεία στον Βόλο</p>
        <h1>Καθημερινή φροντίδα υγείας με συνέπεια, γνώση και ανθρώπινη προσέγγιση.</h1>
        <p className="hero-copy">
          Τα φαρμακεία Κοντοπαναγιώτη εξυπηρετούν δύο γειτονιές του Βόλου με σύγχρονα προϊόντα,
          υπεύθυνη συμβουλή και άμεση πρόσβαση.
        </p>
        <div className="hero-actions">
          <a className="primary-button" href="#locations">
            Βρείτε φαρμακείο
            <Icon>→</Icon>
          </a>
          <a className="secondary-button" href="#services">
            Οι υπηρεσίες μας
          </a>
        </div>
      </div>
    </section>
  );
}
