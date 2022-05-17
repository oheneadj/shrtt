import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios"
    
    const UrlCode = ({ data }) => {
        const router = useRouter()
        useEffect(() => {
            if (data) {
                return router.push(data.longUrl)
            }
        }, [])
    };
    
    export async function getServerSideProps({ params }) {
        // Fetch data from external API

        let {data} = await axios.get(`http://localhost:3000/api/url/${params.urlCode}`);
        console.log(data)

                  return {
                      props: { data: data }
                  }

        }
 
    
    export default UrlCode;