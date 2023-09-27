import { useForm, ValidationError } from "@formspree/react";
import Yeti from "../components/Yeti";


export default function ContactForm() {
  const [state, handleSubmit] = useForm(process.env.NEXT_PUBLIC_FORMSPREE_ID as string);

  
    return (
        <>
           
          <div id="contact" className="flex flex-col rounded-lg justify-center items-center min-h-screen ">
          
          <div className="mb-4 flex flex-col items-center">
          <Yeti />
          <h1 className="text-4xl text-gray-300 font-bold mt-4">Contactez moi</h1>
        </div>
            {state.succeeded && <p className="text-green-300 mb-4">Merci! Votre message a bien été envoyé. Je suis impatient de collaborer avec vous.</p>}
            <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg w-full md:w-1/2 lg:w-1/3 xl:w-1/4 shadow-lg">
              <div className="flex flex-col space-y-3">
                <label htmlFor="email" className="text-gray-300 text-sm font-medium">Email</label>
                <input id="email" type="email" name="email" className="p-2 bg-gray-700 text-gray-300 border rounded-md" />
                <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-400 text-xs" />
              </div>
              
              <div className="flex flex-col space-y-3">
                <label htmlFor="message" className="text-gray-300 text-sm font-medium">Message</label>
                <textarea id="message" name="message" className="p-2 bg-gray-700 text-gray-300 border rounded-md h-24"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-400 text-xs" />
              </div>
              
              <div className="flex justify-end mt-4">
                <button type="submit" disabled={state.submitting} className="bg-gray-600 text-gray-300 p-2 rounded-md hover:bg-gray-500">
                  Submit
                </button>
              </div>
      
              <ValidationError errors={state.errors} className="text-red-400 text-xs" />
            </form>
          </div>
        </>
      );
    }