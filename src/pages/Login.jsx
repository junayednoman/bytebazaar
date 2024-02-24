import { useForm } from 'react-hook-form';
import Container from '../components/Container';
import SocialLogin from '../components/SocialLogin';
import useContextInfo from '../custom hooks/useContextInfo';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import loadingImg from "../assets/loading.gif"


const Login = () => {
    const { signIn, user, authLoading } = useContextInfo();
    const navigate = useNavigate();
    const { handleSubmit, register, formState: { errors }, reset } = useForm();
    useEffect(() => {
        if (user) {
            return navigate('/')
        }
    }, [user, navigate]);
    if (authLoading) {
        return (
            <div className='min-h-screen flex justify-center items-center'>
                <img src={loadingImg} alt="" />
            </div>
        );
    }
    const handleSignIn = (data) => {
        signIn(data.email, data.password)
            .then(res => {
                console.log(res);
                if (res.user) {
                    toast.success("User has logged in successfully!", {
                        autoClose: 1500
                    })
                    navigate("/")
                }
            })
            .catch(err => {
                toast.error(err.message, {
                    autoClose: 1700
                })
            })
        reset();
    }
    return (
        <div className={`bg-[url(/login-bg.jpg)] bg-cover bg-no-repeat bg-center`}>
            <div className='bg-[#ccccccb6] h-screen flex justify-center items-center'>
                <Container>
                    <div className='md:p-20 p-8 md:px-40 px-20 rounded-md bg-white w-[800px]'>
                        <h4 className='text-4xl font-semibold text-primaryColor'>SIGN IN</h4>
                        <p className='font-medium'>Enter your email and password to login</p>
                        <form onSubmit={handleSubmit(handleSignIn)} className='mt-8'>
                            <div className='mb-4'>
                                <label htmlFor="email" className='mb-1 block'>Email</label>
                                <input {...register("email", {
                                    required: "Email is required",
                                    pattern: {
                                        value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}[a-zA-Z]*$/,
                                        message: 'Invalid email address',
                                    },
                                })}
                                    className={`w-full border rounded-md py-2 pl-4 ${!errors?.name && errors?.email ? "outline-red-600 border-red-600" : 'outline-primaryColor'}`} id='email' type="text" placeholder='Enter your email' aria-invalid={errors.email ? "true" : "false"} />
                                {!errors?.name && errors?.email && (
                                    <p className='text-red-600 mt-[5px] text-[15px]'>{errors.email.message}</p>
                                )}
                            </div>
                            <div className='mb-4'>
                                <label htmlFor="password" className='mb-1 block'>Password</label>
                                <input {...register("password", {
                                    required: "Password is required"
                                })} className={`w-full border rounded-md py-2 pl-4 ${!errors?.name && !errors?.email && errors?.password ? "outline-red-600 border-red-600" : 'outline-primaryColor'}`} id='password' type="password" placeholder='Enter your password' />
                                {!errors?.name && !errors?.email && errors?.password && (
                                    <p className='text-red-600 mt-[5px] text-[15px]'>{errors.password.message}</p>
                                )}
                            </div>
                            {errors.exampleRequired && <span>This field is required</span>}
                            <input className='w-full bg-primaryColor text-white px-5 py-2 rounded-md text-[14px] hover:bg-[#011962] duration-200 inline-block text-center cursor-pointer uppercase' type="submit" value="sign in" />
                        </form>
                        <SocialLogin link="/sign-up" text="sign up"></SocialLogin>
                    </div>
                    <ToastContainer />
                </Container>
            </div>
        </div>
    );
};

export default Login;