export function Sport2(props) {
    console.log(props);
    return (
      <div>
        {props.sports.map((object, i) => {
          return (
            <div>
              <h1>My name is {object.name}.</h1>
              <h3>My favourite sport is {object.sport}</h3>
            </div>
          );
        })}
      </div>
    );
  }
  