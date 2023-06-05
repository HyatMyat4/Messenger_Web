import axios from "axios";

const Send_Search_data = async (Url_Endpoint: string) => {
  try {
    const response = await axios.get(Url_Endpoint);
    return response;
  } catch (err) {
    console.warn(err, "Search Failed!");
  }
};

export { Send_Search_data };
