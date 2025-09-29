const axios = require('axios');
const { getBrokenResource } = require('../src/httpClient');

jest.mock('axios');

describe('Task 1: Error handling with Axios (wrong URL)', () => {
  test('returns readable message when server responds with 404', async () => {
    axios.get.mockRejectedValueOnce({
      response: { status: 404, statusText: 'Not Found' },
    });

    const result = await getBrokenResource();
    expect(result.ok).toBe(false);
    expect(result.message).toBe('Request failed with status 404 Not Found');
  });

  test('returns network error when no response received', async () => {
    axios.get.mockRejectedValueOnce({ request: {} });

    const result = await getBrokenResource();
    expect(result.ok).toBe(false);
    expect(result.message).toBe('Network error: no response received');
  });

  test('returns unexpected error for other cases', async () => {
    axios.get.mockRejectedValueOnce(new Error('Boom'));

    const result = await getBrokenResource();
    expect(result.ok).toBe(false);
    expect(result.message).toBe('Unexpected error: Boom');
  });
});
