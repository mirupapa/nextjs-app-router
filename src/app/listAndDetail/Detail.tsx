import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { FaArrowRightLong } from 'react-icons/fa6'
import { mockListAndDetailData } from '~/app/listAndDetail/mockListAndDetailData'
import { css } from '../../../styled-system/css'

export const Detail = ({ detailId }: { detailId: string }) => {
  const push = useRouter().push

  const data = mockListAndDetailData.find(
    (user) => user.id === Number(detailId)
  )

  if (!data) {
    return null
  }

  return (
    <div
      className={css({
        backgroundColor: 'white',
        height: '100vh',
        borderLeft: '2px solid #333',
        padding: '24px',
        width: '500px',
      })}
    >
      <img
        src={data.avatar}
        className={css({
          width: '200px',
          height: '200px',
          objectFit: 'cover',
        })}
      />
      <p> username: {data.username}</p>
      <p> birthdate: {dayjs(data.birthdate).format('YYYY-MM-DD')}</p>
      <p> email: {data.email}</p>
      <p> registeredAt: {dayjs(data.registeredAt).format('YYYY-MM-DD')}</p>

      <div
        className={css({
          w: '44px',
          p: '12px',
          backgroundColor: 'white',
          color: 'black',
          _hover: {
            backgroundColor: 'gray',
            color: 'white',
          },
          border: '2px solid black',
          borderRadius: '6px',
          cursor: 'pointer',
          position: 'absolute',
          left: '10px',
          bottom: '10px',
        })}
        onClick={() => push('/listAndDetail')}
      >
        <FaArrowRightLong />
      </div>
    </div>
  )
}
