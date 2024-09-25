import mongoose from "mongoose";

const ShopingSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
});

const itemSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageUrl: {
      type: String,
      required: true
    }
  });
  
  const Item = mongoose.model('Item', itemSchema);
  
  //yeh jo Shoping h wo collection ka naam h aur jb  hum Database pr manually DB banate h tb db ka naam kuch bhi d do magr collection ka naam aap  yeh jo {Shoping} h yhi dena h bss yaad rhe last m s lagana h {Shopings}
  
  
  const Shoppingmodel = mongoose.model('Shoping', ShopingSchema);
  module.exports = Shoppingmodel
  module.exports = Item;
 
























//'Shoping' collection create karo.
//Us collection ko ShopingSchema ke according structure do.

// 'Shoping': Yeh model ka naam hai, jo aap MongoDB collection ka naam bana rahe ho. MongoDB mein, yeh naam plural form mein collection ke roop mein save hoga, jaise 'Shopings'.

// ShopingSchema: Yeh schema ka naam hai, jo aapki data structure ko define kar raha hai. Isme aap batate ho ki database ke andar kaun kaun se fields honge (jaise name, email, aur password), aur unka data type kya hoga.