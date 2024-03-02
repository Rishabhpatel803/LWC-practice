public with sharing class AccountQueueable implements Queueable{
    private Account acc;
    public AccountQueueable(Account passAccount) {
        this.acc = passAccount;
    }

    public void execute(QueueableContext context){
        upsert acc;
    }
}