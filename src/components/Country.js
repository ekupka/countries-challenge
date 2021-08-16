import { TextField, Box, Paper, Button, Grid } from "@material-ui/core"
import { useQuery } from '@apollo/client';
import { GET_COUNTRY } from '../queries';
import { useParams } from "react-router-dom";
import { Fragment, useState } from "react";


const Country = () => {
    const { _id } = useParams()
    const [ isEditing, setIsEditing ] = useState(false)
    
     const { data, updateQuery } = useQuery(GET_COUNTRY, {
        variables: { _id },  
    })
    
    console.log(data)

    const _handleSaveChanges = () => {
        console.log("saving")
        updateQuery((prev, vars) => {
            console.log(prev)
            return { 
                Country: [
                    { ...prev.Country[0], 
                        name: "TESTE"
                    }
                ]
            }
        })
    }

    return (
        <Fragment>
            <Paper elevation={3}>
                <Box display="flex" flexDirection="column" m={2}>
                    <Box maxWidth={"420px"} >
                        <img width="100%" alt={`${data?.Country[0].name} flag.`} src={data?.Country[0].flag.svgFile} />
                    </Box>
                    <TextField fullWidth disabled={!isEditing} value={data?.Country[0].name || "Loading"}
                        label="Name" id="country-name" name="country-name"
                    />
                    <TextField fullWidth disabled={!isEditing} value={data?.Country[0].capital || "Loading"}
                        label="Capital" id="country-capital" name="country-capital"
                    />
                    <TextField fullWidth disabled={!isEditing} value={data?.Country[0].area || "Loading"}
                        label="Area" id="country-area" name="country-area"
                    />
                    <TextField fullWidth disabled={!isEditing} value={data?.Country[0].population || "Loading"}
                        label="Population" id="country-population" name="country-population"
                    />
                    <TextField fullWidth disabled={!isEditing} value={data?.Country[0].topLevelDomain || "Loading"}
                        label="Top Level Domain" id="country-tld" name="country-tld"
                    />
                    {isEditing ? (
                        <Grid>
                            <Button variant="outlined">Cancel</Button>
                            <Button variant="outlined" onClick={_handleSaveChanges}>Save</Button>
                        </Grid>
                    ): (<Button variant="outlined" onClick={() => setIsEditing(true)}>Edit</Button>)}
                </Box>
            </Paper>
        </Fragment>
    )
}
export default Country