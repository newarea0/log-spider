import { KeyOutlined, LockOutlined, UserOutlined } from '@ant-design/icons'
import { LoginForm, ProFormCheckbox, ProFormText } from '@ant-design/pro-components'
import { useModel, useRequest } from '@umijs/max'
import { App, Space } from 'antd'
import { flushSync } from 'react-dom'
import { sm2 } from 'sm-crypto'
import { captchaImage, login } from '@/apis/auth/login'
import type { LoginParams } from '@/apis/auth/login'
import { PageEnum } from '@/enums/pageEnum'
import { Footer } from '@/layouts/default'
import { setToken } from '@/utils/auth'

function rsaPublicData(data: string) {
  // publicKey 为sm2的公钥，公钥用来加密，私钥用来解密
  // 示例对应的私钥为 74a89d4e78dd999a1882e0202566ee8971464eaf097dede170c86ad683e6e751  用来给后端解密用
  // const keypair = sm2.generateKeyPairHex()
  // const publicKey = keypair.publicKey // 公钥
  // const privateKey = keypair.privateKey // 私钥
  const publicKey
    = '0411267aeb4e7b6aff773127fd360600ae1f96311ef5e18086165e1887c3c52a9e0d8622dc615aec704fb04f3f253881d3f72fd506b3c8071c589ceb92f1d9a2f1'
  const cipherMode = 1
  // data为加密的数据
  return sm2.doEncrypt(data, publicKey, cipherMode)
}

function Login() {
  const { message } = App.useApp()
  const { initialState, setInitialState } = useModel('@@initialState')
  const { data: captcha, run: runCaptchaImage } = useRequest(captchaImage)

  const fetchUserInfo = async (): Promise<void> => {
    const userInfo = await initialState?.fetchUserInfo?.()
    if (userInfo) {
      flushSync(() => {
        setInitialState(s => ({
          ...s,
          ...userInfo,
        }))
      })
    }
  }

  const handleLogin = async (values: LoginParams) => {
    try {
      const res = await login({
        ...values,
        password: rsaPublicData(values.password),
        uuid: captcha?.uuid,
      })
      setToken(res)
      await fetchUserInfo()
      message.loading('登录中...')
      window.location.href = PageEnum.BASE_HOME
    } catch (error: any) {
      message.error(error.message || '登录失败，请重试！')
      if (error.message === '验证码错误') runCaptchaImage()
    }
  }

  return (
    <div className="flex flex-col justify-center h-[100vh]">
      <div>
        <LoginForm title="LogSpider" subTitle="日志分析处理平台" onFinish={handleLogin}>
          <ProFormText
            name="accountNo"
            initialValue="admin"
            fieldProps={{
              size: 'large',
              prefix: <UserOutlined className="prefixIcon" />,
            }}
            placeholder="用户名"
            rules={[
              {
                required: true,
                message: '请输入用户名!',
              },
            ]}
          />
          <ProFormText.Password
            name="password"
            initialValue="Aa@123456"
            fieldProps={{
              size: 'large',
              prefix: <LockOutlined className="prefixIcon" />,
            }}
            placeholder="密码"
            rules={[
              {
                required: true,
                message: '请输入密码！',
              },
            ]}
          />
          {captcha
            ? (
              <Space>
                <ProFormText
                  name="code"
                  fieldProps={{
                    size: 'large',
                    prefix: <KeyOutlined className="prefixIcon" />,
                    autoFocus: true,
                  }}
                  placeholder="验证码"
                  rules={[
                    {
                      required: true,
                      message: '请输入验证码!',
                    },
                  ]}
                />
                <img
                  className="flex cursor-pointer mb-[24px] h-10"
                  src={`data:image/gif;base64,${captcha.img}`}
                  onClick={runCaptchaImage}
                />
              </Space>
              )
            : null}
          <div className="mb-5">
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a className="float-right">忘记密码</a>
          </div>
        </LoginForm>
      </div>
      {/* <Footer /> */}
    </div>
  )
}

export default Login
