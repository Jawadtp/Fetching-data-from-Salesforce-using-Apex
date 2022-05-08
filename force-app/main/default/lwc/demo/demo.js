import { LightningElement, wire } from 'lwc';
import getContactList from "@salesforce/apex/ApexDemo.getContactList";


export default class Demo extends LightningElement 
{
    contacts=[]

    connectedCallback()
    {
        

    }

    @wire(getContactList)
    wiredData({error, data})
    {
        if(data)
        {
            this.contacts = data
            window.console.log("Contacts: ", this.contacts)
        }
        else if(error)
        {
            window.console.log("Contact error: ", this.error)
        }
    }
}