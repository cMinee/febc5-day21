import React from 'react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import Button from '../Button'

interface RegisterForm {
    username: string
    password: string
    confirmPassword: string
    email: string
    firstName: string
    lastName: string
}

function Login() {
    // prop = value ค่าที่ส่งให้ component
    // state = สถานะของ component มีdata type เปนไรก็ได้

    // use state
    // const [username, setUsername] = useState<string>("")
    // const [password, setPassword] = useState<string>("")
    // const handleSubmitted = (event: React.FormEvent<HTMLFormElement> ) => {
    //     event.preventDefault()
    //     console.log(username)
    //     console.log(password)
    // }
    // const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setUsername(event.target.value)
    //     console.log(username)
    // }
    // const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setPassword(event.target.value)
    //     console.log(password)
    // }

    const { register, handleSubmit } = useForm<RegisterForm>();
    const onSubmit = (data: RegisterForm) => {
        console.log(data);
    }
    return (
        <div>
            {/* <form onSubmit={handleSubmitted}>
                <div>
                    <label htmlFor="usernameInput">
                        Username
                    </label>
                    <input onChange={handleUsernameChange} type="text" name="username" id="usernameInput" />
                </div>
                <div>
                    <label htmlFor="passwordInput">
                        Password
                    </label>
                    <input onChange={handlePasswordChange} type="password" name="password" id="passwordInput" />
                </div>
                <input type="Submit" value="Submit" />
            </form> */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="username">Username</label>
                <input {...register("username", { required: true , maxLength: 20})} type="text" id='username' required />
                <input {...register("firstName")} type="text" id='firstName' />
                <input {...register("lastName")} type="text" id='lastName' /> 
                <input {...register("email")} type="email" id='email' />
                <input {...register("password")} type="password" id='password' />
                <input {...register("confirmPassword")} type="password" id='password' />
                <input type="submit" value='Submit' />

            </form>
        </div>
    );
}

export default Login