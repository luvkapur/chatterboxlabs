export class GPT {
  private readonly OPENAI_API_KEY: string;

  constructor() {
    // this.OPENAI_API_KEY = process.env.OPENAI_API_KEY as string;
    // @todo Remove this hard-coded key
    this.OPENAI_API_KEY = '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'
  }

  public async processInput(input: string): Promise<string> {
    const response = await fetch(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
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
