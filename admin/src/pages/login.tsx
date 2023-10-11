import { useEffect } from 'react';

import {
  Button,
  Card,
  Checkbox,
  ConfigProvider,
  Form,
  Input,
  Typography,
  theme,
} from 'antd';
import { toast } from 'react-hot-toast';
import { AiOutlineLock, AiOutlineUser } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useReadLocalStorage, useSessionStorage } from 'usehooks-ts';

import { COLOR, DASHBOARD_PATH } from '@/data';
import { LoginValues, useAuthStore, useLoginMutation } from '@/features/auth';
import { validator, validatorFn } from '@/utils';

type Values = LoginValues & {
  isSaved?: boolean;
};

const Login = () => {
  const navigate = useNavigate();

  const { token, loginUser } = useAuthStore((state) => ({
    token: state.token,
    loginUser: state.loginUser,
  }));
  const [savedData, setSavedData] = useSessionStorage<
    Partial<Values> | undefined
  >('savedData', {
    isSaved: false,
  });

  const tokenLocal = useReadLocalStorage('token');

  const [login] = useLoginMutation();

  const onSubmit = (values: Values) => {
    const { isSaved, ...formValues } = values;
    setSavedData(
      isSaved
        ? values
        : {
            isSaved: false,
          },
    );
    void login({
      variables: { body: formValues },
      onCompleted: (data) => {
        void loginUser(data?.login);
      },
      onError: () => {
        void toast.error('Username hoặc mật khẩu không đúng');
      },
    });
  };

  useEffect(() => {
    if (token || tokenLocal) {
      navigate(DASHBOARD_PATH, { replace: true });
    }
  }, [navigate, token, tokenLocal]);

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
        token: {
          colorPrimary: COLOR.LOGIN_BG,
          colorTextPlaceholder: COLOR.LOGIN_BG,
          colorText: COLOR.LOGIN_BG,
        },
      }}
    >
      <div
        className="h-screen w-full flex justify-center"
        style={{
          backgroundColor: COLOR.LOGIN_BG,
        }}
      >
        <div className="grid w-3/4 md:w-3/5 lg:w-2/5 h-3/4">
          <StyledCard>
            <Typography className="mb-10 text-2xl font-semibold">
              Dev Blog
            </Typography>
            <Form initialValues={savedData} onFinish={onSubmit}>
              <Form.Item name="username" rules={validator('required')}>
                <Input
                  prefix={<AiOutlineUser />}
                  size="large"
                  placeholder="Tên đăng nhập"
                />
              </Form.Item>

              <Form.Item
                name="password"
                rules={validator(['required', 'noWhiteSpace']).concat(
                  validatorFn('minAndMax')(8, 16),
                )}
              >
                <Input.Password
                  prefix={<AiOutlineLock />}
                  placeholder="Mật khẩu"
                  size="large"
                />
              </Form.Item>

              <Form.Item
                name="isSaved"
                valuePropName="checked"
                className="text-left"
              >
                <Checkbox>
                  <span>Nhớ mật khẩu</span>
                </Checkbox>
              </Form.Item>

              <Button htmlType="submit" type="primary" className="group">
                <span className="text-xl font-bold text-black group-hover:text-white">
                  Đăng nhập
                </span>
              </Button>
            </Form>
          </StyledCard>
        </div>
      </div>
    </ConfigProvider>
  );
};

const StyledCard = styled(Card)`
  text-align: center;
  margin: 4vh 2rem 2vh;
  border-radius: 32px;
  box-shadow:
    rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;

  button {
    width: 327px;
    height: 56px;
    border-radius: 36px;
  }

  input {
    font-weight: 700;
  }
`;

export default Login;
