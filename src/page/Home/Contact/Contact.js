import { useForm } from "react-hook-form";
import './contact.scss';
import twitter from '../../../assets/images/twitter.png';
import telegram from '../../../assets/images/telegram.png';
import youtube from '../../../assets/images/youtube.png';
import facebook from '../../../assets/images/facebook.png';
import linktree from '../../../assets/images/linktree.png';
import Newsletter from "./newsletter";
import Captcha from "../Captcha/Captcha";

function Contact() {
	const { register, handleSubmit } = useForm();
	// const onSubmit = (data, e) => console.log(data, e);
	// const onError = (errors, e) => console.log(errors, e);

    const matchCaptcha =(e)=> {
        const captchaInput = e.target.value
        const mainCaptcha = e.target.nextSibling.children[1].innerHTML
        const getBtn = document.getElementById('response_msg_contact').nextSibling;
        const captchaErr = document.getElementById('response_msg_contact').previousSibling;
        if(captchaInput == mainCaptcha){
            getBtn.removeAttribute('disabled')
            captchaErr.style.display = "none";
        } else {
            getBtn.setAttribute('disabled', 'disabled')
            captchaErr.style.display = "block";
        }
    }
    const contactForm =(data)=> {
        const statusMessage = document.getElementById('response_msg_contact'),
              getForm = document.getElementById('contact-form');
        const requestOptions = {
          method: 'POST',
          mode: 'no-cors',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        };
      fetch('https://www.nftshootout.com/api/contactusapi.php', requestOptions)
      .then(response => {
          if(!response.ok) {
            getForm.reset();
            statusMessage.innerHTML = 'Thank you for your interest.';
            statusMessage.classList = "success"
          } else {
            statusMessage.innerHTML = 'Network response was not OK';
            statusMessage.classList = "error"
           
          }
          return response.blob();
      })
      .catch(error => {
        statusMessage.innerHTML = error;
        statusMessage.classList = "error"
      });
        
    }
  return (
    <div className='contact-wrapper'>
        <div className='container flex flex-wrap'>
            <div className='contact-details'>
                <h2>Contact us</h2>
                <div className='contact-detail address'>
                    <h4>Address</h4>
                    <p>NFTshootout.com, Favia Investment INC Suit 1<br/>
                        Second Floor, Sound &amp; Rachel Str., Victoria<br/>
                        Mahe, Seychelles</p>
                </div>
                <div className='contact-detail email'>
                    <h4>Email</h4>
                    <p><a href="mailto:contact@nftshootout.com">contact@nftshootout.com</a></p>
                </div>
                <div className='contact-detail website'>
                    <h4>Website</h4>
                    <p><a href="/">www.NFTshootout.com</a></p>
                </div>

                <div className="socialicons">
                    <ul>
                        <li><a href="https://twitter.com/NfTshootout"><img src={twitter} alt="Join our NFTshootout.com Twitter" title="Join our NFTshootout.com Twitter" width="79" height="79" loading="lazy" /></a></li>
                        <li><a href="https://t.me/NFTShootout"><img src={telegram} alt="Join our official NFTshootout Telegram group" title="Join our official NFTshootout Telegram group" width="79" height="79" loading="lazy" /></a></li>
                        <li><a href="https://www.youtube.com/channel/UCtCbdo5Q-acSubq_IPSMxlQ"><img src={youtube} alt="Watch our NFT and gaming promotions on YouTube" title="Watch our NFT and gaming promotions on YouTube" width="79" height="79" loading="lazy" /></a></li>
                        <li><a href="https://www.facebook.com/nftshootout"><img src={facebook} alt="Join our NFTshootout.com Facebook" title="Join our NFTshootout.com Facebook" width="79" height="79" loading="lazy" /></a></li>
                        <li><a href="https://linktr.ee/NFTShootOut"><img src={linktree} alt="Join our NFTshootout.com LinkTree" title="Join our NFTshootout.com LinkTree" width="79" height="79" loading="lazy" /></a></li>
                    </ul>
                </div>

                <Newsletter/>
            </div>
            <div className='contact-form'>
                <form id="contact-form" encType='multipart/form-data' onSubmit={handleSubmit(contactForm)}>
                    <div className="fbg">
                        <h2>get in touch</h2>
                        <div id="response"></div>
                        <input type="text" 
                            id="fname" 
                            name="fname" 
                            placeholder="Full name" 
                            className="fieldstyle" 
                            required={true}
                            {...register("first_name", { required: true, message: 'this is required' })} />
                        <input type="email" 
                            id="email_address" 
                            name="email_address" 
                            placeholder="Email" 
                            className="fieldstyle" 
                            required={true}
                            {...register("email_address", { required: true })} />
                        <textarea rows="4" 
                            cols="15" 
                            id="message" 
                            name="message" 
                            placeholder="Message" 
                            className="fieldstyle height"
                            {...register("message", { required: true })}></textarea>
                        <input type="file" 
                            id="upload-file" 
                            name="picture" 
                            className="fieldstyle file-upload"
                            {...register("file_attach")}
                            // ref={register}
                        />
                        <input type="text" 
                            name="captcha" 
                            id="captcha" 
                            placeholder="Enter Captcha"
                            className="fieldstyle" 
                            required={true} 
                            autoComplete="off"
                            onInput={matchCaptcha}
                            {...register("captcha", {
                                required: true
                            })} 
                        />                     
                        <Captcha />
                        <div id="response_msg_contact"></div>
                        <button type="submit" className='btn-yellow' id="submit" disabled defaultValue="Submit">Submit</button>
                        <div id="response_msg_scholar"></div>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
export default Contact;