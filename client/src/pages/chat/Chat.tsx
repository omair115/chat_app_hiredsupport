import { FC } from "react";
import LeftSection from "../../components/chat/LeftSection";
import RigthSection from "../../components/chat/RightSection";

interface Props {
    children?: React.ReactNode
}

const Chat: FC<Props> = ({ children }) => {
    return (
          <div className="grid md:grid-cols-3 sm:grid-cols-2 lg:grid-cols-3 h-full">
           <div className="col-span-1 hidden md:block">
              <LeftSection />
            </div>
            <div className="col-span-2">
              <RigthSection />
             </div>
        </div>
    );
}

export default Chat;
