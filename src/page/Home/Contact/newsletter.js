import { useForm } from "react-hook-form";

export default function Newsletter() {

	const { register, handleSubmit } = useForm();
    
    const subscribeForm =(data)=> {
			const statusMessage = document.getElementById('response_msg_newsletter'),
            getForm = document.getElementById('newletter-form');
    	const requestOptions = {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(data)
      };
      fetch('https://nftshootout.com/api/submission.php', requestOptions)
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
        // console.error('There has been a problem with your fetch operation:', error);
    });
        
    }
  return (
    <div className="join-newsletter">
        <h4>Subscribe to our newsletter with a chance to win a FREE NFT</h4>
        <form id="newletter-form" onSubmit={handleSubmit(subscribeForm)}>
            <div className='flex items-center flex-wrap'>
                <input type="email" 
                    id="emailaddress" 
                    name="emailaddress" 
                    placeholder="Email id" 
                    className="fieldstyle"
                    required={true}
                    {...register('emailaddress' , {required: true})}
                />
                <button type="submit" className='btn-yellow' id="subscribe" defaultValue="Subscribe">Subscribe</button>
            </div>
						<div id="response_msg_newsletter"></div>
        </form>
    </div>
  )
}
