import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Body = () => {
    const tourMembers = [
        {
            id: '49c99e6e-c9a2-43e4-960e-9edd752ee573',
            name: 'John Doe',
            img: 'https://via.placeholder.com/150',
            totalCost: '$500'
        },
        {
            id: 'd0e735d2-d756-4553-b8e9-47f9ba868f44',
            name: 'Jane Smith',
            img: 'https://via.placeholder.com/150',
            totalCost: '$600'
        },
        {
            id: 'd199cdac-0e00-40f9-b9e1-97707c8076c2',
            name: 'Alice Johnson',
            img: 'https://via.placeholder.com/150',
            totalCost: '$550'
        },
        {
            id: '3ddd3512-c8bf-4148-9b95-5f56fd81ae40',
            name: 'Member 4',
            img: 'https://via.placeholder.com/150',
            totalCost: '$500'
        },
        {
            id: 'd1793b3e-1723-4dbe-8ad0-4a28c7043af9',
            name: 'Member 5',
            img: 'https://via.placeholder.com/150',
            totalCost: '$550'
        },
        {
            id: '1316a523-5a81-4af7-9464-d0a1a13f3f37',
            name: 'Member 6',
            img: 'https://via.placeholder.com/150',
            totalCost: '$600'
        },
        {
            id: 'f1cb33a7-0608-4453-bc44-71203cc5c3f2',
            name: 'Member 7',
            img: 'https://via.placeholder.com/150',
            totalCost: '$650'
        },
        {
            id: 'dda4d9a1-9fac-43b3-a5f7-80a3a42e0c17',
            name: 'Member 8',
            img: 'https://via.placeholder.com/150',
            totalCost: '$700'
        },
        {
            id: '8095e182-31ec-439d-9f9a-5153144595e5',
            name: 'Member 9',
            img: 'https://via.placeholder.com/150',
            totalCost: '$750'
        },
        {
            id: '99d0123f-57f6-4d04-9f5a-0efeabc42cef',
            name: 'Member 10',
            img: 'https://via.placeholder.com/150',
            totalCost: '$800'
        },
        {
            id: 'de856fc0-8638-48ae-bfa8-c49c08d1f67c',
            name: 'Member 11',
            img: 'https://via.placeholder.com/150',
            totalCost: '$850'
        },
        {
            id: '91f9bce5-367e-4611-8aa8-d86544353c52',
            name: 'Member 12',
            img: 'https://via.placeholder.com/150',
            totalCost: '$900'
        }
    ];
    const [managerName, setManagerName] = useState('');
    const [payAmount, setPayAmount] = useState('');
    const [payments, setPayments] = useState([]);
    const [totalAmount, setTotalAmount] = useState(0);
    const [perPerson, setPerPerson] = useState(0);
    const [showAdmin, setShowAdmin] = useState(false);
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/payments', {
                managerName,
                payAmount
            });
            alert('Payment submitted successfully!');
            setManagerName('');
            setPayAmount('');
            fetchPayments(); // Fetch payments again to update the data
        } catch (error) {
            console.error('There was an error submitting the payment!', error);
        }
    };

    const fetchPayments = async () => {
        try {
            const response = await axios.get('http://localhost:5000/api/payments');
            const { totalAmount, perPerson, payments } = response.data;
            setTotalAmount(totalAmount);
            setPerPerson(perPerson);
            setPayments(payments);
        } catch (error) {
            console.error('There was an error fetching the payment details!', error);
        }
    };

    const handleAdminSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/admin/login', {
                password
            });
            if (response.data.success) {
                setShowAdmin(true);
                setIsAuthenticated(true);
            } else {
                alert('Invalid password!');
            }
        } catch (error) {
            console.error('Error authenticating admin:', error);
        }
    };

    useEffect(() => {
        fetchPayments();
    }, []);

    return (
        <div className='container mt-2 grid grid-cols-[20%_70%] gap-4'>
            <div className='bg-slate-100 p-4'>
                {tourMembers.map((member) => (
                    <div key={member.id} className='mb-1 flex items-center'>
                        <img src={member.img} alt={member.name} className='w-10 h-10 rounded-full mr-4' />
                        <div>
                            <h3 className='text-black font-bold'>{member.name}</h3>
                            {/* <p className='text-gray-700'>Total Cost: {member.totalCost}</p> */}
                        </div>
                    </div>
                ))}
            </div>

            <div className='bg-slate-100 p-4'>
                <div className='mb-4 flex gap-4'>
                    <div className='flex-1 bg-blue-500 p-10 rounded text-center text-white'>
                        <h3 className='font-bold'><strong>Total Amount:</strong> ${totalAmount.toFixed(2)}</h3>
                    </div>
                    <div className='flex-1 bg-rose-700 p-10 rounded text-center text-white'>
                        <h3 className='font-bold'><strong>Amount Per Person:</strong> ${perPerson.toFixed(2)}</h3>
                    </div>
                </div>

                <div className='admindiv'>
                    <h3 className='font-bold mb-2'>Manager Payment Details</h3>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <label className='block mb-1'>Manager Name:</label>
                            <input
                                type='text'
                                value={managerName}
                                onChange={(e) => setManagerName(e.target.value)}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            />
                        </div>
                        <div className='mb-2'>
                            <label className='block mb-1'>Pay Amount:</label>
                            <input
                                type='number'
                                value={payAmount}
                                onChange={(e) => setPayAmount(e.target.value)}
                                className='w-full p-2 border border-gray-300 rounded'
                                required
                            />
                        </div>
                        <button
                            type='submit'
                            className='w-full bg-blue-500 text-white p-2 rounded mt-4'
                        >
                            Submit Payment
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Body;
