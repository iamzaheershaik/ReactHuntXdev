const Move = () => {
  const mouseHandler = () => {
    alert("Hover On the Mouse Click OK To push to Console");
    console.log("I am arrived to console");
  };
  return (
    <p onMouseMove={mouseHandler}>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Et eos eum
      aliquam nisi nulla, distinctio expedita totam atque ipsa molestias?
    </p>
  );
};

export default Move;
