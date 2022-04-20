
import React , {Component}  from 'react'
import { PayUnit } from "payunitjs"
export default class Donation extends Component {
    
    componentDidMount() {
        PayUnit(
            {
              apiUsername: "payunit_flN9uIZoW",
              apiPassword: "496cd5ab2dab8ca2b2f7c9baff3174aa95299e2a",
              x_api_key: "496cd5ab2dab8ca2b2f7c9baff3174aa95299e2a",
              mode: "test",
            },
            {
              return_url: "",
              notify_url: "/donators",
              description: "",
              purchaseRef: "",
              total_amount: "",
              name: "LedSite",
              currency: "XAF",
            }
          );
    }
   render() {
      return (
          <div>
             <button id ="payunit-pay"> Pay  with payunit </button>
          </div>
        )
    }
}
