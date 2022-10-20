import { makeStyles } from "tss-react/mui";

export const useStyles = makeStyles()((theme) => {
    return{
        movie: {
            padding: '10px',
        },
        title: {
            color: theme.palette.text.primary,
            textOverflow: 'ellipsis',
            width: '230px',
            marginTop: "10px",
            marginBottom: 0,
            overflow: 'hidden',
            textAlign: 'center'
        },
    }
});