import { ThemeOptions } from '@mui/material/styles';
import {red} from '@mui/material/colors';

const discoThemeOptions: ThemeOptions = {
    palette: {
        mode: 'light',
        primary: {
            main: '#93186C'
        },
        secondary: {
            main: '#16666f'
        },
        error: {
            main: red.A400
        }
    },
};

export default discoThemeOptions;