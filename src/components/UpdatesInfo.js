import { Alert } from "@mui/material";
function UpdatesInfo() {
    return (<>
        <Alert severity="info">This site will be updated every Monday and Thursday</Alert>
        <Alert severity="info">The SRE section will be added soon!</Alert>
        <Alert severity="info">The next update will be primarily focused on making the site responsive and adaptive.</Alert>
        </>
    );
}

export default UpdatesInfo;