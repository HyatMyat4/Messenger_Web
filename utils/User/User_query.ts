import axios from "axios";

const Get_All_User_data = async (Url_Endpoint: string) => {
  try {
    const response = await axios.get(Url_Endpoint);
    return response;
  } catch (err) {
    console.warn(err, "Search Failed!");
  }
};

export { Get_All_User_data };
