import { FC } from "react";
import { createTheme, ThemeProvider, TextField } from '@mui/material';


const theme = createTheme({
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiInputLabel-root': {
            color: 'white',
          },
          '& .MuiOutlinedInput-root': {
            borderRadius: '20px', // Adjust the border radius value as needed
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
            '& input': {
              color: 'white',
            },
          },
        },
      },
    },
  },
});

interface Props {
    label:string
    type:string
    name:string
    value:string
    onChange:(e:any) => void
}


const TextFeildIcon: FC<Props> = ({ label,type,name ,value , onChange }) => {



  return (
       <div>
        <ThemeProvider theme={theme}>
         
         
            <TextField
              name={name}
              label={label}
              type={type}
              value={value}
              onChange={onChange}
              variant="outlined"
              fullWidth

            />
          
            </ThemeProvider>
          </div>

          

  );
}

export default TextFeildIcon;
