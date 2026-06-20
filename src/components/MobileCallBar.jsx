import { Icon } from './Icon.jsx';

export function MobileCallBar({ branches }) {
  return (
    <div className="mobile-call-bar" aria-label="Γρήγορες κλήσεις">
      {branches.map((branch) => (
        <a href={`tel:${branch.phone.replace(/\s/g, '')}`} key={branch.name}>
          <Icon>☎</Icon>
          {branch.address.split(',')[0]}
        </a>
      ))}
    </div>
  );
}
