var HTTP= {};

class M4U{
  getCostumer(msisdn){
    return HTTP.get(m4u+'/costumers?msisdn='+msisdn);
  }

  getCreditCards(customer_id){
    return HTTP.get(m4u+'/costumers/'+customer_id+'/credit_cards');
  }

  removeCreditCard(customer_id,token){
    return HTTP.delete(m4u+'/costumers/'+customer_id+'/credit_cards/'+token);
  }

  createCreditCard(customer_id){
    return HTTP.post(eldorado+'/cc')
    .then(function(response){
      return HTTP.post(m4u+'/costumers/'+customer_id+'/credit_cards',{
        token: response.credit_card.token,
        favorite: true
      })
    })
  }

  createCustomer(msisdn){
    return HTTP.post(m4u+'/costumers',{
      msisdn: msisdn
    });
  }
}
