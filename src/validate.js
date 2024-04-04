export const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

export const validateWholesalerId = (wholesalerId) => {
    const re = /^[A-Z]{3}\d{3}$/;
    return re.test(wholesalerId);
  };

export const validateLocId = (locId) => {
    const re = /^[A-Z]{2}\d{6}$/;
    return re.test(locId);
  };