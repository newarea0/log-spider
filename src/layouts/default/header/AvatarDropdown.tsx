import { LogoutOutlined } from '@ant-design/icons'
import { history, useModel } from '@umijs/max'
import { Dropdown } from 'antd'
import React, { useCallback } from 'react'
import { flushSync } from 'react-dom'
import { logout } from '@/apis/auth/login'
import { PageEnum } from '@/enums/pageEnum'
import { removeToken } from '@/utils/auth'

const AvatarDropdown: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { setInitialState } = useModel('@@initialState')

  const handleLogout = async () => {
    await logout()
    removeToken()
    history.push(PageEnum.BASE_LOGIN)
  }

  const onMenuClick = useCallback(
    async (event: any) => {
      const { key } = event
      if (key === 'logout') {
        await handleLogout()
        flushSync(() => {
          setInitialState(s => ({
            ...s,
            token: undefined,
            roles: undefined,
            permissions: undefined,
            userInfo: undefined,
          }))
        })
      }
    },
    [setInitialState],
  )

  return (
    <>
      <Dropdown
        menu={{
          onClick: onMenuClick,
          items: [
            {
              key: 'logout',
              icon: <LogoutOutlined />,
              label: '退出登录',
            },
          ],
        }}
      >
        {children}
      </Dropdown>
    </>
  )
}

export default AvatarDropdown
