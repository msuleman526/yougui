import React, { useEffect, useState } from 'react'
import { ConfigProvider, Layout, theme } from 'antd'
import Sidebar from '../components/layout/Sidebar'
import LayoutHeader from '../components/layout/LayoutHeader'
import { Outlet } from 'react-router-dom'
import { themeState } from '../atom'
import { useRecoilState } from 'recoil'
import {
  dashboardDarkTheme,
  dashboardLightTheme,
} from '../theme/dashboardTheme'
const { Content } = Layout

const DashboardLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false)
  const [theme, setTheme] = useRecoilState(themeState)

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])


  return (
    <ConfigProvider
      theme={{
        components: theme === 'dark' ? dashboardDarkTheme : dashboardLightTheme,
        token: {
          colorPrimary: '#2C87EA',
          boxShadowCard: theme === 'dark' ? '0 1px 3px rgba(0, 0, 0, 0.8)' : '0 4px 8px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
        },
      }}
    >
      <Layout style={{ minHeight: '100vh' }}>
        <Sidebar collapsed={collapsed} />
        <Layout>
          <LayoutHeader
            toggleTheme={toggleTheme}
            theme={theme}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
          <Content className="layout-content">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </ConfigProvider>
  )
}
export default DashboardLayout
