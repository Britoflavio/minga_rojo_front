import { initMercadoPago, Wallet } from '@mercadopago/sdk-react';
import { Fragment,  useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dialog, Transition } from '@headlessui/react';
import { donate } from "../store/actions/donate";

export default function DonateMP({ open, setOpen }) {
    initMercadoPago(`TEST-897868da-9f7b-431b-a52e-cd45920b6e2b`);

    const [selectedAmount, setSelectedAmount] = useState(0);
    const [donateClicked, setDonateClicked] = useState(false);
    const preferenceId = useSelector((state) => state.donate.preferenceId);
    const dispatch = useDispatch();


  /* useEffect(() => {}, []); */

    const donationArray = [1000, 5000, 10000, 15000,20000]; // Agrega tu array de donación aquí

    const handleCancel = ()=>{
        setOpen(false)
    }

    const handleDonation = (amount) => {
        setSelectedAmount(amount);
        setDonateClicked(true);
        dispatch(donate(amount));
    };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
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
            { donationArray ? (
              donateClicked ? (
                <div className="flex flex-col text-black h-screen w-2/4 justify-center items-center">
                  <div className='bg-[url(https://i.pinimg.com/564x/40/d9/2d/40d92d7d5641041445bf9d32da993229.jpg)] bg-no-repeat bg-cover drop-shadow-md w-full h-[80%] rounded-[2rem] border-2 border-gray-300 bg-gray-300 flex flex-col justify-center items-end pr-[1%] '>
                    <div className='flex flex-col items-center w-full'>
                      <p className='w-[25vw] font-extrabold text-white text-[2rem]'>Are you about to donate ${selectedAmount}?</p>
                      <Wallet initialization={{ preferenceId: preferenceId?.toString(), redirectMode: 'modal' }} />
                      <button className='transition duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-[1rem] w-[10vw] ' onClick={handleCancel}>Cancel</button>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='bg-Modal bg-cover bg-fixed bg-center h-screen w-2/4 flex flex-col-reverse justify-between items-center'>
                  <div className="grid grid-cols-2 justify-center items-center w-11/12 h-[40%]">
                    {donationArray.map((price) => (
                      <div className="flex flex-col justify-center items-center" key={price}>
                        <h5 className="mb-2 text-xl font-medium text-white dark:text-neutral-50"> Donate ${price}</h5>
                        <button className="w-[80%] transition duration-300 ease-in-out bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-[1rem]" onClick={() => handleDonation(price)}>
                          Donate❤
                        </button>
                      </div>                     
                    ))}
                  </div>
                  <div className='text-white mt-16 w-11/12'>
                    <p className='my-4 text-2xl'>Thanks for your support</p>
                    <p className=''>The use of your donation will be for the maintenance of the page, adding new comics and operations, we also look for the best performance so that you can enjoy the use of our website.</p>
                  </div>
                </div>
              )
            ) : (
              <div>Loading...</div>
            )}
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}