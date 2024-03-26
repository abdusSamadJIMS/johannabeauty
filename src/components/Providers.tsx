import { EdgeStoreProvider } from '../lib/edgestore';

const Providers = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    return (
        <EdgeStoreProvider>{children}</EdgeStoreProvider>
    )
}

export default Providers