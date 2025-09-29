const axios = require('axios');
const { fetchUser, createUser } = require('../src/userService');

jest.mock('axios');

describe('Task 3: Mocking Axios in Jest (success & failure)', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('fetchUser: success case (GET)', async () => {
    const user = { id: 42, name: 'Alice' };
    axios.get.mockResolvedValueOnce({ data: user });

    const result = await fetchUser(42);

    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/users/42');
    expect(result).toEqual(user);
  });

  test('createUser: failure case (POST -> 500)', async () => {
    axios.post.mockRejectedValueOnce({ response: { status: 500 } });

    const result = await createUser({ name: 'Bob' });

    expect(axios.post).toHaveBeenCalledWith('https://api.example.com/users', { name: 'Bob' });
    expect(result).toEqual({
      ok: false,
      status: 500,
      message: 'Server error',
    });
  });

  test('createUser: network error case (no response)', async () => {
    axios.post.mockRejectedValueOnce({ request: {} });

    const result = await createUser({ name: 'Charlie' });
    expect(result).toEqual({ ok: false, message: 'Network error' });
  });

  test('createUser: unexpected error message', async () => {
    axios.post.mockRejectedValueOnce(new Error('Kaboom'));

    const result = await createUser({ name: 'Dave' });
    expect(result).toEqual({ ok: false, message: 'Kaboom' });
  });
});
