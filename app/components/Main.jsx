var React = require('react');

var Main = (props) => {
  return (
    <div>
      <Navigation />
      <div className= "row">
        <div className="column small-centered medium-6 large-4">
            Boilerplate 3
            {props.children}
        </div>
      </div>
    </div>
  );
}

module.exports = Main;
