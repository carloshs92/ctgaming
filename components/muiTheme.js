import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
      primary: {
        main: '#00EFE5',
        light: '#90FFFF',
        dark: '#00ACA4',
        background: '#00EBFF1A',
        disabled: '#E6F1FF1F'
      },
      secondary: {
        main: '#006AFA',
        light: '#4694FF',
        dark: '#013CDB',
        background: '#006AFA1F',
        disabled: '#E6F1FF1F',
        deepdark: '#051B2D',
        lighted: '#A6D5FA'
      },
      alert: {
        main: '#F57C00',
        dark: '#2F1C00',
        light: '#FFD599'
      },
      accept: {
        dark: '#388E3C',
        light: '#B7DFB9',
        lighted: '#B7DFB9',
        main: '#4CAF50'
      },
      surface: {
        light: '#ffffff',
        main: '#f5f5f5',
        dark: '#e0e0e0',
        disabled: '#E6F1FF1F',
        captions: '#333D52E6',
        surface: '#29303C',
        background: '#1C212B',
        blur: '#000000D9',
        overlay: '#E6F1FF14'
      },
      paper: {
        light: '#ffffff',
        main: '#fafafa',
        dark: '#f5f5f5',
      },
      text: {
        primary: '#E6F1FF',
        secondary: '#E6F1FFB3',
        disabled: '#E6F1FF80'
  
      },
      action: {
        active: '#E6F1FF8A',
        dis: '#E6F1FF4D',
        hover: '#E6F1FF14',
        selected: '#E6F1FF29'
      },
      error: {
        main: '#FF5345',
        light: '#FF9393',
        dark: '#C92929',
        background: '#F4433614',
        content: '#2D0C09',
        disabled: '#E6F1FF1F',
        alert: '#FAB3AE'
      },
      gray: {
        main: '#E6F1FF4D',
        light: '#E6F1FF14',
        dark: '#E6F1FF14',
        background: '#4CAF5014',
        content: '#0D200E',
        disabled: '#E6F1FF1F'
      },
      background: {
        default: '#1C212B',
        dark: '#29303C'
      },
      button: {
        disabled: '#E6F1FF4D',
        dropshadow: "#00000061"
      },
      fab: {
        main: '#00EFE5',
        light: '#00ACA4',
        disabled: '#E6F1FF1F'
      },
      selected:{
        main: '#E6F1FF'
      },
      fab:{
        main: "#E6F1FF4D"
      },
      dark:{
        main: '#1C212BF2'
      },
      disabled:{
        main: '#E6F1FF'
      }
    },
    typography: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: 14,
      fontWeightLight: 300,
      fontWeightRegular: 400,
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontSize: 46,
        fontWeight: 500
      },
      h2: {
        fontSize: 32,
        fontWeight: 400
      },
      h3: {
        fontSize: 24,
        fontWeight: 700
      },
      h4: {
        fontSize: 20,
        fontWeight: 700
      },
      h5: {
        fontSize: 16,
        fontWeight: 700
      },
      h6: {
        fontSize: 14,
        fontWeight: 700
      },
      subtitle1: {
        fontSize: 16,
        fontWeight: 500
      },
      subtitle2: {
        fontSize: 14,
        fontWeight: 500
      },
      body1: {
        fontSize: 16,
        fontWeight: 500
      },
      body2: {
        fontSize: 14,
        fontWeight: 500
      },
      body3: {
        fontSize: 12,
        fontWeight: 500
      },
      button: {
        fontSize: 16,
        fontWeight: 500,
        textTransform: 'unset',
        disabled: '#E6F1FF4D'
      },
      caption: {
        fontSize: 12,
        fontWeight: 500
      },
      overline: {
        fontSize: 10,
        fontWeight: 500
      },
      selected: {
        fontSize: 14,
        fff: 14
      },
      spacing: 8,
      breakpoints: {
          values: {
              xs: 0,
              sm: 600,
              md: 960,
              lg: 1280,
              xl: 1920,
          },
      },
    }
  });

  export default theme;