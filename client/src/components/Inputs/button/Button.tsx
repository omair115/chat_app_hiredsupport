import { FC, ReactNode } from "react";
import { IconButton,ButtonSpinner } from './Button.styled';




interface Props {
  children?: ReactNode
  loading?:boolean
}


const CustomButton: FC<Props> = ({ children,loading }) => {

  return (
   

      <IconButton>
        {loading && <ButtonSpinner />}
        {!loading && children}
      </IconButton>


  );
}

export default CustomButton;
