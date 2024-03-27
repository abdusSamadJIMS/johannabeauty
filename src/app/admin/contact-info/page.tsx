import { fetchContactInfo } from '@/lib/actions'
import React from 'react'
import { BsEnvelope, BsInstagram, BsPhone, BsWhatsapp } from 'react-icons/bs'
import UpdateContactForm from './UpdateContactForm';

const ContactInfoPage = async () => {
    const contactInfo = await fetchContactInfo();
    return (
        <div>
            <header>
                <h2 className='agatho text-myColor text-7xl'>Contact Information</h2>
            </header>
            {
                contactInfo &&
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th className='text-black'>Platform</th>
                                <th className='text-black'>Value</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="hover">
                                <td><BsWhatsapp className='text-4xl text-myColor' /></td>
                                <td className='text-myColor'>{contactInfo.whatsApp}</td>
                            </tr>
                            <tr className="hover">
                                <td><BsInstagram className='text-4xl text-myColor' /></td>
                                <td className='text-myColor'>{contactInfo.instagram}</td>
                            </tr>
                            <tr className="hover">
                                <td><BsPhone className='text-4xl text-myColor' /></td>
                                <td className='text-myColor'>{contactInfo.phoneNumber}</td>
                            </tr>
                            <tr className="hover">
                                <td><BsEnvelope className='text-4xl text-myColor' /></td>
                                <td className='text-myColor'>{contactInfo.mailId}</td>
                            </tr>
                        </tbody>
                        <thead>
                            <tr>
                                <th className='text-black'>Platform</th>
                                <th className='text-black'>Value</th>
                            </tr>
                        </thead>
                    </table>
                    <UpdateContactForm id={contactInfo.id} instagram={contactInfo.instagram} mailId={contactInfo.mailId} phoneNumber={contactInfo.phoneNumber} whatsApp={contactInfo.whatsApp} />
                </div>

            }
        </div>
    )
}

export default ContactInfoPage