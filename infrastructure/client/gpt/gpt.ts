// @todo Remove this hard-coded key
export const OPENAI_API_KEY = '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';
export const OPENAI_API_URL = 'https://api.openai.com/v1/engines/text-davinci-003/completions'
export class GPTClient {
  private readonly OPENAI_API_KEY: string;

  constructor() {
    // this.OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;
    this.OPENAI_API_KEY = OPENAI_API_KEY;
  }

  public async processInput(input: string): Promise<string> {
    const response = await fetch(
      OPENAI_API_URL,
      {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${this.OPENAI_API_KEY}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          prompt: input,
          max_tokens: 60
        })
      }
    );

    if (!response.ok) {
      throw new Error(`GPT Request Failed: ${response.status}`);
    }

    const data = await response.json();

    return data.choices[0].text;
  }
}
