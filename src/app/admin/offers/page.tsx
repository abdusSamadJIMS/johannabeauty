import React from 'react'
import AddOfferForm from './AddOfferForm'
import { deleteOffer, fetchAllOffers } from '@/lib/actions'
import Image from 'next/image';

const AdminOffersPage = async () => {
    const offers = await fetchAllOffers();

    return (
        <div>
            <header>
                <h2 className='agatho text-myColor text-7xl border-b-2 border-b-myColor'>Offers</h2>
            </header>
            <div className='grid md:grid-cols-2'>
                <AddOfferForm total={offers?.length || 0} />
                <div className="overflow-y-auto">
                    {
                        offers &&
                        <div className="flex flex-col overflow-y-auto">
                            {
                                offers.map((offer, index) => (
                                    <div key={index} className='border-b-2 border-b-myColor mb-3 p-1'>
                                        <div className="relative w-full h-32">
                                            <Image src={offer.image} alt={`offer${index}`} fill className='object-contain' />
                                        </div>
                                        <form action={deleteOffer} className='w-full flex justify-center items-center my-3'>
                                            <input type="hidden" name="id" value={offer.id} />
                                            <input type="hidden" name="image" value={offer.image} />
                                            <button type="submit" className='btn btn-error'>Remove Offer</button>
                                        </form>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

export default AdminOffersPage