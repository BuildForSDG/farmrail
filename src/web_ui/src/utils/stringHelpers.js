export const getInitials = (fullName = '') => {
  try {
    return fullName
      .split(' ')
      .map((it) => it[0].toUpperCase())
      .join('');
  } catch (e) {
    return '';
  }
};

export function getRandomStr(max = 16) {
  const letters = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let str = '';
  for (let i = 0; i < max; i += 1) {
    str += letters[Math.floor(Math.random() * max)];
  }
  return str;
}

export const trimGuid = (data) => {
  return data.substr(0, 8);
};

export function enumToArray(typeData) {
  return Object.keys(typeData);
}

// Split pascal case
export function camelPad(str) {
  return (
    str
      // Look for long acronyms and filter out the last letter
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      // Look for lower-case letters followed by upper-case letters
      .replace(/([a-z\d])([A-Z])/g, '$1 $2')
      // Look for lower-case letters followed by numbers
      .replace(/([a-zA-Z])(\d)/g, '$1 $2')
      .replace(/^./, (strg) => strg.toUpperCase())
      // Remove any white space left around the word
      .trim()
  );
}
