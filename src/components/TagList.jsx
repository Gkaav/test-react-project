const TagList = () => {
  return (
    <div className="tag-list-container">
      <h1 className="tag-list-header">Tags</h1>
      <div className="tag-list">
        <div className="tag-list-content">
          <span className="tag-list-content-text">Blender</span>
          <span className="tag-list-content-text">Browser</span>
          <span className="tag-list-content-text">cross-platform</span>
          <span className="tag-list-content-text">HoloLens</span>
          <span className="tag-list-content-text">Microsoft</span>
        </div>
        <div className="tag-list-content">
          <span className="tag-list-content-text">Mixed Reality</span>
          <span className="tag-list-content-text tag-list-content-text-active">
            modelling
          </span>
          <span className="tag-list-content-text">MR</span>
          <span className="tag-list-content-text">nodejs</span>
          <span className="tag-list-content-text">streamsocket</span>
        </div>
        <div className="tag-list-content">
          <span className="tag-list-content-text">unity</span>
          <span className="tag-list-content-text">unity3D</span>
          <span className="tag-list-content-text">unreal engine</span>
          <span className="tag-list-content-text">VR</span>
          <span className="tag-list-content-text">websockets</span>
        </div>
      </div>
    </div>
  );
};

export default TagList;
