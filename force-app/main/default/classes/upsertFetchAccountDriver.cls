public with sharing class upsertFetchAccountDriver {
    @AuraEnabled(cacheable=true)
    public static void acceptPass(Account acc){
        System.enqueueJob(new AccountQueueable(acc));
    }
}