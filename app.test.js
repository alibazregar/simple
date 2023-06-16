const request = require('supertest');
const app = require('./app');

describe('GET /', () => {
  it('should respond with status 200 and index.html', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toContain('Index Page');
  });
});

describe('POST /submit1', () => {
  it('should respond with status 200 and success message', async () => {
    const response = await request(app)
      .post('/submit1')
      .send({ name: 'John Doe', message: 'Hello' });

    expect(response.status).toBe(200);
    expect(response.text).toContain('Data received and processed successfully!');
  });
});

describe('POST /submit2', () => {
  it('should respond with status 200 and success message', async () => {
    const response = await request(app)
      .post('/submit2')
      .send({ email: 'test@example.com' });

    expect(response.status).toBe(200);
    expect(response.text).toContain('Email sent successfully!');
  });
});

describe('GET /page1', () => {
    it('should respond with status 200 and page1.html', async () => {
      const response = await request(app).get('/page1');
      expect(response.status).toBe(200);
      expect(response.text).toContain('Page 1');
    });
  });
  
  describe('GET /page2', () => {
    it('should respond with status 200 and page2.html', async () => {
      const response = await request(app).get('/page2');
      expect(response.status).toBe(200);
      expect(response.text).toContain('Page 2');
    });
  });
  
  describe('POST /submit1', () => {
    it('should respond with status 400 if name is missing', async () => {
      const response = await request(app)
        .post('/submit1')
        .send({ message: 'Hello' });
  
      expect(response.status).toBe(400);
      expect(response.text).toContain('Name is required');
    });
  
    it('should respond with status 400 if message is missing', async () => {
      const response = await request(app)
        .post('/submit1')
        .send({ name: 'John Doe' });
  
      expect(response.status).toBe(400);
      expect(response.text).toContain('Message is required');
    });
  
    // Add more tests to cover additional scenarios
  });
  
  describe('POST /submit2', () => {
    it('should respond with status 400 if email is missing', async () => {
      const response = await request(app)
        .post('/submit2')
        .send();
  
      expect(response.status).toBe(400);
      expect(response.text).toContain('Email is required');
    });
  
    it('should respond with status 400 if email is invalid', async () => {
      const response = await request(app)
        .post('/submit2')
        .send({ email: 'invalidemail' });
  
      expect(response.status).toBe(400);
      expect(response.text).toContain('Email is invalid');
    });
  
  });
  