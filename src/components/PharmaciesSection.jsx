import { getBranchStatus } from '../utils/schedule.js';

export function PharmaciesSection({ branches }) {
  return (
    <section className="section pharmacies" id="pharmacies">
      <div className="section-heading">
        <p className="eyebrow">Τα φαρμακεία μας</p>
        <h2>Δύο φαρμακεία στον Βόλο, με κοινή φροντίδα και διαφορετικό χαρακτήρα.</h2>
        <p>
          Και στα δύο σημεία θα βρείτε φαρμακευτική καθοδήγηση, προϊόντα υγείας και φροντίδας.
          Το φαρμακείο μας στη Ζάχου λειτουργεί ως σταθερό φαρμακείο γειτονιάς, ενώ στη Γιάννη Δήμου προσφέρει έναν
          νεότερο και μεγαλύτερο χώρο.
        </p>
      </div>

      <div className="pharmacy-grid">
        {branches.map((branch) => {
          const status = getBranchStatus(branch);
          const locationName = branch.address.split(',')[0];

          return (
            <article className="pharmacy-card" key={branch.address}>
              <div className="pharmacy-photo">
                <img src={branch.photo} alt={branch.photoAlt} />
                <span className={status.isOpen ? 'status-pill is-open' : 'status-pill'}>
                  {status.label}
                </span>
              </div>
              <div className="pharmacy-card-content">
                <p className="pharmacy-kicker">{locationName}</p>
                <h3>{branch.displayName}</h3>
                <p>{branch.description}</p>
                <ul className="highlight-list">
                  {branch.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
