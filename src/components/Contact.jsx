import * as React from 'react'
import Nav from './Nav'
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';

const Contact = () => {

    const form = React.useRef(null);

    // type FormData = {
    //     fullName: string,
    //     email: string,
    //     message: string
    // }

    const { register, handleSubmit, formState : {errors} } = useForm();

    const onSubmit = handleSubmit(async(data)=>{
        console.log(data)
        if(!form.current) return;
        

        try{

            const response = emailjs.sendForm('service_qxsi3m2', 'template_0p9g7cs', form.current, 'txEwSfDmpw9aAHZK9')
            console.log(form.current)
            console.log(response)
            form.current.reset()
        }catch(err){
            console.log(err);
        }
       
    })

    return (
        <div className='App'>
            <Nav />
            <div className="form-container">
                <h1>Contact Me</h1>
                <form className='form' ref={form} onSubmit={onSubmit}>
                    <div className="fullName">
                    <input type="text" name="fullName"
                    placeholder='Full Name' {...register("fullName", {required : "Full Name is required!"})} />
                    {errors?.fullName && <p className='error'>{errors.fullName.message}</p>}
                    </div>

                    <div className="email">
                    <input type="email" name='email'
                     placeholder='Email' {...register("email", {required : "Email is required!"})} />
                    {errors?.email && <p className='error'>{errors.email.message}</p>}
                    </div>

                    <div className="phoneContainer">
                    <input name="phone" className='phone'
                    placeholder='phone' /><br /><br />
                    </div>   

                    <div className="message">
                    <textarea name="message" className='textareaMessage'
                    placeholder='Message' {...register("message", {required : "Message is required!"})}></textarea><br /><br />
                    {errors?.message && <p className='error'>{errors.message.message}</p>}
                    </div>                   
                    <button type='submit' className='submitBtn'>Send Message</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
