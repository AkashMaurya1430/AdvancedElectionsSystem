export const valididateTwitterUrl = (url) => {
    console.log(/^[a-zA-Z0-9_]{1,15}$/.test(url));
  return /^[a-zA-Z0-9_]{1,15}$/.test(url);
};
export const validateInstagramUrl = (url) => {
  return /^\s*(http\:\/\/)?instagram\.com\/[a-z\d-_]{1,255}\s*$/i.test(url);
};

export const validateFacebookUrl = (url) => {
  return /(?:http:\/\/)?(?:www\.)?facebook\.com\/(?:(?:\w)*#!\/)?(?:pages\/)?(?:[\w\-]*\/)*([\w\-]*)/.test(url);
};
