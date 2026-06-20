import { Icon } from './Icon.jsx';

export function Header({ menuOpen, onToggleMenu, onCloseMenu }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" onClick={onCloseMenu} aria-label="Αρχική">
        <span className="brand-mark">+</span>
        <span>
          <strong>Φαρμακεία Κοντοπαναγιώτη</strong>
          <small>Βόλος</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        type="button"
        onClick={onToggleMenu}
        aria-label={menuOpen ? 'Κλείσιμο μενού' : 'Άνοιγμα μενού'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '×' : '☰'}
      </button>

      <nav className={menuOpen ? 'nav-links is-open' : 'nav-links'} aria-label="Κύρια πλοήγηση">
        <a href="#pharmacies" onClick={onCloseMenu}>
          Φαρμακεία
        </a>
        <a href="#services" onClick={onCloseMenu}>
          Υπηρεσίες
        </a>
        <a href="#locations" onClick={onCloseMenu}>
          Τοποθεσίες
        </a>
        <a className="header-call" href="#contact" onClick={onCloseMenu}>
          <Icon>☎</Icon>
          Επικοινωνία
        </a>
      </nav>
    </header>
  );
}
