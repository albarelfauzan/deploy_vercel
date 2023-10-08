const TextArea = ({ label }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <textarea className="form-control" rows={3} />
    </div>
  );
};

export default TextArea;
