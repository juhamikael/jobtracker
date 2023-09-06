"use client";

import { FC, useEffect, useState } from "react";
import axios from "axios";
type TTestProps = {
  prop?: string;
  children?: React.ReactNode;
};

const Test: FC<TTestProps> = ({}) => {
  const [user, setUser] = useState<any>();
  const [authStatus, setAuthStatus] = useState(null);
  const [permissions, setPermissions] = useState<any[]>();

  useEffect(() => {
    const getKindeSession = async () => {
      const res = await fetch("/api/kindeSession");
      const data = await res.json();

      await axios.post("/api/users", {
        name: `${data.user.given_name} ${data.user.family_name}`,
        email: data.user.email,
        id: data.user.id,
        role: "basic-user",
      });
    };

    getKindeSession();
  }, []);

  return (
    <div>
      <div>Test</div>
    </div>
  );
};

export default Test;
