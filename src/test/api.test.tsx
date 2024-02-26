import axios, { AxiosResponse } from 'axios';
import { register, loginapi } from '../services/api';

jest.mock('axios');

describe('HTTP Service Interactions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should call register API with correct payload', async () => {
    const mockPayload = { email: 'test@example.com', password: 'password123' };
    const mockResponse = { status: 201, data: { message: 'User registered successfully' } };

    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    const response = await register(mockPayload);

    expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/register', mockPayload);
    expect(response).toEqual(mockResponse);
  });

  it('should call login API with correct payload', async () => {
    const mockPayload = { email: 'test@example.com', password: 'password123' };
    const mockResponse = { status: 200, data: { token: 'abcdef123456' } };

    (axios.post as jest.Mock).mockResolvedValueOnce(mockResponse);

    const response = await loginapi(mockPayload);

    expect(axios.post).toHaveBeenCalledWith('https://reqres.in/api/login', mockPayload);
    expect(response).toEqual(mockResponse);
  });
});
