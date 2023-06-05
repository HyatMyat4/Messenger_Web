import axios from "axios";

const Send_Register_data = async (
  Url_Endpoint: string,
  _data: Save_Informations
) => {
  try {
    const response = await axios.post(Url_Endpoint, _data);
    return response;
  } catch (err) {
    console.warn(err, "Fetch Failed !");
  }
};

const Send_Login_data = async (
  Url_Endpoint: string,
  _data: Save_Informations_login
) => {
  try {
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
    };
    const response = await axios.post(Url_Endpoint, _data, config);
    return response;
  } catch (err) {
    return err;
    //console.warn(err, "Fetch Failed!");
  }
};

const Send_Logout = async (Url_Endpoint: string, logout_data: any) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
    withCredentials: true,
  };
  try {
    const response = await axios.post(Url_Endpoint, logout_data, config);
    return response;
  } catch (err) {
    console.warn(err, "Logout Failed !");
  }
};

export { Send_Register_data, Send_Login_data, Send_Logout };
