import Header from '@/components/Header'
import React, { ReactNode } from 'react'
import AdminHero from './AdminHero'
import BackButton from './BackButton'

const layout = ({ children }: { children: ReactNode }) => {
    return (
        <main className="min-h-screen">
            <AdminHero />
            <BackButton />
            <div className="mb-10 md:px-20 px-1">
                {children}
            </div>
        </main>
    )
}

export default layout