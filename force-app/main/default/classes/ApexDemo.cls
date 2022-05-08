public with sharing class ApexDemo 
{
    @AuraEnabled(cacheable=true) //Wire is read-only. Hence, cacheable must be set to true.
    public static List<Contact> getContactList()
    {
        return [select Id, Name, Email from Contact limit 10];
    }
}
