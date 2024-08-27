import React from 'react';

const ReportDB = () => {
    const reports = [
        { id: 1, title: 'Report 1' },
        { id: 2, title: 'Report 2' },
        { id: 3, title: 'Report 3' },
        // Add more reports as needed
    ];

    const handleReportClick = (reportId) => {
        // Handle report click event
        console.log(`Report ${reportId} clicked`);
    };

    return (
        <div className="report-db">
            <div className="sidebar">
                <h2>Reports</h2>
                <ul>
                    {reports.map((report) => (
                        <li key={report.id} onClick={() => handleReportClick(report.id)}>
                            {report.title}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="chat">
                {/* Add chat component here */}
            </div>
        </div>
    );
};

export default ReportDB;