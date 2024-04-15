import { useState, useEffect } from 'react';
import axios from 'axios';

import { MdContentCopy } from "react-icons/md";


function ContestList() {
    const [contests, setContests] = useState([]);
    const [copied, setCopied] = useState(false);
    const deleteContest = async (contestId) => {
        try {
            await axios.delete(`https://dream11-privatecontest-com.onrender.com/api/contests/${contestId}`);
            setContests((prevContests) => prevContests.filter((contest) => contest._id !== contestId));
            window.location.reload()
        } catch (err) {
            console.error('Failed to delete contest', err);
        }
    };

    const handleCopyClick = (contest) => {
        navigator.clipboard.writeText(contest.contestCode);
        setCopied(true)
        setTimeout(() => setCopied(false), 500);
    }
    useEffect(() => {
        contests.forEach((contest) => {
            const expirationTime = new Date(contest.timeValidity).getTime();
            const currentTime = new Date().getTime();
            const timeLeft = expirationTime - currentTime;

            if (timeLeft < 0) {
                deleteContest(contest._id);

            }
        });
    }, [contests]);


    useEffect(() => {
        fetchContests();
    }, []);

    const fetchContests = async () => {
        try {
            const response = await axios.get('https://dream11-privatecontest-com.onrender.com/api/contests');

            setContests(response.data);
        } catch (err) {
            console.error('Failed to fetch contests', err);
        }
    };


    const formatTime = (time) => {
        const date = new Date(time);

        // Subtract 5 hours and 30 minutes from the date
        date.setHours(date.getHours() - 5);
        date.setMinutes(date.getMinutes() - 30);

        const now = new Date();
        const tomorrow = new Date(now);
        tomorrow.setDate(now.getDate() + 1);

        const options = {
            hour: 'numeric',
            minute: 'numeric',
            hour12: true,
        };

        if (date.toDateString() === now.toDateString()) {
            // If the date is today, show "Today" instead of the date
            return `Today ${date.toLocaleTimeString('en-IN', options)}`;
        } else if (date.toDateString() === tomorrow.toDateString()) {
            // If the date is tomorrow, show "Tomorrow" instead of the date
            return `Tomorrow ${date.toLocaleTimeString('en-IN', options)}`;
        } else {
            // Otherwise, show the full date and time
            return `${date.toLocaleDateString('en-IN')} ${date.toLocaleTimeString('en-IN', options)}`;
        }
    };



    return (
        <div className="min-h-screen mx-auto p-6 max-w-screen-lg">
            <h1 className='text-2xl font-bold text-center mb-5'>Live Private Contests </h1>
            <p className='text-xl text-center'>Choose your favorite contest and copy code to join...</p>
            <p className='text-xl font-bold text-right'>Total Contests: {contests.length}</p>
            {copied &&
                <div className='  mb-2 max-w-24 mx-auto text-center text-white text-sm p-1 bg-gray-900 rounded-md'> Copied! </div>
            }
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4'>
                {contests.map((contest) => (
                    <div key={contest._id} className='flex flex-col gap-2 border-2 border-solid border-red-700 rounded-2xl p-4'>
                        <div>
                            <div className="text-3xl py-3 font-bold text-center border-b-8 border-solid border-red-700 ">{contest.contestName}</div>
                        </div>
                        <div className='text-md flex gap-2 flex-col'>
                            <div className=' flex gap-3 '>
                                <div className='font-bold'>Participation Amount:</div>
                                <div className=" text-gray-800 break-words">{contest.participationAmount}</div>
                            </div>
                            <div className=' flex gap-3 '>
                                <div className='font-bold'>PrizePool:</div>
                                <div className=" text-gray-800 break-words"> {contest.amount}</div>
                            </div>

                            <div className=' flex gap-3 '>
                                <div className='font-bold'>Number of Spots: </div>
                                <div className=" text-gray-800 break-words">{contest.numOfSpots}</div>
                            </div>
                            <div className=' flex gap-3 '>
                                <div className='font-bold'>First Prize: </div>
                                <div className=" text-gray-800 break-words">{contest.firstPrize}</div>
                            </div>
                            <div className=' flex gap-3'>
                                <div className='font-bold'>Valid Till:</div>
                                <div className=" text-gray-800 break-words"> {formatTime(contest.timeValidity)}</div>
                            </div>
                            <div className=' flex gap-3 '>
                                <div className='font-bold'>Platform:</div>
                                <div className=" text-gray-800 break-words"> {contest.platform}</div>
                            </div>




                        </div>


                        <div className=' border-t-8 border-solid border-red-700 flex py-6 gap-2 items-center justify-center'>
                            <div className="text-2xl font-bold text-center  ">{contest.contestCode}</div>
                            <div className='text-2xl cursor-pointer' onClick={() => handleCopyClick(contest)}>
                                <MdContentCopy />
                            </div>


                        </div>



                    </div>
                ))}
            </div>

        </div>
    );
}
export default ContestList