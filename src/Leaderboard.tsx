import React, { useState } from 'react';

interface Leader {
    name: string,
    score: number
}

let tempLeaders = [
    { name: "Ted555", score: 150},
    { name: "Bob021", score: 25},
    { name: "Fred033", score: 100},
    { name: "Tom", score: 200}
]

function renderLeader(leader: Leader) {
    return <tr>
        <td>{leader.name}</td>
        <td>{leader.score}</td>
    </tr>
}

export default function Leaderboard() {
    const [leaders, setLeaders] = useState(tempLeaders);

    return <>
        <h2>Leaderboard</h2>
        {leaders.length === 0 ? 
            <div>Loading leader scores...</div>
        :
            <table className="table leader-table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Score</th>
                    </tr>
                </thead>
                <tbody>
                    {leaders.map(l => renderLeader(l))}
                </tbody>
            </table>
        }
    </>
}