import { render, screen, fireEvent} from "@testing-library/react";
import Search from "../component/Search";
import ItemBody from "../component/ItemBody";
import ListItem from "../component/ListItem";
import ItemList from "../component/ItemList";


//test block
const setup = () => {
  const utils = render(<Search />)
  const input = utils.getByLabelText('search-box')
  return {
    input,
    ...utils,
  }
}

test('It should keep value of input', () => {
  const {input} = setup()
  fireEvent.change(input, {target: {value: '23'}})
  expect(input.value).toBe('23')
})

test('shows value', () => {
  const data = {
    name : "abc", username : "username", email : "email", 
    address : {street : "street", suite : "suite", city : "city", zipcode : "zipcode"}, 
    company : {name : "name", catchPhrase : "catchPhrase", bs : "bs"}, phone : "phone"
  }
  render(<ItemBody name={data.name} username={data.username} email={data.email} address={data.address} company={data.company} phone={data.phone}/>)
  expect(screen.getByText(data.name)).toBeTruthy()
  expect(screen.getByText(data.username)).toBeTruthy()
  expect(screen.getByText(data.phone)).toBeTruthy()
  expect(screen.getByText(data.email)).toBeTruthy()
})

test('listitem', () => {
  const data2 = {
    name : "abc", username : "username", email : "email", 
    address : {street : "street", suite : "suite", city : "city", zipcode : "zipcode"}, 
    company : {name : "name", catchPhrase : "catchPhrase", bs : "bs"}, phone : "phone"
  }
  render(<ListItem list={data2} />)
})

test('itemList', () => {
  const data2 = [{
    id : 1,
    name : "abc", username : "username", email : "email", 
    address : {street : "street", suite : "suite", city : "city", zipcode : "zipcode"}, 
    company : {name : "name", catchPhrase : "catchPhrase", bs : "bs"}, phone : "phone"
  }]
  render(<ItemList list={data2} />)
})
