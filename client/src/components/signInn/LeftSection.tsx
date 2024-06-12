import { FC } from "react";
import CardContainerLayout from "../cardContainer/CardContainerLayout";
import { MainHeading } from "./LeftSection.styled"
import bot from "../../assets/images/bot.png"

interface Props {
    children?: React.ReactNode
}


const LeftSection: FC<Props> = ({ children }) => {
    return (
        <CardContainerLayout className="bg-[#1767FE] rounded-3xl m-4">
            <MainHeading className="pt-20 p-4 flex flex-col self-start">
                <h3 className="lg:text-7xl md:text-5xl">
                    Hired Support
                </h3>
                <p className="mt-12 lg:text-4xl md:text-3xl">
                    Chat App
                </p>
            </MainHeading>
        </CardContainerLayout>

    );
}

export default LeftSection;
