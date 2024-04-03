/* CORS middleware or CORS ---->>CORS allows you to configure the web API's security. It has to do with allowing other domains to make requests against your web API. you need it for authorized resource sharing with external third parties.  Browsers enforce CORS policies to prevent malicious websites from accessing sensitive data on other origins. */

// Note --->> middleware check origin you are authorize person or not to access the data
import cors from "cors"
import  Express from "express"
import cookieParser from "cookie-parser";


const app = Express();
/*  */
/*we also can take empty to cors
( app.use(cors()); ) if you don't want to configure or setting up */
// we set the middleware with --- app.use()

app.use(cors({
    origin: process.env.CORS_ORIGIN,/*'http://example.com', --> we set the URL(domain) jisse ki koi other URL Data access na kr paye */
    credentials :true
}))


app.use(Express.json({limit: "16kb"})) /*This middleware used for taking a data from form or json */
app.use(Express.urlencoded({limit: "16kb"})) /*This middleware used for taking a data from URL and urlencoded -> this will convert the special character of URL  based on ASCII table */
app.use(Express.static("public")) /*This is used for storing the file in to the public folder */

app.use(cookieParser()) /* Cookies are small piece of information i.e. sent from a website and stored in user's web browser when user browses that website. Every time the user loads that website back, the browser sends that stored data back to website or server, to recognize user. */

export {app}