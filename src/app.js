import { LightningElement } from "lwc";

export default class App extends LightningElement {
  accountsData=[
     {
        "Id":"1",      
        "Name": "IBM",
        "Industry": "IT",
        "Website": "www.IBM.com",
        "EmpCount": 10000,
        "AnnualRevenue": 100000000
    },
    {
        "Id":"2",
        "Name": "TCS",
        "Industry": "IT",
        "Website": "www.tcs.com",
        "EmpCount": 10000,
        "AnnualRevenue": 200000000
    },
    {
        "Id":"3",
        "Name": "Wipro",
        "Industry": "IT",
        "Website": "www.wipro.com",
        "EmpCount": 10000,
        "AnnualRevenue": 300000000
    }
  ]
  
}
