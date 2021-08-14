import Grid from '@material-ui/core/Grid';
import { Card, Box, CardActionArea, Typography } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { COUNTRIES } from '../queries';
import { Link } from 'react-router-dom';



const Home = () => {
    const { data } = useQuery(COUNTRIES);
    
    /*     
    const history = useHistory()
    const _handleCountryClick = (country) =>{
      console.log(country)
      history.push('/' + country._id)
    } */

    return (
        <Grid spacing={3} container direction='row'>
            {data?.Country.map((country) => (
                <Card key={country._id} padding={20}>
                    <Link to={'/'+country._id}>
                        <CardActionArea padding={2}>
                            <Typography variant="h5">{country.name}</Typography>
                            <Box padding={2}><img alt={`${country.name} flag.`} width={120} src={country.flag.svgFile} /></Box>
                        </CardActionArea>
                    </Link>
                </Card>
            ))}
        </Grid>
    )
}
export default Home