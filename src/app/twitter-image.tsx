import { ImageResponse } from 'next/og'

export const runtime = 'edge'

export const alt = 'Kittikun Buntoyut - Portfolio'
export const size = {
  width: 1200,
  height: 600,
}

export const contentType = 'image/png'

export default async function TwitterImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          fontFamily: 'Inter, sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
            padding: '40px',
            background: 'rgba(255, 255, 255, 0.1)',
            borderRadius: '20px',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          <h1
            style={{
              fontSize: '64px',
              fontWeight: 'bold',
              color: 'white',
              margin: '0 0 16px 0',
              textAlign: 'center',
            }}
          >
            Kittikun Buntoyut
          </h1>
          <p
            style={{
              fontSize: '28px',
              color: 'rgba(255, 255, 255, 0.9)',
              margin: '0 0 16px 0',
              textAlign: 'center',
              maxWidth: '700px',
            }}
          >
            No Boundary, Make Tomorrow Better than Today
          </p>
          <p
            style={{
              fontSize: '22px',
              color: 'rgba(255, 255, 255, 0.8)',
              margin: '0',
              textAlign: 'center',
            }}
          >
            Computer Science Student | Software Engineer
          </p>
        </div>
        <div
          style={{
            position: 'absolute',
            bottom: '30px',
            right: '30px',
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 0.7)',
          }}
        >
          kittikun.dev
        </div>
      </div>
    ),
    {
      ...size,
    }
  )
}