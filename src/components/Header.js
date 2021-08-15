import { withRouter } from "react-router-dom";
import { Container, Button } from '@material-ui/core';


const Header = (props) => {
    const { history, location } = props
    const depth = location.pathname.split("/").filter(x => x)

    return (
        <>
            <Container component={'header'} className="App-header">
                <h2>Countries Challenge</h2>
            </Container>
            <Button disabled={depth.length===0} size={'small'} onClick={() => history.push("/")}>Back to Home</Button>
        </>
    )
}
export default withRouter(Header)