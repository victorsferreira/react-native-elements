componenWillMount(){
  // cria customer
  var self = this;
  M4U.getCostumer(msisdn)
  .then(function(response){
    if(response.status == 404 || !response.data.length){
      return M4U.createCostumer(msisdn)
      .then(function(response){
        if(response.status == 201){
          return response.data;
        }else throw new Error('');
      })
    }else if(response.status == 200){
      return response.data[0];
    }else throw new Error('');
  }).then(function(customer){
    self.setState({
      customer: customer
    });

    self.getCreditCards();
  }).catch(function(err){
    console.log('err',err)
  });

}


getCreditCards(){
  var self = this;
  M4U.getCreditCards(this.state.customer.id)
  .then(function(response){
    if(response.status == 200){
      self.setState({
        cards: response.data
      });
    }else throw new Error('');
  }).catch(function(err){
    console.log('err',err)
  });
}


createCreditCard(token){
  var self = this;
  M4U.createCreditCard(this.state.customer.id,{})
  .then(function(response){
    if(response.status == 204){
      var cards = self.state.cards;
      cards.push(response.data)

      self.setState({
        cards: cards
      });
    }else throw new Error('');
  }).catch(function(err){
    console.log('err',err)
  });
}


removeCreditCard(token){
  var self = this;
  M4U.removeCreditCard(this.state.customer.id,token)
  .then(function(response){
    if(response.status == 204){
      var cards = self.state.cards.filter(function(card){
        return card.token != token;
      })

      self.setState({
        cards: cards
      });
    }else throw new Error('');
  }).catch(function(err){
    console.log('err',err)
  });
}
