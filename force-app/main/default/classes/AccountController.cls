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

    @AuraEnabled
    public static list<Account> getAccountId(String accountName, String accountWebsite){
        Account acc = new Account();
        acc.Name = accountName;
        acc.Website = accountWebsite;
        insert acc;
        System.debug('Account C reated');
        return [SELECT Id from Account WHERE Name =: accountName];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountDetails(){
        return [SELECT Id, Name, Industry FROM Account WHERE Industry != 'Agriculture'];
    }
}
