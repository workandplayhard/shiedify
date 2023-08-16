import React from 'react'

export const AdminAppHeader: React.FC = () => {
  return (
    <header>
      <div className="wrap-box">
        <div className="intro">
          <div className="logo big">
            <a href="javascript:void(0)">
              <img src="assets/images/img_big-logo.svg" alt="" />
            </a>
          </div>
        </div>
        <div className="toolbar">
          <div className="navigation">
            <ul>
              <li>
                <a href="javascript:void(0)">
                  <span className="ic-bell"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="user-menu">
            <div className="avatar-img">
              <img src="assets/images/img_avatar.png" alt="" />
            </div>
            <div className="menu-box">
              <div className="bg-wrap">
                <div className="user-data">
                  <div className="avatar-img">
                    <img src="assets/images/img_avatar.png" alt="" />
                  </div>
                  <div className="info">
                    <h3>Gwen Stacy</h3>
                    <p>Client ID: CID001345</p>
                  </div>
                </div>
                <div className="box-nav">
                  <ul>
                    <li>
                      <a href="change-email.html">
                        <span className="ic-settings"></span>Settings
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span className="ic-help-circle"></span>Support
                      </a>
                    </li>
                    <li>
                      <a href="javascript:void(0)">
                        <span className="ic-bookmark"></span>Contact us
                      </a>
                    </li>
                  </ul>
                  <ul className="exit-account">
                    <li>
                      <a href="javascript:void(0)">
                        <span className="ic-log-out"></span>Logout
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
