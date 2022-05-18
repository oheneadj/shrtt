import {NextResponse} from "next/server";
import {verify} from "jsonwebtoken";

const secret = "secret";

export default function middleware (req) {
    const {cookies} = req;

    const jwt = cookies.OursiteJWT;

    const url = req.url;

    if(url.includes("/dashboard")){
        if(jwt === undefined) {
            return NextResponse.redirect("/login")
        }

        try{
            verify(jwt, secret);
            return NextResponse.next();
        }
        catch (e){
            return NextResponse.redirect("/login")
        }
    }
    return NextResponse.next()
}