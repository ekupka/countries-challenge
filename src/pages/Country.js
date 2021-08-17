import { TextField, Box, Paper, Button } from "@material-ui/core"
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../queries';
import { useParams } from "react-router-dom";
import { Fragment, useState, useEffect } from "react";

const Country = () => {
    const { _id } = useParams()

    const { data, updateQuery } = useQuery(GET_COUNTRY, {
        variables: { _id },  
    })

    const [ isEditing, setIsEditing ] = useState(false)
    const [ name , setName ] = useState()
    const [ capital , setCapital ] = useState()
    const [ area , setArea ] = useState()
    const [ population , setPopulation ] = useState()
    const [ topLevelDomain , setTopLevelDomain ] = useState()

    useEffect(() => {
        setName(data?.Country[0].name)
        setCapital(data?.Country[0].capital)
        setArea(data?.Country[0].area)
        setPopulation(data?.Country[0].population)
        setTopLevelDomain(data?.Country[0].topLevelDomains[0].name)
    }, [data]);

    const handleSaveChanges = () => {
        updateQuery( (prev, vars) => {
            return { 
                Country: [
                    {   ...prev.Country[0], 
                        name, 
                        capital, 
                        area, 
                        population, 
                        topLevelDomains: [{
                            name: topLevelDomain,
                            __typename: "TopLevelDomain"
                        }] 
                    }
                ]
            }
        })
        setIsEditing(false)
    }

    return (
        <Fragment>
            <Paper elevation={3}>
                <Box display="flex" flexDirection="column" m={2} className="country-data">
                    <Box maxWidth={"420px"} mb={4}>
                        <img width="100%" alt={`${data?.Country[0].name} flag.`} src={data?.Country[0].flag.svgFile} />
                    </Box>

                    <TextField fullWidth 
                        label="Name" id="name" name="name"
                        disabled={!isEditing} 
                        value={name ?? "Loading"} 
                        onChange={(e)=> setName(e.target.value)}
                    />
                    <TextField fullWidth 
                        label="Capital" id="capital" name="capital"
                        disabled={!isEditing} 
                        value={capital ?? "Loading"} onChange={(e)=> setCapital(e.target.value)}
                    />
                    <TextField fullWidth 
                        label="Area" id="area" name="area"
                        disabled={!isEditing} 
                        value={area ?? "Loading"} onChange={(e)=> setArea(e.target.value)}
                    />
                    <TextField fullWidth 
                        label="Population" id="population" name="population"
                        disabled={!isEditing} 
                        value={population ?? "Loading"} onChange={(e)=> setPopulation(e.target.value)}
                    />
                    <TextField fullWidth 
                        label="Top Level Domain" id="top-level-domain" name="top-level-domain"
                        disabled={!isEditing} 
                        value={topLevelDomain ?? "Loading"} onChange={(e)=> setTopLevelDomain(e.target.value)}
                    />

                    <Box display="flex"justifyContent="center">
                        {isEditing ? (
                            <>
                                <Box m={2}>
                                    <Button variant="outlined" onClick={() => setIsEditing(false)}>Cancel</Button>
                                </Box>
                                <Box m={2}>
                                    <Button variant="outlined" onClick={handleSaveChanges}>Save</Button>
                                </Box>
                            </>
                        ): (
                            <Box m={2}><Button variant="outlined" onClick={() => setIsEditing(true)}>Edit</Button></Box>
                        )}
                    </Box>

                </Box>
            </Paper>
        </Fragment>
    )
}
export default Country