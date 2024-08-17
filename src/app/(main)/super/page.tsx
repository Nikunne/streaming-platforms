import Switch from '@mui/material/Switch';

const label = { inputProps: { 'aria-label': 'Switch demo' } };


export default function page() {
    return (
        <main>
            <Switch {...label} defaultChecked />
        </main>
    );
}