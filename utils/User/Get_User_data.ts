const Get_User_data = async (Url: string) => {
  try {
    const Resopnse: Response = await fetch(`${Url}`, {
      method: "GET",
      cache: "no-store",
    });
    const { data } = await Resopnse.json();
    return data;
  } catch (err) {
    console.warn(err);
  }
};

export { Get_User_data };
