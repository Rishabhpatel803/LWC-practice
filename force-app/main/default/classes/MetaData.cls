public with sharing class MetaData {
    @AuraEnabled(cacheable=true)
    public static List<Required_Documents__mdt> fetchMetadata(){
        return [SELECT Document_Number__c, Document_Title__c, Document_Description__c 
                FROM Required_Documents__mdt
                ORDER BY Document_Number__c ASC];
    }
}