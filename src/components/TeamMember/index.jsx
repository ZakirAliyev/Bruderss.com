import React from 'react';
import { Link } from 'react-router-dom';

export default function TeamMember({
  memberImg,
  memberName,
  memberDesignation,
  href,
}) {
  return (
    <div className="cs_team cs_style_1">
      <div className="cs_team_info">
        <h2 className="cs_fs_29">
          <Link to={href}>{memberName}</Link>
        </h2>
        <p className="mb-0">{memberDesignation}</p>
      </div>
    </div>
  );
}
