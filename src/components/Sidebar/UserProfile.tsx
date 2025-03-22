import "./UserProfile.css"

export const UserProfile = () => {
  return (
    <div id="UserProfile">
      <div>
        <img className="user-img" src="/assets/pexels-photo-23790041.png" />
      </div>
      <div className="text-bold user-fullname">
        <span>John Doe</span>
      </div>
      <div className="user-role">
        <span className="smaller-sidebar-fonts">Admin</span>
      </div>
    </div>
  );
};
