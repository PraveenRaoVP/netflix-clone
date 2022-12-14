import { makeStyles } from "tss-react/mui";

//Navbar styles
const drawerWidth = 240;


export const useStyles = makeStyles()((theme) => {
    return{
        toolbar: {
            height: '60px',
            display: 'flex',
            justifyContent: 'space-between',
            marginLeft: '200px',
            [theme.breakpoints.down('sm')]: {
                marginLeft: 0,
                flexWrap: 'wrap',
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            [theme.breakpoints.up('sm')]: {
                display: 'none',
            },
        },
        drawer: {
            [theme.breakpoints.up('sm')]: {
                width: drawerWidth,
                flexShrink: 0,
            },
        },
        drawerPaper: {
            width: drawerWidth,
        },
        linkBtn: {
            '&:hover': {
                color: 'white !important',
                textDecoration: 'none',
            },
        }
    }
});

/*
export const ToolBar = styled('Toolbar')({
    height: '80px',
    display: 'flex',
    justifyContent: 'space-between',
    marginLeft: '240px'
});

export const MenuButton = styled('IconButton')({
    marginRight: ''
});

*/
