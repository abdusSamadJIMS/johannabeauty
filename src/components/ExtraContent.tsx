import React from 'react'

const ExtraContent = () => {
    const paras = ["Welcome to your one-stop haven for all things beauty! At Johanna Beauty Salon, we believe every person deserves to look and feel their absolute best. Our team of passionate and experienced professionals is dedicated to providing exceptional service in a warm and welcoming environment.", "Johanna Beauty Salon is your one-stop shop for all things beauty in New Delhi. Whether you are seeking a complete makeover, a relaxing spa treatment, or simply a touch-up, our team of experienced and passionate professionals is dedicated to helping you look and feel your absolute best.", "Visit Johanna Beauty Salon today at New Delhi Geeta Colony and discover a world of pampering possibilities. Browse our extensive service menu, explore our latest offers, and contact us to schedule your appointment. We look forward to welcoming you soon!", "We believe beauty is a journey, not a destination. It's about self-care, confidence, and embracing your unique features. Let us pamper you, guide you, and help you radiate your inner beauty to the world."]
    return (
        <section className='px-4 md:px-32'>
            <article>
                <h6 className='text-xl md:text-2xl agatho mb-3'>Unleash Your Inner Beauty at Johanna&apos;s Beauty Salon</h6>
                {
                    paras.map((para, i) => (
                        <p key={i} className='max-md:text-sm my-2'>{para}</p>
                    ))
                }
            </article>
        </section>
    )
}

export default ExtraContent