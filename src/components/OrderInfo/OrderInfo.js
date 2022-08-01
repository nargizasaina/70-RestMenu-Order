import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './OrderInfo.css';

const OrderInfo = ({onChange, contactData, onSubmit}) => {
    return (
        <form className="Form" onSubmit={onSubmit}>
            <h4>Please enter your contact data:</h4>
            <Stack spacing={3} width={300}>
                <TextField
                    label="Your name"
                    color="secondary"
                    focused
                    onChange={onChange}
                    name="name"
                    value={contactData.name}
                />
                <TextField
                    label="Your address"
                    color="secondary"
                    focused
                    onChange={onChange}
                    name="address"
                    value={contactData.address}
                />
                <TextField
                    label="Your contact number"
                    color="secondary"
                    focused
                    style={{marginBottom: '20px'}}
                    onChange={onChange}
                    name="number"
                    value={contactData.number}
                />
            </Stack>
            <Button variant="contained" color="success" type="submit">Confirm order</Button>
        </form>
    );
};

export default OrderInfo;