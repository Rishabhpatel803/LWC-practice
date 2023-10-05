Scenario-1 Write a trigger on Account, when an account is inserted, automatically account billing address should populate into the account shipping address.
```
trigger PopulateShipBill on Account (before insert) {
    for(Account acc : Trigger.new){
        if(acc.BillingStreet != null){
            acc.ShippingStreet = acc.BillingStreet;
        }
        if(acc.BillingCity != null){
            acc.ShippingCity = acc.BillingCity;
        }
        if(acc.BillingState != null){
            acc.ShippingState = acc.BillingState;
        }
        if(acc.BillingPostalCode != null){
            acc.ShippingPostalCode = acc.BillingPostalCode;
        }
        if(acc.BillingCountry != null){
            acc.ShippingCountry = acc.BillingCountry;
        }
    }
}
```
