import { css } from '../../../styled-system/css'

export default function Home() {
  return (
    <ul
      className={css({
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      })}
    >
      <li
        className={css({
          display: 'flex',
          gap: '10px',
        })}
      >
        <label> Color: </label>
        <span
          className={css({
            color: '#000',
          })}
        >
          primary
        </span>
        <span
          className={css({
            color: '#999',
          })}
        >
          secondary
        </span>
        <span
          className={css({
            color: '#f00',
          })}
        >
          alert
        </span>
      </li>
    </ul>
  )
}
