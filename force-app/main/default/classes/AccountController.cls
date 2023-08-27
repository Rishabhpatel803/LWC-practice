public with sharing class AccountController {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccList(){
        return [Select Id, Name from Account Limit 5];
    }

    @AuraEnabled
    public static List<Account> findAccList(String keyword){
        String key = '%' + keyword + '%';
        return [SELECT Id, Name from Account WHERE Name LIKE:key LIMIT 10];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getList(){
        return [SELECT Id, Name, CreatedDate, Owner.Name, Account_Status__c FROM Account];
    }
}