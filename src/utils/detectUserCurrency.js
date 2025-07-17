export const fetchCurrencyFromIP = async () => {
  try {
    const res = await fetch("https://ipapi.co/json/");

    if (!res.ok) {
      // Log status code & text for debugging
      console.error(
        "fetchCurrencyFromIP – HTTP error:",
        res.status,
        res.statusText
      );
      throw new Error(
        `Failed to fetch IP info: ${res.status} ${res.statusText}`
      );
    }

    const data = await res.json();
    return {
      currency: data.currency, // e.g., "PKR"
      country: data.country_name, // e.g., "Pakistan"
      countryCode: data.country, // e.g., "PK"
    };
  } catch (err) {
    // Log the exception (network failure, JSON parse error, etc.)
    console.error("fetchCurrencyFromIP – Exception:", err);
    // Re‑throw so callers know something went wrong
    throw err;
  }
};
