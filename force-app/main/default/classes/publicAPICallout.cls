public with sharing class publicAPICallout {
    private static final String Target_URL='https://www.boredapi.com/api/activity';
    
    @AuraEnabled(cacheable=true)
    public static Map<String,String> getData(){
        
        Http http = new Http();
        HttpRequest request = new HttpRequest();
        request.setEndpoint(Target_URL);
        request.setMethod('GET');
        request.setTimeout(6000);
        HttpResponse response = http.send(request);
        
        //System.debug(response.getStatusCode());
        // If the request is successful, parse the JSON response.
        
        String activity = '';
        String type = '';
        String participants = '';
        String price = '';

        Map<String, String> data = new Map<String, String>();

        if(response.getStatusCode() == 200) {
            //System.debug('response '+response.getBody());
            JSONParser parser=JSON.createParser(response.getBody());
            while(parser.nextToken()!=null){
                	if ((parser.getCurrentToken() == JSONToken.FIELD_NAME)) {
                    if(parser.getText() == 'activity'){
                        parser.nextToken();
                    	activity=activity+parser.getText();
                    }
                    if(parser.getText() == 'type'){
                        parser.nextToken();
                    	type=type+parser.getText();
                    }
                    if(parser.getText() == 'participants'){
                        parser.nextToken();
                    	participants=participants+parser.getText();
                    }
                    if(parser.getText() == 'price'){
                        parser.nextToken();
                    	price=price+parser.getText();
                    }
            	}
        	}
            data.put('Activity',activity);
            data.put('Type',type);
            data.put('Participants',participants);
            data.put('Price',price);
        }
        return data;
    }
}