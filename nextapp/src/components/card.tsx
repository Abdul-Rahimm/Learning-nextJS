const Card = ({ children }: { children: React.ReactNode }) => {
  // const cardStyle = {
  //   padding: "10pm",
  //   margin: "10px",
  //   boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
  //   border: "1px solid #ddd",
  //   display: "flex",
  //   justifyContent: "center",
  //   alignItems: "center",
  // };

  return (
    <div
      style={{
        color: "black",
        padding: "100px",
        border: "1px solid #ddd",
        margin: "10px",
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
