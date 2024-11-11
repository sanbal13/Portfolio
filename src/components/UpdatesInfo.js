import { Alert } from "@mui/material";
import updates from "../data/updates";
function UpdatesInfo() {
    return (<>
        {updates.map(update => <Alert severity="info" key={update}>{update}</Alert>)}        
        </>
    );
}

export default UpdatesInfo;