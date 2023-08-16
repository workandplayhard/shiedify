import React from 'react'

export const AdminAppNav: React.FC = () => {
  return (
    <div className="surface-nav">
      <ul>
        <li className="active">
          <a href="admin-statistics.html">
            <span className="ic-statistics"></span>Statistics
          </a>
        </li>

        <li>
          <a href="admin-clients.html">
            <span className="ic-group"></span>Clients
          </a>
        </li>

        <li>
          <a href="merchants.html">
            <span className="ic-credit-card"></span>Merchants
          </a>
        </li>
        <li>
          <a href="members.html">
            <span className="ic-building"></span>Employees
          </a>
        </li>
        <li>
          <a href="plans-empty.html">
            <span className="ic-coins"></span>Plans
          </a>
        </li>
        <li>
          <a href="feedback.html">
            <span className="ic-assistant"></span>Feedback
          </a>
        </li>
        <li>
          <a href="support.html">
            <span className="ic-support"></span>Support
          </a>
        </li>
      </ul>
    </div>
  )
}
