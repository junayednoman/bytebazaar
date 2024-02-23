import Btn from '../components/Btn';
import Container from '../components/Container';
import SocialLogin from '../components/SocialLogin';


const Login = () => {
    return (
        <div className={`bg-[url(/login-bg.jpg)] bg-cover bg-no-repeat bg-center`}>
            <div className='bg-[#ccccccb6] h-screen flex justify-center items-center'>
                <Container>
                    <div className='md:p-20 p-8 md:px-40 px-20 rounded-md bg-white w-[800px]'>
                        <h4 className='text-4xl font-semibold text-primaryColor'>SIGN IN</h4>
                        <p className='font-medium'>Enter your email and password to login</p>
                        <form className='mt-8'>
                            <div className='mb-4'>
                                <label htmlFor="email" className='mb-1 block'>Email</label>
                                <input className='w-full border rounded-md py-2 pl-4 focus:outline-primaryColor' id='email' type="email" placeholder='Enter your email' />
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="password" className='mb-1 block'>Password</label>
                                <input className='w-full border rounded-md py-2 pl-4 focus:outline-primaryColor' id='password' type="password" placeholder='Enter your password' />
                            </div>
                            <Btn text="sign in" fullWidth={true}></Btn>
                        </form>
                        <SocialLogin></SocialLogin>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Login;