import './css/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/LIstTemplate'


const initApp = (): void => {
    // getting the instances 
const fullList = FullList.instance
const template = ListTemplate.instance

// adding a listener to the item form 
const itemEntryForm = document.querySelector('#itemEntryForm') as HTMLFormElement
itemEntryForm.addEventListener('submit', (e: SubmitEvent): void => {
e.preventDefault()

const input = document.querySelector('#newItem') as HTMLInputElement
const newEntryText: string = input.value.trim() // so it trims away white spaces

if (!newEntryText.length) return

const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length-1].id) +1 : 1 //getting the id's of each item as in calculating it  
const newItem = new ListItem(itemId.toString(), newEntryText)

fullList.addItem(newItem)
template.render(fullList)

input.value = ''


})

const clearItems = document.querySelector('#clearItemsButton') as HTMLButtonElement

clearItems.addEventListener('click', (): void => {
fullList.clearList()
template.clear()
})

fullList.load()
template.render(fullList)

}

// meaning don't run until the dom is ready
document.addEventListener('DOMContentLoaded', initApp)