interface ContactFormProps {
    onClose: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="relative rounded-2xl bg-white shadow-lg p-6 w-full md:w-3/4 max-w-3xl">
                <button onClick={onClose} className="absolute top-2 right-2 btn btn-ghost font-bold py-2 px-4 rounded">
                    Fermer
                </button>
                <h2 className="text-2xl font-semibold mb-4">
                    Contactez-moi
                </h2>
                <form>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Nom
                        </label>
                        <input 
                            type="text" 
                            placeholder="Votre nom" 
                            className="input input-bordered input-secondary bg-white w-full" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm bg-white  font-bold mb-2">
                            Email
                        </label>
                        <input 
                            type="email" 
                            placeholder="Votre email" 
                            className="input input-bordered input-secondary bg-white w-full" 
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2">
                            Message
                        </label>
                        <textarea 
                            placeholder="Votre message" 
                            className="input input-bordered bg-white input-secondary w-full" 
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <button 
                            className="btn btn-primary text-white font-bold py-2 px-4 rounded" 
                            type="submit"
                        >
                            Envoyer
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ContactForm;
