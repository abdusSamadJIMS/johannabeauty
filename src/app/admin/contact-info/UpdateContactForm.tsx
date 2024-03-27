'use client'

import { updateContactInfo } from "@/lib/actions";
import { ContactInfo } from "@prisma/client";
import { useRef } from "react";
import toast from "react-hot-toast";
import UpdateContactInfoFormButton from "./UpdateContactInfoFormButton";

type Props = {
    whatsApp: string,
    instagram: string,
    phoneNumber: string,
    mailId: string,
}
const UpdateContactForm = ({ whatsApp, instagram, phoneNumber, mailId, id }: ContactInfo) => {
    const ref = useRef<HTMLButtonElement>(null)
    const formRef = useRef<HTMLFormElement>(null)
    return (
        <>
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button className="btn btn-primary w-full my-10" onClick={() => {
                if (document) {
                    (document.getElementById('updateContactInfo') as HTMLFormElement).showModal();
                }
            }}>Update Info</button>
            <dialog id="updateContactInfo" className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Update Contact Information</h3>
                    <form ref={formRef} action={async (formData: FormData) => {

                        const { message, ok } = await updateContactInfo(formData)
                        if (ok) toast.success(message)
                        else toast.error(message)
                        ref.current?.click()
                        formRef.current?.reset();

                    }} className="my-2">
                        <input type="hidden" name="id" defaultValue={id} className="input w-full input-secondary  mb-3" />
                        <input type="text" name="whatsApp" defaultValue={whatsApp || ""} className="input w-full input-secondary  mb-3" />
                        <input type="text" name="instagram" defaultValue={instagram || ""} className="input w-full input-secondary  mb-3" />
                        <input type="text" name="phoneNumber" defaultValue={phoneNumber || ""} className="input w-full input-secondary mb-3 " />
                        <input type="text" name="mailId" defaultValue={mailId || ""} className="input w-full input-secondary mb-3 " />
                        <UpdateContactInfoFormButton />
                    </form>
                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button ref={ref} className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </>
    )
}

export default UpdateContactForm