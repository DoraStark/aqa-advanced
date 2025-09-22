import { describe, it, expect } from 'vitest';
import api from '../axiosClient.js';

describe('JSONPlaceholder API', () => {
  it('GET /posts/1 -> 200 і валідний пост', async () => {
    const res = await api.get('/posts/1');
    expect(res.status).toBe(200);
    const post = res.data;
    expect(post).toHaveProperty('id', 1);
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
  }, 15000);

  it('GET /users/1 -> 200 і валідний юзер', async () => {
    const res = await api.get('/users/1');
    expect(res.status).toBe(200);
    const user = res.data;
    expect(user).toHaveProperty('id', 1);
    expect(user).toHaveProperty('name');
    expect(user).toHaveProperty('email');
    expect(user).toHaveProperty('address');
  }, 15000);

  it('GET /todos?userId=1 -> 200 і масив todo', async () => {
    const res = await api.get('/todos', { params: { userId: 1 } });
    expect(res.status).toBe(200);
    expect(Array.isArray(res.data)).toBe(true);
    expect(res.data.length).toBeGreaterThan(0);
    expect(res.data[0]).toHaveProperty('userId', 1);
  }, 15000);

  it('POST /posts -> 201 і повертає створений пост', async () => {
    const payload = { title: 'test title', body: 'hello', userId: 1 };
    const res = await api.post('/posts', payload);
    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(payload);
    expect(res.data).toHaveProperty('id');
  }, 15000);

  it('POST /todos -> 201 і повертає створений todo', async () => {
    const payload = { title: 'my todo', completed: false, userId: 1 };
    const res = await api.post('/todos', payload);
    expect(res.status).toBe(201);
    expect(res.data).toMatchObject(payload);
    expect(res.data).toHaveProperty('id');
  }, 15000);
});
