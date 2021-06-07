import axios from "axios";

const weightURL =
  "https://api.airtable.com/v0/appJ6gBEuSNHrGZQ9/Weight%20Lifting?";
const cardioURL = "https://api.airtable.com/v0/appJ6gBEuSNHrGZQ9/Cardio?";
const apiKey = process.env.REACT_APP_AIRTABLE_KEY;
const config = {
  headers: {
    Authorization: `Bearer ${apiKey}`,
  },
};

export const exampleLift = async (id) => {
  try {
    const res = await axios.get(`${weightURL}/${id}`, config);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const exampleCardio = async (id) => {
  try {
    const res = await axios.get(`${cardioURL}/${id}`, config);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const newLift = async (form) => {
  try {
    const res = await axios.post(`${weightURL}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    throw error;
  }
};

export const newCardio = async (form) => {
  try {
    const res = await axios.post(`${cardioURL}`, { fields: form }, config);
    return res.data;
  } catch (error) {
    throw error;
  }
};
