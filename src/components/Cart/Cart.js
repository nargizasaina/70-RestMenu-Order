import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {BASE_DELIVERY} from "../../constants";
import './Cart.css';

const Cart = ({cart, totalPrice, onRemoveClick, onOrderClick, dishes}) => {
    return (
        <div className="Parts">
            <h4 className="PartsTitle">Cart</h4>
            {(totalPrice !== 5) ? (
            <Box sx={{ minWidth: 275 }}>
                <Card variant="outlined">
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 200 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><b>Name</b></TableCell>
                                    <TableCell align="right"><b>Quantity</b></TableCell>
                                    <TableCell align="right"><b>Price in $</b></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {Object.keys(cart).map((order, index) => (
                                    (cart[order] > 0) ?
                                        (<TableRow
                                        key={order}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell
                                            component="th"
                                            scope="row"
                                            className="Row"
                                            onClick={() => onRemoveClick(order, dishes[index].price)}
                                        >
                                            {order}
                                        </TableCell>
                                        <TableCell align="right">{cart[order]}</TableCell>
                                        <TableCell align="right">{dishes[index].price * cart[order]}</TableCell>
                                    </TableRow>) : null
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    <CardContent>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Delivery: {BASE_DELIVERY} $
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            Total price: {totalPrice} $
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small" onClick={onOrderClick}>Place order</Button>
                    </CardActions>
                </Card>
            </Box>) : <p>Cart is empty! <br/> Please choose any dish to add to cart</p>}
        </div>
    );
};

export default Cart;