import supertest from 'supertest';
import app from '../app';

const api = supertest(app);
const url = {
  'url': 'https://www.google.es',
};

test('POST /shorten', async () => {
  await api.post('/shorten')
      .send(url)
      .expect(200);
});

test('GET /:id', async () => {
  await api.get('/WlcxS')
      .expect(302);
  await api.get('/aaaa')
      .expect(404);
});