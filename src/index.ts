import { Hono } from 'hono'
import { ImageResponse } from "workers-og"

const app = new Hono()

app.get('/image', (c) => {
  const title = c.req.query('title') || 'Hello Hono!'


  const html = `
    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100vh; width: 100vw; font-family: sans-serif; background: rgb(168, 233, 192)">
      <div style="display: flex; width: 100vw; padding: 40px; color: white;">
        <h1 style="font-size: 60px; font-weight: 600; margin: 0; font-family: 'Bitter'; font-weight: 500">${title}</h1>
      </div>
    </div>
   `;

  return new ImageResponse(html, {
    width: 1200,
    height: 630,
  });
})

export default app
