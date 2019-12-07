const searchParams = new URLSearchParams(window.location.search);
export const PRODUCTION =
  process.env.NODE_ENV === 'production' && !searchParams.has('staging');

export const WCA_ORIGIN = PRODUCTION
  ? 'https://www.worldcubeassociation.org'
  : 'https://staging.worldcubeassociation.org';

export const WCA_OAUTH_CLIENT_ID = PRODUCTION
  ? 'LStW1Fqnq5johRL33_BwUhGZDB2-P43kqoZxt7qKDn4'
  : 'example-application-id';
