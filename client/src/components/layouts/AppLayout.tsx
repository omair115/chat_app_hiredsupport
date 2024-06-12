import { FC } from "react";
import { PageLayoutWrapper,ChildrenWrapper } from './AppLayout.styled'
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"

interface Props {
    children?: React.ReactNode
}


const AppMainLayout: FC<Props> = ({ children }) => {
    return (
        <PageLayoutWrapper>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop
                closeOnClick
                theme="dark"
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
            <ChildrenWrapper>
             {children} 
            </ChildrenWrapper>
        </PageLayoutWrapper>
    );
}

export default AppMainLayout;
