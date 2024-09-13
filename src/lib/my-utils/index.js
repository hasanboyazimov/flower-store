export const getFormData = (form) => {
  const data = new FormData(form);
  const obj = {};
  for (const [key, value] of data.entries()) obj[key] = value;

  return obj;
};

export const collectItem = (array, item) => {
  const result = [];
  for (const obj of array) {
    result.push(obj[item]);
  }
  return Array.from(new Set(result));
};

export const BASE_URL = "https://json-api.uz/api/project/flowers-store";

export const period = ["kun", "oy", "yil"];
export const allowImgSize = 5_242_880;
