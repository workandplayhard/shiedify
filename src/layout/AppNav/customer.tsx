import React from 'react'

export const CustomerAppNav: React.FC = () => {
  return (
    <div className="surface-nav">
      <ul>
        <li className="active">
          <a href="">
            <span className="ic-zap"></span>Alerts
          </a>
        </li>
        <li>
          <a href="statistics.html">
            <span className="ic-statistics"></span>Statistics
          </a>
        </li>
        <li>
          <a href="reports.html">
            <span className="ic-file"></span>Reports
          </a>
        </li>
        <li>
          <a href="rules.html">
            <span className="ic-rules"></span>Rules
          </a>
        </li>
      </ul>
    </div>
  )
}
