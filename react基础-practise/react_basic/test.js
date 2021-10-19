class Person extends React.Component {
  render() {
    let { name, age, sex } = this.props;
    return (
      <ul>
        <li>姓名：{name}</li>
        <li>性别：{sex}</li>
        <li>年龄：{age}</li>
      </ul>
    );
  }
}

Person.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  sex: PropTypes.string,
};
Person.defaultProps = {
  age: 18,
  sex: "不男不女",
};
