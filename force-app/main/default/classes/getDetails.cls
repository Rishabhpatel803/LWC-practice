public with sharing class getDetails {

    @AuraEnabled(cacheable=true)
    public static List<Bank_Info__mdt> getSuccessCode(){
        List<Bank_Info__mdt> details = [SELECT Success_Code__c, Message__c from Bank_Info__mdt ORDER BY Success_Code__c ASC];
        return details;
    }
}