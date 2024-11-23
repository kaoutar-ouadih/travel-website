import { useState, FormEvent } from "react";

const ContactForm = () => {
    const [email, setEmail]= useState("");
    const [message, setMessage]= useState("");
    const [isSendBtnClicked, setIsSendBtnClicked]= useState(false);
    const emailPattern = /^([a-z\d.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

    function handleSubmit(e: FormEvent){
        e.preventDefault();
        setIsSendBtnClicked(true);
        if(emailPattern.test(email) && message.length>0){
            // send data to the backend for authentication
            // reset the form
            setEmail('');
            setMessage('');
            setIsSendBtnClicked(false);
        }
    }

  return (
    <div>
        <div className="flex flex-col justify-center items-center mt-28 mb-44">
            <h1 className="font-bold text-3xl mb-4">Get in touch</h1>
            <p className="w-[360px] sm:w-[400px] text-center mb-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra</p>
            <div className="w-[360px] sm:w-[400px]">
                <form onSubmit={(e)=> handleSubmit(e)} noValidate>
                    <label htmlFor="email" className="block font-semibold">Email address</label>
                    <div className="mt-2 mb-5">
                        <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} className="w-full h-12 p-3 bg-lightGray rounded-md" id="email" />
                        {isSendBtnClicked && !emailPattern.test(email) && <span className="text-red text-sm block mt-1">Email format not valid</span>}
                    </div>
                    <label htmlFor="message" className="block font-semibold">Message</label>
                    <div className=" mt-2 mb-6">
                        <textarea rows={5} value={message} onChange={(e)=> setMessage(e.target.value)} className="resize-none w-full p-3 bg-lightGray rounded-md" id="message" ></textarea>
                        {isSendBtnClicked && (message.length<=0) && <span className="text-red text-sm block mt-1">This field is required</span>}
                    </div>
                    <button type="submit" className="text-white bg-lightBlue w-full p-3 rounded-md mb-7 tracking-wider">Send</button>
                </form>
            </div>
        </div>
      
    </div>
  )
}

export default ContactForm
