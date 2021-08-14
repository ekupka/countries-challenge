import { Grid, Typography } from "@material-ui/core"
import { useQuery } from '@apollo/client';
import { COUNTRY } from '../queries';
import { useParams } from "react-router-dom";

const Country = () => {
    const { _id } = useParams()
    const { data } = useQuery(COUNTRY(_id))

    console.log(data)
    return (
        <Grid container>
            <Typography variant="h4">
                {data?.Country[0].name}
            </Typography>
            <h4> {data?.Country[0].capital} </h4>
        </Grid>
    )
}
export default Country