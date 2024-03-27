import { EdgeStoreProvider } from '../lib/edgestore';
import { Toaster } from 'react-hot-toast';

const Providers = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <EdgeStoreProvider>
            <Toaster
                toastOptions={{
                    duration: 5000,
                    success: {
                        style: {
                            background: '#9d5836',
                            color: "white"
                        },
                    },
                    error: {
                        style: {
                            background: 'red',
                        },
                    },
                }}
            />
            {children}
        </EdgeStoreProvider>
    )
}

export default Providers