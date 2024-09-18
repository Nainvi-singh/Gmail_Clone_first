import React, { useState ,useEffect} from 'react'
import { MdCropSquare, MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { FaCaretDown } from "react-icons/fa"
import { IoMdMore, IoMdRefresh } from 'react-icons/io'
import Email from './Email';
import axios from 'axios';
import { useSelector } from 'react-redux';

const SentMail = () => {
    const [sentEmails, setSentEmails] = useState([]);
    const { user } = useSelector(store => store.app);

    useEffect(() => {
        const fetchSentEmails = async () => {
            try {
                const res = await axios.get(`http://localhost:8080/api/v1/email/sent`, {
                    withCredentials: true
                });
                setSentEmails(res.data.emails);
            } catch (error) {
                console.error("Error fetching sent emails:", error);
            }
        };

        fetchSentEmails();
    }, []);

    return (
        <div className='flex-1 bg-white rounded-xl mx-5'>
            <div className='flex items-center justify-between px-4 my-2'>
                <div className='flex items-center gap-2'>
                    <div className='flex items-center gap-1'>
                        <MdCropSquare size={'20px'} />
                        <FaCaretDown size={'20px'} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <IoMdRefresh size={'20px'} />
                    </div>
                    <div className='p-2 rounded-full hover:bg-gray-200 cursor-pointer'>
                        <IoMdMore size={'20px'} />
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>1 to 50</span>
                    <MdKeyboardArrowLeft size="24px" />
                    <MdKeyboardArrowRight size="24px" />
                </div>
            </div>
            <div className='h-90vh overflow-y-auto'>
            {sentEmails.length > 0 ? (
                sentEmails.map(email => <Email key={email._id} email={email} />)
            ) : (
                <p>No sent emails</p>
            )}
            </div>
        </div>
    )
}

export default SentMail;

