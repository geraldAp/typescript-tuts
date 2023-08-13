import ListItem from "./ListItem";


interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,

}

export default class FullList implements List {
    static instance: FullList = new FullList()


    // only one instance of this 
    private constructor(private _list: ListItem[] = []) { }

    get list(): ListItem[] {
        return this._list
    }

    save(): void {
        localStorage.setItem('list', JSON.stringify(this._list))

    }

    load(): void {
        const storedList: string | null = localStorage.getItem('list')
        if (typeof storedList !== 'string') return
        // almost like creating a type 
        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)



        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)

        })
    }


    clearList(): void {
        this._list = []
        this.save()
    }
    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()

    }

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }


}