export default {
  async fetch(request, env) {
    if (request.method === 'OPTIONS') {
      return new Response(null, {
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, OPTIONS',
        },
      });
    }

    const response = await fetch('https://xbl.io/api/v2/player/titleHistory', {
      headers: { 'X-Authorization': env.XBOX_API_KEY },
    });

    const data = await response.json();

    if (!data.content || !data.content.titles) {
      return new Response(JSON.stringify({ error: 'Unexpected API response', data }), {
        status: 502,
        headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' },
      });
    }

    const game = data.content.titles
      .filter(t => t.type === 'Game' && t.titleHistory?.lastTimePlayed)
      .sort((a, b) => new Date(b.titleHistory.lastTimePlayed) - new Date(a.titleHistory.lastTimePlayed))[0];

    return new Response(JSON.stringify({
      name: game.name,
      titleId: game.titleId,
      displayImage: game.displayImage.replace('http://', 'https://'),
    }), {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
  },
};
