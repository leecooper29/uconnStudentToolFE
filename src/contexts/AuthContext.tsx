import { createContext, useState, type ReactNode } from "react";

type AuthUser = {
  name: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  login: (name: string) => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const login = (name: string) => {
    setUser({ name });
  };

  return (
    <AuthContext.Provider value={{ user, login }}>
      {children}
    </AuthContext.Provider>
  );
}
