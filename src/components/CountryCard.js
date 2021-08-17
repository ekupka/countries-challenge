import { Card, Box, CardActionArea, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const CountryCard = ({country}) => {
    return (
        <Link to={'/'+country._id} style={{ textDecoration: 'none' }}>
            <Card key={country._id} padding={20} width={6}>
                    <CardActionArea padding={2}>
                        <Box display="flex" alignItems="center" >
                            <Box padding={2}><img alt={`${country.name} flag.`} width={120} src={country.flag.svgFile} /></Box>
                            <Box display="flex" flexDirection="column" alignItems="flex-start" width={4}>
                                <Typography noWrap variant="h5">{country.name}</Typography>
                                <Typography noWrap variant="h6">Capital: {country.capital ?? "-"}</Typography>
                            </Box>
                        </Box>
                    </CardActionArea>
            </Card>
        </Link>
    )
}

export default CountryCard