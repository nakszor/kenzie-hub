import { getUser, objectlogin, objectregister } from "../types/types";

export interface AuthContextType {
  login: (data: objectlogin) => Promise<void>;
  registerUser: (data: objectregister) => Promise<void>;
  openModal: () => void;
  closeModal: () => void;
  token: string;
  modalIsOpen: boolean;
  profile: getUser | null;
  setProfile: (prevState: null) => getUser | void;
  createTech: (data: any) => void;
  deleteTech: (id: string) => void;
}
