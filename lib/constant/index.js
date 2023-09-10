export const APP_HOSTNAMES = new Set(["localhost", "localhost:3000"]);

export const HOME_DOMAIN =
  process.env.NEXT_PUBLIC_ENV === "production"
    ? "https://skillsoftcoaching.percipio.com" // FIXME: prod domain
    : "http://localhost:3000";
