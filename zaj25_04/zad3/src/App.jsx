// import React, { useState } from 'react';

// function StatusCodes() {
//     const [statusCode, setStatusCode] = useState('');
//     const [message, setMessage] = useState('');

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await fetch(`https://umk-async-api.fly.dev/status/${statusCode}`);
//             if (response.ok) {
//                 setMessage(`Success. Status code: ${response.status}`);
//             } else if (response.status === 404) {
//                 setMessage('Request error');
//             } else {
//                 setMessage('Server error');
//             }
//         } catch (error) {
//             console.error('Error:', error);
//             setMessage('Something went wrong, unable to connect to the server');
//         }
//     };

//     return (
//         <div>
//             <form onSubmit={handleSubmit}>
//                 <label>
//                     Enter status code:
//                     <input
//                         type="number"
//                         value={statusCode}
//                         onChange={(e) => setStatusCode(e.target.value)}
//                         required
//                     />
//                 </label>
//                 <button type="submit">Submit</button>
//             </form>
//             <p>Response: {message}</p>
//         </div>
//     );
// }

// export default StatusCodes;


// src/components/NewsletterForm.js

import React, { useState } from 'react';

function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
      try {
        const response = await fetch('https://umk-async-api.fly.dev/newsletter', {
          method: 'POST',
          body: JSON.stringify({ email }),
        });
    
        const data = await response.text();
    
        if (response.status === 200) {
          setMessage("Dzięki mordo za subskrybcje <3");
        } else if (response.status === 500) {
          setMessage('Mamy jakiś błąd');
        }
      } catch (error) {
        console.error('Error:', error);
        setMessage('Error nieeeeeee');
      } finally {
        setIsLoading(false);
      }
    };
    
  

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Enter your email:
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </label>
        <button type="submit">Subscribe</button>
      </form>
      {isLoading && <p>Loading...</p>}
      {message && <p>{message}</p>}
    </div>
  );
}

export default NewsletterForm;
