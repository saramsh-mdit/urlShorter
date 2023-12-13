const CHARACTERS_LIST =
  'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

const charArray = CHARACTERS_LIST.split('');
const charLength = CHARACTERS_LIST.length;

export const generateRandomText = (length = 6) => {
  let randomText = '';
  for (let a = 0; a < length; a++) {
    const randomNumber = Math.floor((Math.random() * 100) % charLength);
    randomText = randomText + charArray[randomNumber];
  }
  console.log(randomText);
  return randomText;
};
