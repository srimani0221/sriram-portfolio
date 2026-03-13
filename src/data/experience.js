// utils/experience.js
export const calculateExperience = () => {
    const startDate = new Date("2023-03-01"); // YYYY-MM-DD format (safe)
    const currentDate = new Date();
  
    const diffInMs = currentDate - startDate;
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);
  
    return diffInYears.toFixed(1); // 1 decimal like 1.8
  };