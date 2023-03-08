import PropTypes from "prop-types";

export const User = (props) => {
  console.log(props);
  return (
    <div>
      {props.showUser ? (
        <div>
          <p>Name: {props.user1.name}</p>
          <p>Age: {props.user1.age}</p>
          <p>Adress: {props.user1.adress}</p>
        </div>
      ) : (
        <div>
          <p>Name: {props.user2.name}</p>
          <p>Age: {props.user2.age}</p>
          <p>Adress: {props.user2.adress}</p>
        </div>
      )}
    </div>
  );
};

User.propTypes = {
  showUser: PropTypes.bool.isRequired,
  user1: PropTypes.object,
  user2: PropTypes.object.isRequired,
};

User.defaultProps = {
  user1: { name: "Default Name", age: 0, adress: "Default Adress" },
};
