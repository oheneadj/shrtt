import { useRouter } from "next/router";
import { useEffect } from "react";
import axios from "axios";

const UrlCode = ({ data }) => {
  const router = useRouter();
  const redirect = () => {
    if (data) {
      return router.push(data.longUrl);
    }
  };

  useEffect(() => {
    redirect();
  }, []);


};

export async function getServerSideProps({ params }) {
  // Fetch data from external API

  try {
    let { data } = await axios.get(
      `https://shrtt.in/api/url/${params.urlCode}`
    );

    return {
      props: { data: data },
    };
  } catch (error) {
    console.log(error);
  }
}

export default UrlCode;
