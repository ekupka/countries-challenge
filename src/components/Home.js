import Grid from '@material-ui/core/Grid';
import { Card, Box, CardActionArea, Typography, TextField } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { COUNTRIES } from '../queries';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';



const Home = () => {
    const [ searchString, setSearchString ] = useState("")
    const [ countries, setCountries ] = useState()
    const { data } = useQuery(COUNTRIES);

    useEffect(() => {
        const result = data?.Country.filter(country =>
            country.name.toLowerCase().includes(searchString.toLowerCase())
        )
        if (result) setCountries(result.slice(0,30))
    }, [data, searchString])
    
    const _handleSearchUpdate = (event) => {
        setSearchString(event.target.value)
    }

    return (
        <Grid container direction='column'>
            <TextField onChange={_handleSearchUpdate} />
            <Grid spacing={3} container direction='row'>
                {countries?.map((country) => (
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
        </Grid>
    )
}
export default Home