import { Icon } from './Icon.jsx';

export function CareSection({ carePoints }) {
  return (
    <section className="care-section" aria-label="Γιατί μας επιλέγουν">
      <div className="care-content">
        <p className="eyebrow">Γιατί μας επιλέγουν</p>
        <h2>Πρακτική βοήθεια, καθαρή ενημέρωση και άμεση εξυπηρέτηση.</h2>
      </div>
      <div className="care-list">
        {carePoints.map((point) => (
          <div className="care-point" key={point}>
            <Icon>✓</Icon>
            <span>{point}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
