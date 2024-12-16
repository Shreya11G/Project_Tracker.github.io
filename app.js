document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        { id: 1, title: 'Project 1', description: 'Description for project 1', deadline: '2025-12-31', difficulty: 'Easy' },
        { id: 2, title: 'Project 2', description: 'Description for project 2', deadline: '2025-12-30', difficulty: 'Medium' },
        // Add more projects as needed
    ];

    const progressData = [
        { id: 1, title: 'Project 1', progress: 50, score: 80 },
        { id: 2, title: 'Project 2', progress: 75, score: 90 },
        // Add more progress data as needed
    ];

    const leaderboardData = [
        { rank: 1, name: 'Preeti', score: 95 },
        { rank: 2, name: 'Neha', score: 90 },
        // Add more leaderboard data as needed
    ];

    const projectContainer = document.getElementById('projects');
    const progressContainer = document.getElementById('progress');
    const leaderboardContainer = document.getElementById('leaderboard');

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <div>
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <p>Deadline: ${project.deadline}</p>
                <p>Difficulty: ${project.difficulty}</p>
            </div>
            <button onclick="acceptProject(${project.id})">Accept</button>
        `;
        projectContainer.appendChild(projectCard);
    });

    progressData.forEach(progress => {
        const progressCard = document.createElement('div');
        progressCard.classList.add('progress-card');
        progressCard.innerHTML = `
            <div>
                <h3>${progress.title}</h3>
                <p>Progress: ${progress.progress}%</p>
                <p>Score: ${progress.score}</p>
            </div>
        `;
        progressContainer.appendChild(progressCard);
    });

    const leaderboardTable = document.createElement('table');
    const leaderboardHeader = `
        <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
        </tr>
    `;
    leaderboardTable.innerHTML = leaderboardHeader;
    leaderboardData.forEach(entry => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.name}</td>
            <td>${entry.score}</td>
        `;
        leaderboardTable.appendChild(row);
    });
    leaderboardContainer.appendChild(leaderboardTable);
});

function acceptProject(projectId) {
    alert(`Project with ID ${projectId} accepted!`);
}
