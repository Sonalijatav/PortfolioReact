import './ContactMe.css'
const ContactMe = ()  => {
    
    return (
        <div className='contact-page'>

            <div className='headings'>
              <h1>Contact Me</h1>
              <h2>Put your questions, thoughts, or just say hello!</h2>
            </div>

            <div className='detail-form'>
             <form>
                <input  type="text" placeholder="Enter your name" />
                <input  type="email" placeholder="Enter email address" />
                <input  type="text" placeholder="Enter your subject" />
                
                <textarea placeholder="Enter your message"/>
             </form>

            </div>

            <div>
               <button className="btn-s">Send Message</button>
            </div>
        </div>
    )

};

export default ContactMe;