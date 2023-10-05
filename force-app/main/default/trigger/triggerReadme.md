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
Scenario-2 Write a trigger on the Account when the Account is updated check all opportunities related to the account. Update all Opportunities Stage to close lost if an opportunity created date is greater than 30 days from today and stage not equal to close won.
```
trigger UpdateOpportunity on Account (after update) {
    List<Id> accountId = new List<Id>();
    for(Account accoun : Trigger.new){
        accountId.add(accoun.Id);
    }
    
    List<Opportunity> accOpportunity = [SELECT ID, AccountId, CreatedDate, StageName, CloseDate FROM Opportunity where AccountId IN : accountId];
    DateTime day30 = System.now() - 30;
    
    List<Opportunity> newOpportunityList = new List<Opportunity>();
    
    if(accOpportunity.size() != 0){
        for(Opportunity opp : accOpportunity){
            if(opp.CreatedDate < day30 && opp.StageName != ' Closed Won'){
                opp.StageName = 'Closed Lost';
                opp.CloseDate = System.today();
                newOpportunityList.add(opp);
            }
        }
    }
    if(newOpportunityList.size() > 0)
    update newOpportunityList;
}
```
Scenario-3 Once an Account is inserted an email should go to the System Admin user with specified text below. An account has been created and the name is “Account Name”.
```

```
