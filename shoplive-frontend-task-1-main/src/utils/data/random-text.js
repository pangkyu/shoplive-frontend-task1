const chars = "ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

export const getRandomText = () => {
  let result = "";
  for (let i = 0; i < 8; i++) {
    result += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return new Promise((resolve, reject) => {
    resolve(result);
    reject(new Error("ERR : Random-text err"));
  });
};
