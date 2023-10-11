const RecentPosts = () => {
  return (
    <div className="Recent-post">
      <div className="Recent-post-container">
        <h1 className="Recent-post-header">Recent posts</h1>
        <div className="Recent-post">
          <ul className="Recent-post-content">
            <li className="Recent-post-content-text">
              Azure Speech Studio for Mixed Reality
            </li>
            <li className="Recent-post-content-text Recent-post-content-text-active">
              HoloLens 2 Unreal Project Template
            </li>
            <li className="Recent-post-content-text">Simplygon in Azure</li>
            <li className="Recent-post-content-text">Blender in Azure</li>
            <li className="Recent-post-content-text">
              AAD Login on HoloLens 2
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentPosts;
