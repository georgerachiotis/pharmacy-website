import { Icon } from './Icon.jsx';
import { SocialIcon } from './SocialIcon.jsx';

export function ContactSection({ branches }) {
  return (
    <section className="contact-section" id="contact">
      <div>
        <p className="eyebrow">Επικοινωνία</p>
        <h2>Χρειάζεστε άμεση εξυπηρέτηση;</h2>
        <p>
          Καλέστε απευθείας το κατάστημα που σας εξυπηρετεί ή ακολουθήστε μας στα social media για
          νέα, προτάσεις και ενημερώσεις.
        </p>
      </div>
      <div className="contact-actions">
        {branches.map((branch) => (
          <div className="contact-branch" key={branch.name}>
            <a
              className="contact-call"
              href={`tel:${branch.phone.replace(/\s/g, '')}`}
              aria-label={`Κλήση στο φαρμακείο ${branch.address}`}
            >
              <Icon>☎</Icon>
              <span>
                <strong>{branch.address.split(',')[0]}</strong>
                <small>{branch.phone}</small>
              </span>
            </a>
            <div className="contact-socials" aria-label={`Social media για ${branch.address.split(',')[0]}`}>
              {branch.socials.map((social) => (
                <a href={social.url} key={social.label} target="_blank" rel="noreferrer">
                  <SocialIcon type={social.label.toLowerCase()} />
                  {social.label}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
