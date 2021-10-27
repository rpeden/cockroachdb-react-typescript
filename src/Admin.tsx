import React, {useEffect, useState} from 'react';

interface Player {
    id: number,
    name: string,
    email: string
}

export default function Admin() {
    // eslint-disable-next-line
    const [players, setPlayers] = useState([] as Player[]);
    const [selectedPlayerId, setSelectedPlayerId] = useState("1");
    const [score, setScore] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetch('/.netlify/functions/getPlayers')
            .then(response => response.json() as Promise<Player[]>)
            .then(data => {
                setPlayers(data);
                if(data && data.length > 0) {
                    setSelectedPlayerId(data[0].id.toString())
                }
            });
    }, []);

    function addScore() {
        const scoreEntry = {
            playerId: selectedPlayerId,
            score: score
        }

        fetch("/.netlify/functions/addScore",
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(scoreEntry)
            })
            .then(function(res){
                setMessage(`Leaderboard score added for player ${selectedPlayerId}`);
            })
            .catch(function(res){
                setMessage(`Unable to add score for player ${selectedPlayerId}`);
            })
    }

    return <>
        <h2>Admin</h2>
        <h4>Add a Leaderboard Entry</h4>
        {players.length === 0 ?
            <div>Loading Players...</div>
            :
            <>
            <div className="mb-3 score-entry">
                <label>Player</label>
                <select
                    className="form-select"
                    aria-label="player selection"
                    value={selectedPlayerId}
                    onChange={e => setSelectedPlayerId(e.target.value)}>
                    {players.map(p => <option key={p.id} value={p.id}>
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
                       onChange={e => setScore(e.target.value)}/>
            </div>
            <div>
                <button className="btn btn-primary" onClick={addScore}>Add Score</button>
            </div>
            </>
        }
        <div className="admin-message">{message}</div>
    </>
}