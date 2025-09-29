const axios = require('axios');

async function getBrokenResource() {
  try {
    const url = 'https://example.invalid/does-not-exist';
    await axios.get(url);
    return { ok: true, data: null };
  } catch (err) {
    if (err.response) {
      const { status, statusText } = err.response;
      return {
        ok: false,
        message: `Request failed with status ${status} ${statusText || ''}`.trim(),
      };
    } else if (err.request) {
      return { ok: false, message: 'Network error: no response received' };
    } else {
      return { ok: false, message: `Unexpected error: ${err.message}` };
    }
  }
}

async function getWithHeadersAndParams({ headers = {}, params = {} } = {}) {
  const url = 'https://api.example.com/data';
  const resp = await axios.get(url, { headers, params });
  return resp.data;
}

module.exports = {
  getBrokenResource,
  getWithHeadersAndParams,
};
