import React, { useState, createContext } from "react";
export const TeamContext = createContext<{ team: string; changeTeam: any }>({
  team: "rcb",
  changeTeam: null,
});

function TeamProvider(props: any) {
  const [team, setTeam] = useState("rcb");
  const changeTeam = (e: React.ChangeEvent<HTMLInputElement>) =>
    setTeam(e.target.value);
  return (
    <TeamContext.Provider value={{ team, changeTeam }}>
      {props.children}
    </TeamContext.Provider>
  );
}
export default TeamProvider;