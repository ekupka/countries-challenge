import { TextField, Box, Paper } from "@material-ui/core"
import { useQuery } from '@apollo/client';
import { COUNTRY } from '../queries';
import { useParams } from "react-router-dom";
import { Fragment } from "react";


const Country = () => {
    const { _id } = useParams()
    const { data } = useQuery(COUNTRY(_id))

    console.log(data)
    return (
        <Fragment>
            <Paper elevation={3}>
                <Box display="flex" flexDirection="column" m={2}>
                        <Box maxWidth={"420px"} >
                            <img width="100%" alt={`${data?.Country[0].name} flag.`} src={data?.Country[0].flag.svgFile} />
                        </Box>
                        <TextField 
                            disabled
                            id="country-name"
                            name="country-name"
                            label="Name"
                            value={data?.Country[0].name || "Loading"}
                            fullWidth
                        />
                        <TextField
                            disabled
                            id="country-capital"
                            name="country-capital"
                            label="Capital"
                            value={data?.Country[0].capital || "Loading"}
                            fullWidth
                        />
                            <TextField
                            disabled
                            id="country-area"
                            name="country-area"
                            label="Area"
                            value={data?.Country[0].area || "Loading"}
                            fullWidth
                        />
                            <TextField
                            disabled
                            id="country-population"
                            name="country-population"
                            label="Population"
                            value={data?.Country[0].population || "Loading"}
                            fullWidth
                        />
                        <TextField
                            disabled
                            id="country-tld"
                            name="country-tld"
                            label="Top Level Domain"
                            value={data?.Country[0].topLevelDomain || "Loading"}
                            fullWidth
                        />
                </Box>
            </Paper>
        </Fragment>
    )
}
export default Country