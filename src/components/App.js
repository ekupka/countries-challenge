import logo from './../logo.svg';
import './../styles/App.css';
import { useQuery, gql } from '@apollo/client';
import Grid from '@material-ui/core/Grid';
import { Card, Container, Box, CardActionArea } from '@material-ui/core';

const COUNTRIES = gql`{
  Country(first:20) {
    name
    capital
    flag {
      svgFile
    }
  }
}`;

const _handleCountryClick = () =>{
  console.log("Click")
}

function App() {
  const { data } = useQuery(COUNTRIES);
  console.log(data)
  return (
    <div className="App">
      <header className="App-header">
        <h2>Countries Challenge</h2>
      </header>
        <Grid spacing={3} container direction='row'>
          {data?.Country.map((country) => (
            <Card key={country.name} padding={20}>
              <CardActionArea onClick={_handleCountryClick}>
                <h4>{country.name}</h4>
                <Box><img width={120} src={country.flag.svgFile} /></Box>
              </CardActionArea>
            </Card>
            ))}
        </Grid>        
    </div>
  );
}

export default App;
