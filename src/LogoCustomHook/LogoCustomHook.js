import { useState, useEffect } from "react";
const API_KEY = import.meta.env.VITE_LOGO_API_KEY;

export default function useCompanyLogo(company) {
  const [logo, setlogo] = useState(null);
  

  let cancelled = false;
  useEffect(() => {
    async function fetchLogo() {
      try {
        const res = await fetch(
          `https://img.logo.dev/${company}.com?token=${API_KEY}`
        );
        if (!cancelled) setlogo(res.url);
      } catch (e) {
        if (!cancelled) console.error("FAILED TO LOAD LOGO: ", e);
      }
    };
    fetchLogo()
    return () => {
        cancelled = true
    }
  }, [company]);
  return logo
}
