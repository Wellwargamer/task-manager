const request = require('supertest');
const app = require('../index');

describe('Task API', () => {
  it('GET /tasks should return empty array', async () => {
    const res = await request(app).get('/tasks');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual([]);
  });

  it('POST /tasks should add a task', async () => {
    const task = { title: "Test Task" };
    const res = await request(app).post('/tasks').send(task);
    expect(res.statusCode).toEqual(201);
    expect(res.body).toMatchObject(task);
  });
});
