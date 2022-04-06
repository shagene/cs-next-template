import { ThemeOptions } from '@mui/material/styles';
import {red} from '@mui/material/colors';

const genoaThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#16666f'
        },
        secondary: {
            main: '#93186C'
        },
        error: {
            main: red.A400
        }
    },
};

export default genoaThemeOptions;