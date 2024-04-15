import { useState } from 'react';
import axios from 'axios';

function AddContest() {
    const [isOpen, setIsOpen] = useState(false);
    const [contest, setContest] = useState({
        contestName: '',
        timeValidity: '',
        amount: '',
        participationAmount: '',
        numOfSpots: '',
        firstPrize: '',
        contestCode: '',
        platform: '',
    });
    const togglePopup = () => {
        setIsOpen(!isOpen);
    };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setContest((prevState) => ({
            ...prevState,
            [name]: value,
        }));
        console.log(contest);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('https://dream11-privatecontest-com.onrender.com/api/contests', contest);
            setContest({
                contestName: '',
                timeValidity: '',
                amount: '',
                participationAmount: '',
                numOfSpots: '',
                firstPrize: '',
                contestCode: '',
                platform: '',
            });
            togglePopup();


            setTimeout(togglePopup(), 700);
        } catch (err) {
            console.error('Failed to create contest', err);
        }
    };

    const isFormValid = () => {
        const {
            contestName,
            timeValidity,
            amount,
            participationAmount,
            numOfSpots,
            firstPrize,
            contestCode,
            platform,
        } = contest;
        return (
            contestName !== '' &&
            timeValidity !== '' &&
            amount !== '' &&
            participationAmount !== '' &&
            numOfSpots !== '' &&
            firstPrize !== '' &&
            contestCode !== '' &&
            platform !== ''
        );
    };

    return (
        <div className="min-h-screen mx-auto p-6 max-w-screen-sm">

            <h1 className='text-2xl font-bold text-center mb-5'>Add Contest</h1>
            <div className='text-red-700 text-md font-bold text-center'>All fields are required!!</div>
            <form onSubmit={handleSubmit} className='flex flex-col gap-3 '>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Enter Contest Name
                    </label>
                    <input
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='text'
                        name='contestName'
                        placeholder='Contest Name'
                        value={contest.contestName}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Enter Valid Till
                    </label>
                    <input
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='datetime-local'
                        name='timeValidity'
                        value={contest.timeValidity}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Enter Amount
                    </label>
                    <input
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='number'
                        name='amount'
                        placeholder='Amount'
                        value={contest.amount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Enter Participation Amount
                    </label>
                    <input
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='number'
                        name='participationAmount'
                        placeholder='Participation Amount'
                        value={contest.participationAmount}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Enter Number of Spots
                    </label>
                    <input
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='number'
                        name='numOfSpots'
                        placeholder='Number of Spots'
                        value={contest.numOfSpots}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Enter First Prize
                    </label>
                    <input
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='text'
                        name='firstPrize'
                        placeholder='First Prize'
                        value={contest.firstPrize}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Enter Contest Code
                    </label>
                    <input
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='text'
                        name='contestCode'
                        placeholder='Contest Code'
                        value={contest.contestCode}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div className='flex flex-col gap-1'>
                    <label className='font-bold' htmlFor=''>
                        Choose Platform
                    </label>
                    <select
                        name='platform'
                        id=''
                        className='border-2 border-solid border-red-700 rounded-2xl p-4'
                        type='text'
                        value={contest.platform}
                        onChange={handleChange}
                        required
                    >
                        <option value=''>Select</option>
                        <option value='dream11'>Dream11</option>
                        <option value='my11circle'>My11Circle</option>
                    </select>
                </div>
                <button disabled={!isFormValid()} className='bg-red-700 text-white font-bold rounded-2xl p-4' type='submit'>
                    Add Contest
                </button>
            </form>

            {isOpen && (
                <div className="fixed inset-0 flex items-center text-2xl justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-8 rounded shadow-lg">
                        <p className='text-2xl text-gray-900 font-bold'>Contest Successfully Added!</p>
                        <button
                            onClick={togglePopup}
                            className="mt-4 bg-red-700 text-white font-bold py-2 px-4 rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </div>
    );
}

export default AddContest;