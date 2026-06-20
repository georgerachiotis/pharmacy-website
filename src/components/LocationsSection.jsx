import { formatScheduleSlots, fullDayNames, getBranchStatus } from '../utils/schedule.js';
import { Icon } from './Icon.jsx';

function WeeklySchedule({ branch }) {
  const today = new Date().getDay();

  return (
    <div className="weekly-hours" aria-label={`Ωράριο για ${branch.displayName}`}>
      <div className="weekly-hours-heading">
        <Icon>◷</Icon>
        <span>Ωράριο εβδομάδας</span>
      </div>
      <div className="weekly-hours-list">
        {fullDayNames.map((dayName, dayIndex) => {
          const slots = branch.schedule[dayIndex] || [];
          const isToday = dayIndex === today;
          const isClosed = slots.length === 0;

          return (
            <div className={isToday ? 'hours-row is-today' : 'hours-row'} key={dayName}>
              <span className="hours-day">
                {dayName}
                {isToday && <small>Σήμερα</small>}
              </span>
              <span className={isClosed ? 'hours-time is-closed' : 'hours-time'}>
                {formatScheduleSlots(slots)}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function LocationsSection({ branches }) {
  return (
    <section className="section locations" id="locations">
      <div className="section-heading">
        <p className="eyebrow">Τοποθεσίες</p>
        <h2>Ωράριο και οδηγίες πρόσβασης για κάθε κατάστημα.</h2>
      </div>

      <div className="location-list">
        {branches.map((branch) => {
          const status = getBranchStatus(branch);
          const locationName = branch.address.split(',')[0];

          return (
            <article className="location-card" key={branch.address}>
              <div className="location-content">
                <div className="location-topline">
                  <span className="location-tag">
                    <Icon>⌖</Icon>
                    {locationName}
                  </span>
                  <span className={status.isOpen ? 'status-pill is-open' : 'status-pill'}>
                    {status.label}
                  </span>
                </div>
                <h3>{branch.name}</h3>
                <p className="address">{branch.address}</p>
                <div className="status-note">
                  <Icon>◷</Icon>
                  <span>{status.detail}</span>
                </div>
                <WeeklySchedule branch={branch} />
                <div className="location-actions">
                  <a className="directions-button" href={branch.mapsLink} target="_blank" rel="noreferrer">
                    <Icon>↗</Icon>
                    Οδηγίες
                  </a>
                </div>
              </div>
              <div className="map-frame">
                <iframe
                  title={`Χάρτης για ${branch.name}`}
                  src={branch.embed}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
