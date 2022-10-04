import { makeStyles } from "tss-react/mui";
//App styles

export const useStyles = makeStyles()((theme) => {
    return {
        root: {
            display: 'flex',
            height: '100%'
        },
        toolbar: {
            height: '70px',
        },
        content: {
            flexGrow: '1',
            padding: '5em 3em',
        },
    }
});

//export default MainComponent;
