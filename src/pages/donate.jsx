import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import React, { useState,Fragment, useRef } from 'react';
import axios from 'axios';
import { Dialog, Transition } from '@headlessui/react';


export default function donate({open,setOpen}){
  initMercadoPago(`TEST-897868da-9f7b-431b-a52e-cd45920b6e2b`)
  
  const [preferenceId, setPreferenceId] = useState(false);
  const [amount, setAmount] = useState(0);
  const cancelButtonRef = useRef(null)
  const handleDonation = async (amount) => {
      try {
          const response = await axios.post('http://localhost:8000/donate', {
              unit_price: amount,
          });
          const preferenceId = response.data.preferenceId;
          setPreferenceId(preferenceId);
          
          setAmount(amount)
      } catch (error) {
          console.error(error);
          // Manejar cualquier error de manera apropiada
      }
  };


    function handleCancel(){
      setPreferenceId(false)
    }

  const customization = {
      visual: {
          buttonBackground: 'white',
          borderRadius: '2rem',
        },
      }

  return (
      
      <Transition.Root show={open} as={Fragment}>
              <Dialog
                as="div"
                className="fixed z-10 inset-0 overflow-y-auto"
                initialFocus={cancelButtonRef}
                onClose={setOpen}>
                <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0">
                    <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-90 transition-opacity" />
                  </Transition.Child>
                  <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
                    &#8203;
                  </span>
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                    enterTo="opacity-100 translate-y-0 sm:scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                    leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                            {preferenceId === false ?
                        <div className='bg-Modal bg-cover bg-fixed bg-center h-screen w-2/4 flex flex-col-reverse justify-between items-center'>
                            <div className='grid grid-cols-2 justify-center items-center w-11/12 h-[40%]'>
                                <div className="flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                    <div className="flex flex-col justify-center items-center">
                                        <h5 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Donate $1000</h5>
                                        <button className='w-[80%] transition duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-[1rem]' onClick={() => handleDonation(1000)}>Donate❤</button>
                                    </div>
                                </div>
                                <div className="flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                    <div className="flex flex-col justify-center items-center">
                                        <h5 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Donate $5000</h5>
                                        <button className='w-[80%] transition duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-[1rem]' onClick={() => handleDonation(5000)}>Donate❤</button>
                                    </div>
                                </div>
                                <div className="flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                    <div className="flex flex-col justify-center items-center">
                                        <h5 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Donate $10000</h5>
                                        <button className='w-[80%] transition duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-[1rem]' onClick={() => handleDonation(10000)}>Donate❤</button>
                                    </div>
                                </div>
                                <div className="flex flex-col shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 md:max-w-xl md:flex-row">
                                    <div className="flex flex-col justify-center items-center">
                                        <h5 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Donate $1000</h5>
                                        <button className='w-[80%] transition duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-[1rem]' onClick={() => handleDonation(1000)}>Donate❤</button>
                                    </div>
                                </div>
                            </div>
                            <div className='text-white mt-16 w-11/12'>
                            <p className='my-4 text-2xl'>Thanks for your support</p>
                            <p className=''>The use of your donation will be for the maintenance of the page, adding new comics and operations, we also look for the best performance so that you can enjoy the use of our website.</p>
                            </div>
                        </div>
                        : (
                            <div className=" flex flex-col text-black h-screen w-2/4 justify-center items-center">
                                <div className='bg-[url(https://i.pinimg.com/564x/40/d9/2d/40d92d7d5641041445bf9d32da993229.jpg)] bg-no-repeat bg-cover drop-shadow-md w-full h-[80%] rounded-[2rem] border-2 border-gray-300 bg-gray-300 flex flex-col justify-center items-end pr-[1%] '>
                                    <div className='flex flex-col items-center w-full'>
                                        <p className='w-[25vw] font-extrabold text-white text-[2rem]'>Are you about to donate ${amount}?</p>
                                        <Wallet initialization={{ preferenceId: preferenceId, redirectMode: 'modal' }} customization={customization} />
                                        <button className='transition duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-[1rem] w-[10vw] ' onClick={handleCancel}>Cancel</button>
                                    </div>
                                </div>
                            </div>
                        )}
                  </Transition.Child>
                </div>
              </Dialog>
            </Transition.Root> 
    )}
 
