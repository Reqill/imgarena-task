import { useLocation } from "react-router-dom";

const Error404 = () => {
  let path = useLocation().pathname;

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "90%",
      }}
    >
      <h3 style={{ margin: "4px" }}>Error 404</h3>
      <p style={{ margin: "4px" }}>
        page{" "}
        <code
          style={{
            backgroundColor: "#CCC",
            padding: "3px",
            borderRadius: "5px",
          }}
        >
          {path}
        </code>{" "}
        doesn't exist
      </p>
    </div>
  );
};

export default Error404;
