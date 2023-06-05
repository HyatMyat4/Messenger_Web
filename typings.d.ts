interface Save_Informations {
  email: string;
  name: string;
  image: string;
  Pasword: string;
}
interface Save_Informations_login {
  email: string;
  Pasword: string;
}

interface UserInfo {
  UserInfo: {
    username: string;
    email: string;
    ProfileImage: string;
  };
}

interface Props_Input {
  Type: string;
  Placeholder: string;
  Password: string;
  setPassword: any;
  PasswordFocus: boolean;
  setPasswordFocus: any;
  ValidPassword: boolean;
  setValidPassword: any;
}
interface Props_Input_any {
  Type: string;
  Placeholder: string;
  AnyText: string;
  setAnyText: any;
  AnyTextFocus: boolean;
  setAnyTextFocus: any;
  ValidAnyText: boolean;
  setValidAnyText: any;
  Any_REGEX: RegExp;
}

interface Response {
  message: string;
  data: _data;
}

interface _data {
  BackgroundImage: string;
  Chats: [];
  Friends: [];
  Intro: string;
  LivesIn: string;
  Name: string;
  ProfileImage: string;
  Profile_Love: [];
  Single: boolean;
  createdAt: string;
  email: string;
  id: string;
  updatedAt: string;
}
