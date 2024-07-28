/** @jsxImportSource @emotion/react */
'use client'

import { createEmotionCache, css } from '~/lib/emotion'
import { CacheProvider } from '~/lib/emotion'

const cache = createEmotionCache({ key: 'next' })

export default function Emotion() {
  return (
    <CacheProvider value={cache}>
      <ul
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
        `}
      >
        <li
          css={css`
            display: flex;
            gap: 10px;
          `}
        >
          <label> Color: </label>
          <span
            css={css`
              color: #000;
            `}
          >
            primary
          </span>
          <span
            css={css`
              color: #999;
            `}
          >
            secondary
          </span>
          <span
            css={css`
              color: #f00;
            `}
          >
            alert
          </span>
        </li>
      </ul>
    </CacheProvider>
  )
}
