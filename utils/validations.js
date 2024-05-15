// *** String validations

export const required = (propertyName, customErrorMessage) => {
  return (v) => (v && v.length) > 0 || customErrorMessage || (propertyName ? `${propertyName} est requis` : 'Requis');
};
export const requiredObj = (propertyName, customErrorMessage) => {
  return (v) =>
    v !== null
      ? Object.keys(v).length > 0
      : false || customErrorMessage || (propertyName ? `${propertyName} est requis` : 'Requis');
};
export const minLength = (propertyType, minLength) => {
  return (v) => {
    if (!v) {
      return true;
    }

    return v.length >= minLength || `${propertyType} doit comporter au moins ${minLength} caractères`;
  };
};
export const maxLength = (propertyType, maxLength) => {
  return (v) => (v && v.length <= maxLength) || `${propertyType} doit comporter au moins ${maxLength} caractères`;
};

export const emailFormat = () => {
  const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,24})+$/;
  return (v) => (v && regex.test(v)) || 'Doit être une adresse email valide';
};

export const ipFormat = () => {
  const regex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
  return (v) => (v && regex.test(v)) || 'Doit être une adresse IP valide';
};
export const usernameFormat = () => {
  return (v) => v.includes('.') || 'Doit être un username valide';
};

export const match = (refPassword) => {
  return (v) => v === refPassword || 'Le mot de passe doit correspondre';
};

export const diff = (refString, customErrorMessage) => {
  return (v) => v !== refString || customErrorMessage || 'Must be different';
};

// *** Number validations

// export const requiredNumber = (propertyType, customErrorMessage) => {
//   return (v) => !isNaN(Number(v)) || customErrorMessage || `Vous devez entrer un ${propertyType}`;
// };
export const requiredNumber = (propertyType, customErrorMessage) => {
  return (v) => !isNaN(parseFloat(v)) || customErrorMessage || `Vous devez entrer un ${propertyType}`;
};
export const limitNumber = (min, max) => {
  return (v) => (parseInt(v) >= min && parseInt(v) <= max) || `Entre ${min} et ${max}`;
};
export const zeroNumber = (val) => {
  return () => val === undefined || parseInt(val) > 0 || 'Non disponible';
};

// export default {
//   required,
//   requiredNumber,
//   limitNumber,
//   minLength,
//   maxLength,
//   emailFormat,
//   ipFormat,
//   match,
//   diff
// };
