export function ServicesSection({ services, carePhoto }) {
  return (
    <section className="section services" id="services">
      <div className="services-layout">
        <div className="section-heading">
          <p className="eyebrow">Υπηρεσίες</p>
          <h2>Φροντίδα που καλύπτει τις καθημερινές ανάγκες σας.</h2>
          <p>
            Με προσεγμένη επιλογή προϊόντων και προσωπική εξυπηρέτηση, κάθε επίσκεψη γίνεται απλή,
            γρήγορη και αξιόπιστη.
          </p>
        </div>

        <figure className="care-photo">
          <img src={carePhoto} alt="Εσωτερικός χώρος φαρμακείου με προϊόντα φροντίδας" />
        </figure>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <article className="service-card" key={service.title}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
