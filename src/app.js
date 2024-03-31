/* CORS middleware or CORS ---->>CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API. you need it for authorized resource sharing with external third parties.  Browsers enforce CORS policies to prevent malicious websites from accessing sensitive data on other origins. */

// Note --->> middleware check origin you are authorize person or not to access the data
import cors from "cors"
import  Express from "express"
import cookieParser from "cookie-parser";


const app = Express();
/*  */
/*we also can take empty to cors
( app.use(cors()); ) if you don't want to configure or setting up */

app.use(cors({
    origin: process.env.CORS_ORIGIN,/*'http://example.com', --> we set the URL(domain) jisse ki koi other URL Data access na kr paye */
    credentials :true
}))

export {app}