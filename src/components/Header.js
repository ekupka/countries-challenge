import { withRouter } from "react-router-dom";
import { Container, Box, Button } from '@material-ui/core';


const Header = (props) => {
    const { history, location } = props
    const depth = location.pathname.split("/").filter(x => x)

    return (
        <>
            <Container component={'header'} className="App-header">
                <h2>Countries Challenge</h2>
            </Container>
            { depth.length > 0 && 
                (<Box m={2}>
                    <Button size={'small'} onClick={() => history.push("/")}>Back to Home</Button>
                </Box>)
            }
        </>
    )
}
export default withRouter(Header)