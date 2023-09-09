public with sharing class approvalData {
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountData(){
        return [SELECT Id, Name, Email__c, BillingCity, Approved__c
                FROM Account
                WHERE Approved__c != NULL
                WITH SECURITY_ENFORCED];
    }

    @AuraEnabled(cacheable=true)
    public static List<Opportunity> getOpportunityData(){
        return [SELECT Id, Name, StageName, Amount, Type, Approved__c
                FROM Opportunity
                WHERE Approved__c != NULL
                WITH SECURITY_ENFORCED];
    }

    @AuraEnabled(cacheable=true)
    public static List<Case> getCaseData(){
        return [SELECT Id, Subject, Account.Name, Owner.Name, Approved__c
                FROM Case
                WHERE Approved__c != NULL
                WITH SECURITY_ENFORCED];
    }
}