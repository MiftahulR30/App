import React from "react";
import ItemList from "./ItemList";
import Search from "./Search";
import axios from "axios";

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            searchQuery: '',
            lists: [],
        }

        this.onSearchHandler = this.onSearchHandler.bind(this)
    }

    componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
          .then(res => {
            const lists = res.data;
            this.setState({ lists });
          })
      }

    onSearchHandler(event) {
        this.setState((prevState) => {
            return {
                ...prevState,
                searchQuery: event.target.value,
            }
        })
    }

    dataList() {
        const { searchQuery, lists } = this.state;

        const list = searchQuery.trim().length
        ? lists.filter((list) =>
            list.name.includes(searchQuery) ||  list.email.includes(searchQuery) ||  list.username.includes(searchQuery)
        )
        : lists;

        return list.sort((a, b) => a.date - b.date).reverse();
    }

    render() {
        return (
            <>
            <Search onTyping={this.onSearchHandler}/>
            <div className="app__body">

                <h2>Data Team Users</h2>
                <ItemList list={this.dataList()} />
            </div>
            </>
        )
    }
}

export default App;