import facial from '../../public/static/services/facialTreatment.jpg'
import hair from '../../public/static/services/hariTreatment.jpg'
import body from '../../public/static/services/bodyTreatment.jpg'
import nail from '../../public/static/services/nailTreatment.jpg'
import eye from '../../public/static/services/eyeTreatment.jpg'
import groom from '../../public/static/services/groomingService.jpg'
import makeup from '../../public/static/services/makeup.jpg'

export const services = [
    {
        id: '1',
        image: facial,
        title: "Facial Treatments",
        description: 'We will help you to choose an individual skin care program for the face',
        subServices: [
            {
                name: "facial work",
                services: [
                    {
                        name: 'nose wax',
                        price: 400
                    },
                    {
                        name: 'side lock wax',
                        price: 300
                    },
                    {
                        name: 'chin wax',
                        price: 200
                    },
                    {
                        name: 'lower lip wax',
                        price: 100
                    },
                    {
                        name: 'forehead wax',
                        price: 200
                    },
                    {
                        name: 'upper lips',
                        price: 110
                    },
                    {
                        name: 'face wax',
                        price: 1000
                    },
                ]
            },
            {
                name: "face bleach",
                services: [
                    {
                        name: 'fruit bleach',
                        price: 250
                    }, {
                        name: 'protein bleach',
                        price: 700
                    }, {
                        name: 'cheryl\'s bleach',
                        price: 880
                    }, {
                        name: 'diamond bleach',
                        price: 2000
                    }, {
                        name: 'd tan bleach',
                        price: 500
                    },
                ]
            },
            {
                name: "clean ups",
                services: [
                    {
                        name: 'lotus sheen',
                        price: 800
                    }, {
                        name: 'organic',
                        price: 3000
                    }, {
                        name: 'lotus bleach',
                        price: 1500
                    }, {
                        name: 'kiana',
                        price: 700
                    }, {
                        name: 'fresh fruit clean up',
                        price: 200
                    },
                ]
            },
            {
                name: "facial",
                services: [
                    {
                        name: 'organic basic',
                        price: 1000
                    }, {
                        name: 'acene check (for acne skin)',
                        price: 1200
                    }, {
                        name: 'youth facial (for anti agening)',
                        price: 1500
                    }, {
                        name: 'lightening and whitening',
                        price: 1500
                    },
                    {
                        name: 'organic glow radiance (with mask)',
                        price: 1850
                    },
                    {
                        name: 'organic glow radiance (without mask)',
                        price: 1500
                    },
                    {
                        name: 'lotus basic',
                        price: 1300
                    },
                    {
                        name: 'lotus gold sheen (for glow radiance)',
                        price: 2000
                    },
                    {
                        name: 'lotus gold deriance (for tan removal)',
                        price: 2000
                    },
                    {
                        name: 'lotus acne (for acne skin)',
                        price: 2000
                    },
                    {
                        name: 'lotus preservita',
                        price: 3200
                    },
                    {
                        name: 'lotus instafair',
                        price: 2300
                    },
                ]
            },
            {
                name: "glow with jbs",
                services: [
                    {
                        name: "johanna premium facial",
                        price: 3500
                    },
                    {
                        name: "johanna luxury facial",
                        price: 5000
                    },
                    {
                        name: "korean facial",
                        price: 3500
                    },
                    {
                        name: "hydra facial",
                        price: 2500
                    },
                ]
            },
            {
                name: 'finishing mask',
                services: [
                    {
                        name: "gold peel mask",
                        price: 350,
                    },
                    {
                        name: "oil base mask",
                        price: 500,
                    },
                    {
                        name: "mold mask",
                        price: 550,
                    },
                    {
                        name: "glow mask",
                        price: 550,
                    },
                    {
                        name: "sheet mask",
                        price: 650,
                    },
                ]
            }
        ]
    },
    {
        id: '2',
        image: hair,
        title: "Hair Treatments",
        description: "We will help you to choose an individual hair care program for the hairs",
        subServices: [
            {
                name: "haircut",
                services: [
                    {
                        name: 'straight cut',
                        price: 200
                    },
                    {
                        name: 'u cut',
                        price: 250
                    },
                    {
                        name: 'step cut',
                        price: 400
                    },
                    {
                        name: 'layer cut',
                        price: 400
                    },
                    {
                        name: 'v cut',
                        price: 300
                    },
                    {
                        name: 'splitends',
                        price: 100
                    },
                    {
                        name: 'baby cut',
                        price: 150
                    },
                    {
                        name: 'blunt cut',
                        price: 300
                    },
                ]
            },
            {
                name: "head wash",
                services: [
                    {
                        name: 'shampoo',
                        price: 150
                    },
                    {
                        name: 'shampoo with conditioner',
                        price: 200
                    },
                    {
                        name: 'keratin wash',
                        price: 300
                    },
                    {
                        name: 'smoothening wash',
                        price: 300
                    },
                    {
                        name: 'blow dryer',
                        price: 300
                    },
                    {
                        name: 'botox wash',
                        price: 350
                    },
                ]
            },
            {
                name: "hair spa",
                services: [
                    {
                        name: "basic",
                        price: 1000,
                    },
                    {
                        name: "basic with treatment",
                        price: 1200,
                    },
                    {
                        name: "loreal",
                        price: 1500,
                    },
                    {
                        name: "loreal with treatment",
                        price: 2000,
                    },
                ]
            },
            {
                name: "kerasmooth",
                services: [
                    {
                        name: "kerasmooth (acc to length)",
                        price: 1000
                    }
                ]
            },
            {
                name: "hair botox",
                services: [
                    {
                        name: "hair botox (acc to length)",
                        price: 8000
                    }
                ]
            },
            {
                name: "hair oil massage",
                services: [
                    {
                        name: "coconut",
                        price: 400
                    },
                    {
                        name: "almond",
                        price: 500
                    },
                    {
                        name: "figaro",
                        price: 500
                    },
                    {
                        name: "treatment oil",
                        price: 500
                    },
                ]
            },
            {
                name: "root touchup",
                services: [
                    {
                        name: "matrix",
                        price: 750,
                    },
                    {
                        name: "loreal",
                        price: 850,
                    },
                    {
                        name: "innova",
                        price: 950,
                    },
                ]
            },
            {
                name: "smoothening",
                services: [
                    {
                        name: "matrix",
                        price: 550,
                    },
                    {
                        name: "wella",
                        price: 550,
                    },
                    {
                        name: "schwarzkopf",
                        price: 600,
                    },
                ]
            },
            {
                name: "keratin",
                services: [
                    {
                        name: "brazil",
                        price: 550
                    },
                    {
                        name: "gk",
                        price: 700
                    },
                ]
            }
        ]
    },
    {
        id: '3',
        image: body,
        title: "Body Treatments",
        description: "We will help you to choose an individual skin care program for the body",
        subServices: [
            {
                name: "body bleach",
                services: [
                    {
                        name: "full front d tan bleach",
                        price: 2500
                    },
                    {
                        name: "half front d tan bleach",
                        price: 1500
                    },
                    {
                        name: "full back d tan bleach",
                        price: 2500
                    },
                ]
            },
            {
                name: "body polishing",
                services: [
                    {
                        name: "foot polishing",
                        price: 300
                    },
                    {
                        name: "arms polishing",
                        price: 300
                    },
                    {
                        name: "legs polishing",
                        price: 300
                    },
                ]
            },
        ]
    },
    {
        id: '4',
        image: nail,
        title: "Nails Treatments",
        description: "Our Experts finely beautify your nails",
        subServices: [
            {
                name: "Manicure & pedicure",
                services: [
                    {
                        name: 'basic manicure',
                        price: 500
                    },
                    {
                        name: 'basic pedicure',
                        price: 500
                    },
                    {
                        name: 'lotus basic manicure',
                        price: 550
                    },
                ]
            },
            {
                name: "nail extensions",
                services: [
                    {
                        name: "nail extension with one finger glitter",
                        price: 1000
                    },
                    {
                        name: "nail extension with stone art",
                        price: 1200
                    },
                    {
                        name: "foot nail extension",
                        price: 999
                    },
                ]
            },
            {
                name: "avl",
                services: [
                    {
                        name: "manicure",
                        price: 900
                    },
                    {
                        name: "pedicure",
                        price: 1000
                    },
                    {
                        name: "h&f manicure",
                        price: 700
                    }
                ]
            },
        ]
    },
    {
        id: '5',
        image: eye,
        title: "Eye Treatments",
        description: "Your eyes will be a whole beauty universe",
        subServices: [
            {
                name: "eye lashes",
                services: [
                    {
                        name: "eyes lashes classic",
                        price: 2000
                    },
                    {
                        name: "eyes lashes hybrid",
                        price: 2500
                    },
                    {
                        name: "eyes lashes volume",
                        price: 2000
                    },
                    {
                        name: "eyes lashes mega volume",
                        price: 3000
                    },
                ]
            },
        ]
    },
    {
        id: '6',
        image: groom,
        title: "Grooming Services",
        description: "Final touch are the most important ones",
        subServices: [
            {
                name: "thread work",
                services: [
                    {
                        name: "eyebrows",
                        price: 250
                    },
                    {
                        name: "upper lips",
                        price: 350
                    },
                    {
                        name: "forehead",
                        price: 250
                    },
                    {
                        name: "chin",
                        price: 100
                    },
                    {
                        name: "lower lips",
                        price: 350
                    },
                ]
            },
            {
                name: "foot facial",
                services: [
                    {
                        name: "arm facial (for dry skin)",
                        price: 2000
                    },
                    {
                        name: "foot facial (for dry skin)",
                        price: 3000
                    },
                    {
                        name: "arm facial (for whitening)",
                        price: 2500
                    },
                ]
            },
        ]
    },
    {
        id: '7',
        image: makeup,
        title: "Makeups",
        description: "Beautify your beauty",
        subServices: [
            {
                name: "party makeup",
                services: [
                    {
                        name: "basic",
                        price: 0
                    },
                    {
                        name: "silicon",
                        price: 0
                    },
                    {
                        name: "hd makeup",
                        price: 0
                    },
                    {
                        name: "air brush",
                        price: 0
                    },
                    {
                        name: "celebrity",
                        price: 0
                    },
                ]
            },
            {
                name: "sagan makeup",
                services: [
                    {
                        name: "silicon",
                        price: 0
                    },
                    {
                        name: "hd makeup",
                        price: 0
                    },
                    {
                        name: "air brush",
                        price: 0
                    },
                    {
                        name: "celebrity",
                        price: 0
                    },
                ]
            },
            {
                name: "bridal makeup",
                services: [
                    {
                        name: "silicon",
                        price: 0
                    },
                    {
                        name: "hd makeup",
                        price: 0
                    },
                    {
                        name: "air brush",
                        price: 0
                    },
                    {
                        name: "celebrity",
                        price: 0
                    },
                ]
            },
        ]
    },

]