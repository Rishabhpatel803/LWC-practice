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
}