export function SocialIcon({ type }) {
  if (type === 'facebook') {
    return (
      <svg className="social-svg" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M14.2 8.1V6.9c0-.6.4-.8.8-.8h1.9V3h-2.7c-3 0-3.7 2.1-3.7 3.6v1.5H8.2v3.3h2.3V21h3.7v-9.6h2.7l.4-3.3h-3.1Z" />
      </svg>
    );
  }

  return (
    <svg className="social-svg" viewBox="0 0 24 24" aria-hidden="true">
      <rect x="4" y="4" width="16" height="16" rx="5" />
      <circle cx="12" cy="12" r="3.7" />
      <circle cx="16.8" cy="7.2" r="1" />
    </svg>
  );
}
