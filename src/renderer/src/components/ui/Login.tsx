import { Button, Divider, Form, Input, Typography } from "antd"
// import { useAppDispatch } from "@renderer/redux/hook";
// import { login } from "@renderer/redux/reducer/auth";
import { RiLockLine, RiLoginCircleLine, RiUser3Line } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

// type TLoginPayload = {
//     user: string,
//     password: string
// }

type TLoginProps = {
    apps?: string,
    handleLogin?: (params: Record<any, any>) => void
}

// type TLoginUseControl = {
//     apps: string
// }

// const useControl = ({ apps }: TLoginUseControl) => {
//     const dispatch = useAppDispatch();
//     const handleLogin = (values: TLoginPayload) => dispatch(login({ ...values, app: apps }));
//     return { handleLogin }
// }

const FormItems = () => {
    return <div style={{ paddingInline: 24 }}>
        <Form.Item name={'user'} label="Username" rules={[{ required: true, message: 'Username Required' }]}>
            <Input autoFocus placeholder='Username' prefix={<RiUser3Line />} />
        </Form.Item>
        <Form.Item name={'password'} label="Password" rules={[{ required: true, message: 'Password Required' }]}>
            <Input.Password placeholder='Password' prefix={<RiLockLine />} />
        </Form.Item>
        <Button
            icon={<RiLoginCircleLine style={{ marginInline: 5 }} />}
            block
            htmlType="submit"
        >
            Login
        </Button>
    </div>

}

export default function Login({ apps = "dashboard", handleLogin, }: TLoginProps) {
    const navigate = useNavigate()
    return (
        <Form
            layout='vertical'
            labelAlign='left'
            onFinish={handleLogin}
        >
            <Typography.Title type='secondary' level={2} style={{ textAlign: 'center' }}>Login To {apps}</Typography.Title>
            <Divider style={{ margin: '8px 0' }} />
            <FormItems />
            <Button onClick={() => navigate("/")}>Home</Button>
        </Form>
    )
}
