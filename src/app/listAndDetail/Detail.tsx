import { x } from '@xstyled/styled-components'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { FaArrowRightLong } from 'react-icons/fa6'
import { mockListAndDetailData } from '~/app/listAndDetail/mockListAndDetailData'

export const Detail = ({ detailId }: { detailId: string }) => {
  const push = useRouter().push

  const data = mockListAndDetailData.find(
    (user) => user.id === Number(detailId)
  )

  if (!data) {
    return null
  }

  return (
    <x.div
      backgroundColor="white"
      h="100vh"
      borderLeft="2px solid #333"
      p="24px"
      w="500px"
    >
      <x.img src={data.avatar} w="200px" h="200px" objectFit="cover" />
      <x.p> username: {data.username}</x.p>
      <x.p> birthdate: {dayjs(data.birthdate).format('YYYY-MM-DD')}</x.p>
      <x.p> email: {data.email}</x.p>
      <x.p> registeredAt: {dayjs(data.registeredAt).format('YYYY-MM-DD')}</x.p>

      <x.div
        w="44px"
        p="12px"
        backgroundColor={{
          _: 'white',
          hover: 'gray',
        }}
        color={{
          _: 'black',
          hover: 'white',
        }}
        border="2px solid black"
        borderRadius="6px"
        cursor="pointer"
        position="absolute"
        left="10px"
        bottom="10px"
        onClick={() => push('/listAndDetail')}
      >
        <FaArrowRightLong />
      </x.div>
    </x.div>
  )
}
