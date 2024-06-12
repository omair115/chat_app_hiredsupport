import { FC } from "react";
import LeftSection from "../../components/signInn/LeftSection";
import RigthSection from "../../components/signInn/RightSection";

interface Props {
    children?: React.ReactNode
}

const SignIn: FC<Props> = ({ children }) => {
    return (
        <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 h-full ">
           <div className="col-span-1 hidden md:block">
                <LeftSection />
            </div>
            <div className="col-span-2 ">
                <RigthSection />
            </div>
        </div>
    );
}

export default SignIn;
