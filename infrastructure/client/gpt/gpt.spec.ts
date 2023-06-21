import { GPTClient } from './index';
import { OPENAI_API_KEY, OPENAI_API_URL } from './gpt';

describe('GPT', () => {
  let gpt: GPTClient;
  let fetchMock: any;

  beforeEach(() => {
    gpt = new GPTClient();
    fetchMock = jest.fn().mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        choices: [
          {
            text: 'Hello, AI!',
          },
        ],
      }),
    });
    (global as any).fetch = fetchMock;
  });

  it('processes input correctly', async () => {
    const result = await gpt.processInput('Hello, world!');
    expect(result).toBe('Hello, AI!');
    expect(fetchMock).toHaveBeenCalledWith(
      OPENAI_API_URL,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: 'Hello, world!',
          max_tokens: 60
        })
      }
    );
  });
});
