import Grid from '@material-ui/core/Grid';
import { TextField, Box } from '@material-ui/core';
import { useQuery } from '@apollo/client';
import { COUNTRIES } from '../queries';
import { useEffect, useState } from 'react';
import CountryCard from '../components/CountryCard';

const Home = () => {
    const [ searchString, setSearchString ] = useState("")
    const [ countries, setCountries ] = useState()
    const { data } = useQuery(COUNTRIES);

    useEffect(() => {
        const result = data?.Country.filter(country =>
            country.name.toLowerCase().includes(searchString.toLowerCase())
        )
        if (result) setCountries(result.slice(0,20))
    }, [data, searchString])
    
    const _handleSearchUpdate = (event) => {
        setSearchString(event.target.value)
    }
    return (
        <Grid item container sm={10} md={8} justifyContent="center">
            <Box width="100%" m={4}>
                <TextField fullWidth onChange={_handleSearchUpdate} label="Search" aria-label="Search" id="search-field" type="search" variant="outlined" />
            </Box>
            <Grid container item spacing={3} xs={12}>
                {countries?.map((country) => 
                    <Grid item key={country._id} xs={12} lg={6}>
                        <CountryCard country={country} />
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}
export default Home