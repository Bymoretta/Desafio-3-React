import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


export default function ButtonAppBar() {
    return (
        
        <Box sx={{ flexGrow: 12 }}>
            <AppBar  color="" position="fixed">
                
                <Toolbar color> Nike
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        
                    </Typography>
                    <Button color="inherit" href="https://zapatillas.mercadolibre.com.ar/calzado/nike/?matt_tool=77571335&matt_word=&matt_source=google&matt_campaign_id=1682773904&matt_ad_group_id=65529317436&matt_match_type=&matt_network=g&matt_device=c&matt_creative=399698333235&matt_keyword=&matt_ad_position=&matt_ad_type=&matt_merchant_id=&matt_product_id=&matt_product_partition_id=&matt_target_id=aud-1660898565530:dsa-1466986707538&gclid=Cj0KCQjwidSWBhDdARIsAIoTVb2bJfvQt8ouvQp7tRH1lAzd_aIk2a1UhAfk96VV1TpuRy0frzywe40aAug7EALw_wcB"> Modelos </Button>
                </Toolbar>
            </AppBar>
        </Box>
    );
}