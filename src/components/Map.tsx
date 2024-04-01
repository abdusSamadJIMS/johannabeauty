import React, { Suspense } from 'react'

const Map = () => {
    return (
        <Suspense fallback={<p>Loading...</p>}>

            <iframe

                title='google map'
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0999705171816!2d77.26475037518024!3d28.65672518298222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd3fe4c3b247%3A0xa870a523fcbe08da!2sJohanna%20Beauty%20Salon!5e0!3m2!1sen!2sin!4v1711709372791!5m2!1sen!2sin" style={{ border: '0', height: "90%", width: "100%", opacity: .45 }}
                allowFullScreen={false}
                loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                className=''

            ></iframe>
        </Suspense>
    )
}

export default Map