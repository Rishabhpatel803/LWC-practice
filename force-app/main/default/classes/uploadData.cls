public inherited sharing class uploadData {
    @AuraEnabled
    public static void uddData(String tRecordName, String tRecordAccount, String tRecordCode, String tRecordMsg){
        try {
            Transaction__c tRecord = new Transaction__c(
                Name = tRecordName,
                Account__c = tRecordAccount,
                Success_Code__c = tRecordCode,
                Message__c = tRecordMsg);
            //System.debug(tRecord);
            Database.insert (tRecord);
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
