import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { red } from '@mui/material/colors';

export const CartWidget = () => {
    return <ShoppingCartIcon sx={{ color: red[500], fontSize: 30, marginLeft: 2, marginRight: 2 }} />;
};