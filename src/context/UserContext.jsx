import { createContext, useEffect, useState } from "react";
import { v4 } from "uuid";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);

  // kullanıcı proje girdiği anda local'den tokeni alınır
  useEffect(() => {
    const signedUser = localStorage.getItem("token");
    setUser(signedUser);
  }, []);
  // kullanıcıyı kaydeder
  const signUser = (newUser) => {
    // kullanıcıya id ekleme
    newUser.id = v4();
    // kullanıcının  oturumunu açma
    localStorage.setItem("token", newUser.id);
    // state güncelleme
    setUser(newUser.id);
  };
  // çıkış yap
  const logoutUser = () => {
    // local'den silme
    localStorage.removeItem("token");
    setUser(null);
  };

  return (
    <UserContext.Provider value={{ user, signUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
}
export default UserContext;
