import { useForm, ValidationError } from "@formspree/react";
import { useState } from "react";


interface ContactFormProps {
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {

    
 
    const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string);
        const [email, setEmail] = useState('');  // État pour l'email
        const [message, setMessage] = useState(''); // État pour le message
  
    return (
        <form onSubmit={handleSubmit}>
            <div className="fixed inset-0 flex items-center justify-center z-50">
                <div className="relative rounded-2xl bg-white shadow-lg p-6 w-full md:w-3/4 max-w-3xl">
                    <button onClick={onClose} className="absolute top-2 right-2 btn btn-ghost font-bold py-2 px-4 rounded">
                        Fermer
                    </button>
                    {state.succeeded ? (
                        <p className="text-green-500">Merci, votre message a été envoyé avec succès.</p>
                    ) : (
                        <>
                            <h2 className="text-2xl font-semibold mb-4">
                                Contactez-moi
                            </h2>
                   
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm bg-white  font-bold mb-2">
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder="Votre email"
                            name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            className="input input-bordered input-secondary bg-white w-full" 
                        />
                         <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            name="message"
                            value={message}
                            placeholder="Votre message"
                            onChange={e => setMessage(e.target.value)}
                            className="input input-bordered bg-white input-secondary w-full" 
                        />
                          <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                        disabled={state.submitting}
                            className="btn btn-primary text-white font-bold py-2 px-4 rounded" 
                            type="submit"
                        >
                            Envoyer
                        </button>
                        <ValidationError errors={state.errors} className="text-red-400 text-xs" />
                        
                    
                    </div>
                    
                    
                    </>
                    )}
                    </div>
                   
           
        </div>
        </form>
    );
}

export default ContactForm;
