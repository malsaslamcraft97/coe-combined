import desktopHeroImage from "../assets/hero-image.jpg";
import mobileHeroImage from "../assets/hero-image-sm.jpg";
import logo from "../assets/logo.svg";

function Hero() {
  return (
    <section className="hero-banner" aria-label="World Ranks hero section">
      <picture className="hero-banner__media">
        <source media="(max-width: 640px)" srcSet={mobileHeroImage} />
        <img
          className="hero-banner__image"
          src={desktopHeroImage}
          alt=""
          aria-hidden="true"
        />
      </picture>

      <div className="hero-banner__overlay" />

      <div className="hero-banner__content">
        <img
          className="hero-banner__logo"
          src={logo}
          alt="World Ranks"
          width="174"
          height="24"
        />
        <p className="text-lg">Explore countries, regions, and rankings</p>
      </div>
    </section>
  );
}

export default Hero;
