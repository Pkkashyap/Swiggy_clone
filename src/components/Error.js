import { useRouteError } from "react-router-dom";


const Error = ()=>{
    const err = useRouteError();
    console.log(err);
    return(
        <div>
            <h1>OOPS something went wrong</h1>
            <h2>err: {err.status} {err?.error?.message}</h2>
        </div>
    )

}

export default Error;