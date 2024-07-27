import { animated, useSpring } from '@react-spring/web'
import { x } from '@xstyled/styled-components'
import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6'
import { useRecoilState } from 'recoil'
import { isOpenSidebarState } from '~/state/isOpenSidebarState'

export const ToggleSidebarButton = () => {
  const [isOpenSidebar, setIsOpenSidebar] = useRecoilState(isOpenSidebarState)
  const buttonPositionProps = useSpring({ left: isOpenSidebar ? 145 : 10 })

  const toggleSidebar = () => {
    setIsOpenSidebar((cur) => !cur)
  }

  return (
    <animated.div
      style={{ ...buttonPositionProps, position: 'fixed', bottom: '10px' }}
    >
      <x.div
        p="12px"
        backgroundColor={{
          _: 'white',
          hover: 'gray',
        }}
        color={{
          _: 'black',
          hover: 'white',
        }}
        borderRadius="6px"
        cursor="pointer"
        onClick={toggleSidebar}
      >
        {isOpenSidebar ? <FaArrowLeftLong /> : <FaArrowRightLong />}
      </x.div>
    </animated.div>
  )
}
