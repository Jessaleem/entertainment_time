function Content({ children }) {
  return (
    <div>
      <div>{children}</div>;
    </div>
  );
}

Content.Movies = function ({ children }) {
  return <div>{children}</div>;
};

Content.Comentaries = function ({ children }) {
  return <div>{children}</div>;
};

export default Content;
