const Copy = () => {
  const copyHandler = () => {
    alert("Stop steadling my work");
  };
  return (
    <p onCopy={copyHandler}>
      {" "}
      Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero, porro.
    </p>
  );
};

export default Copy;
