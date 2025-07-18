export const isBot = () => {
  if (typeof window !== 'undefined') {
    return (
      navigator.userAgent.includes("puppeteer") ||
      window.navigator.userAgent.indexOf("Headless") !== -1
    );
  }
  return false; // По умолчанию, если на сервере
};