addEventListener('fetch', (event: any) => {
  const data = {
    hello: 'world',
  };

  const json = JSON.stringify(data, null, 2);

  return event.respondWith(
    handleRequest(event.request).catch(err => {
      console.error(`Error: ${err}`);
      return new Response(json, {
        status: 500,
        headers: {
          'content-type': 'application/json;charset=UTF-8',
        },
      });
    })
  );
});


async function handleRequest(request: Request): Promise<Response> {
  const { input } = await request.json();
  const gpt = new GPT();
  const response = await gpt.processInput(input);

  return new Response(JSON.stringify({ output: response }), { headers: { "content-type": "application/json" } });
}

/**
 * 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
 */