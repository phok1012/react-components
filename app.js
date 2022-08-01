// TODO

class GroceryListItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      fontWeight: 'normal'
    }
  }

  handleEnter() {
    this.setState({
      fontWeight: 'bold'
    })
  }

  handleLeave() {
    this.setState({
      fontWeight: 'normal'
    })
  }

  render() {
    return (
      <li
        style = {this.state}
        onMouseEnter = {this.handleEnter.bind(this)}
        onMouseLeave = {this.handleLeave.bind(this)}
      >
        {this.props.item}
      </li>
    )
  }
}

class GroceryList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      listItem : ['Cucumbers', 'Kale', 'Milk']
    }
  }

  renderGroceryListItem(i) {
    return (
      <GroceryListItem
      item = {this.state.listItem[i]}
      />
    )
  }

  render () {
    return (
      <ul>
        {this.renderGroceryListItem(0)}
        {this.renderGroceryListItem(1)}
        {this.renderGroceryListItem(2)}
      </ul>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <h2>Grocery List</h2>
          <GroceryList/>
      </div>
    )
  }
};

// ======================================
ReactDOM.render(<App />, document.getElementById("app"));
