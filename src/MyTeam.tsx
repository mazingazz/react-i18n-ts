import React, { useContext } from "react";
import Form from "react-bootstrap/Form";
import "./MyTeam.css";
import { TeamContext } from "./contexts/TeamContext";
function MyTeam() {
  const { team, changeTeam } = useContext(TeamContext);
    const teams: any = {
      rcb: {
        name: "Royal Challengers Bangalore",
        stadium: "M. Chinnaswamy Stadium",
        owner: "United Spirits",
        captain: "Virat Kohli",
      },
      csk: {
        name: "Chennai Super Kings",
        captain: "Mahendra Singh Dhoni",
        stadium: "M. A. Chidambaram Stadium",
        owner: "India Cements",
      },
      mi: {
        name: "Mumbai Indians",
        captain: "Rohit Sharma",
        stadium: "Wankhede Stadium",
        owner: "Reliance Industries",
      },
      kp: {
        name: "Kings XI Punjab",
        captain: "K.L. Rahul",
        stadium: "PCA Stadium, Mohali",
        owner: "Mohit Burman, Ness Wadia, Preity Zinta and Karan Paul",
      },
      dc: {
        name: "Delhi Capitals",
        captain: "Shreyas Iyer",
        stadium: "Arun Jaitley Stadium",
        owner: "GMR Group and JSW Group",
      },
      rr: {
        name: "Rajasthan Royals",
        captain: "Steve Smith",
        stadium: "Sawai Mansingh Stadium",
        owner: "Manoj Badale",
      },
      srh: {
        name: "Sunrisers Hyderabad",
        captain: "David Warner",
        stadium: "Rajiv Gandhi International Cricket Stadium",
        owner: "Sun TV Network",
      },
      kkr: {
        name: "Kolkata Knight Riders",
        captain: "Dinesh Karthik",
        stadium: "Eden Gardens",
        owner: "Red Chillies Entertainment and Mehta Group",
      },
    };
    const { captain, stadium, owner } = teams[team];
  return (
      <div className="my-team">
        <Form.Label>Who is the captain</Form.Label>
        <Form.Control className="select-dd" as="select" onChange={changeTeam}>
          <option value="rcb">Royal Challengers Bangalore</option>
          <option value="csk">Chennai Super Kings</option>
          <option value="dc">Delhi Capitals</option>
          <option value="kp">Kings XI Punjab</option>
          <option value="kkr">Kolkata Knight Riders</option>
          <option value="mi">Mumbai Indians</option>
          <option value="rr">Rajasthan Royals</option>
          <option value="srh">Sunrisers Hyderabad</option>
        </Form.Control>
        <h1>Captain of the team is: {captain}</h1>
        <h4>Home Ground: {stadium}</h4>
        <h5>Owner: {owner}</h5>
      </div>
    )
}
export default MyTeam;
