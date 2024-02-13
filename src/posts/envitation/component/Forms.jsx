import React, { useState } from "react";
import "../component/css/guest.css";

function Forms() {
  const [name, setName] = useState("");
  const [mesage, setMesage] = useState("");
  const [present, setPresent] = useState("");
  const [resultname, setResultname] = useState("");
  const [resultmesage, setResultmesage] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setName("");
    setMesage("");
    setPresent("");
    setResultname(`${name}`);
    setResultmesage(`${mesage}`);
  }

  return (
    <div>
      <div className="forms">
        <form onSubmit={handleSubmit}>
          <div className="name">
            <label htmlFor="name">Name</label>
            <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="present">
            <label htmlFor="present">Kedatangan : </label>
            <select value={present} onChange={(e) => setPresent(e.target.value)} name="present" id="present">
              <option value="Hadir">Hadir</option>
              <option value="Berhalangan Hadir">Berhalangan Hadir</option>
            </select>
          </div>
          <div className="mesage">
            <label htmlFor="mesage">Pesan/Doa</label>
            <textarea value={mesage} onChange={(e) => setMesage(e.target.value)} name="mesage" id="mesage" cols="30" rows="5"></textarea>
          </div>
          <div className="btnsend">
            <button type="submit">Send</button>
          </div>
        </form>
      </div>
      <div className="results">
        <span className="mesages">{resultmesage}</span>
        <span className="regars">{resultname ? resultname : "Ucapkan Selamat..."}</span>
      </div>
    </div>
  );
}

export default Forms;
