export const envs = {
  VITE_DB_PROVIDER: import.meta.env.VITE_DB_PROVIDER || "INDEXED_DB",
  VITE_LINKEDIN_URL: import.meta.env.VITE_LINKEDIN_URL || "",
  VITE_GITHUB_URL: import.meta.env.VITE_GITHUB_URL || "",
  VITE_PORTFOLIO_URL: import.meta.env.VITE_PORTFOLIO_URL || "",
};
