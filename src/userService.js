const axios = require('axios');

async function fetchUser(id) {
  const resp = await axios.get(`https://api.example.com/users/${id}`);
  return resp.data;
}

async function createUser(payload) {
  try {
    const resp = await axios.post('https://api.example.com/users', payload);
    return { ok: true, data: resp.data };
  } catch (err) {
    const base = { ok: false };
    if (err.response) {
      return { ...base, status: err.response.status, message: 'Server error' };
    }
    if (err.request) {
      return { ...base, message: 'Network error' };
    }
    return { ...base, message: err.message || 'Unknown error' };
  }
}

module.exports = { fetchUser, createUser };
