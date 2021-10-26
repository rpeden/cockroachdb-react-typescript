import React, { useState } from 'react';

let tempPlayers = [
    { id: 1, name: "Bob"},
    { id: 2, name: "Ted"},
    { id: 3, name: "Fred",}
]
export default function Admin() {
    // esline-disable-next-line
    const [players, setPlayers] = useState(tempPlayers);
    const [selectedPlayerId, setSelectedPlayerId] = useState("1");
    const [score, setScore] = useState("");

    return <>
        <h2>Admin</h2>
        <h4>Add a Leaderboard Entry</h4>
        <div className="mb-3 score-entry">
            <label>Player</label>
            <select 
                className="form-select" 
                aria-label="player selection"
                value={selectedPlayerId}
                onChange={e => setSelectedPlayerId(e.target.value) } >
                {players.map(p => <option value={p.id}>
                    {p.name}
                </option>)}
            </select>
        </div>
        <div className="mb-3 score-entry">
            <label>Score</label>
            <input type="text" 
                className="form-control" 
                aria-label="score entry" 
                value={score}
                onChange={e => setScore(e.target.value)} />
        </div>
        <div>
            <button className="btn btn-primary">Add Score</button>
        </div>
    </>
}