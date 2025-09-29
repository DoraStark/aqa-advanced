const axios = require('axios');
const { getWithHeadersAndParams } = require('../src/httpClient');

jest.mock('axios');

describe('Task 2: Request includes custom headers and params', () => {
  test('passes headers and params to axios.get config', async () => {
    const headers = { 'X-Custom-Header': 'abc123', Authorization: 'Bearer token' };
    const params = { q: 'cats', limit: 10 };

    axios.get.mockResolvedValueOnce({ data: { ok: true } });

    const data = await getWithHeadersAndParams({ headers, params });
    expect(data).toEqual({ ok: true });

    expect(axios.get).toHaveBeenCalledTimes(1);
    const [calledUrl, calledConfig] = axios.get.mock.calls[0];
    expect(calledUrl).toBe('https://api.example.com/data');
    expect(calledConfig).toMatchObject({ headers, params });
  });
});
