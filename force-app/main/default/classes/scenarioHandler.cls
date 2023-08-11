public with sharing class scenarioHandler {

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccounts(String search) {
        String searchQuery = '%' + search + '%';
        return [SELECT Id, Name FROM ACCOUNT WHERE Name LIKE : searchQuery];
    }
}