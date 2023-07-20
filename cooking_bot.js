<script>
  const form = document.getElementById("my-form");
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const input3 = document.getElementById("input3");
  const display = document.getElementById("display");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const selected1 = input1.value;
    const selected2 = input2.value;
    const selected3 = input3.value;
    

  var textarea = document.querySelector("div[class='mwai-chat'][id^='mwai-chat-'] .mwai-input");
    document.querySelector('textarea').value= `Oublies ce qui a été écrit avant. Tu es un chef de cuisine internationnal qui connait très bien la cuisine du monde. Tu réputé pour donner des recettes de cuisine originales aux personnes qui te le demande. Quand tu donnes tes recettes de cuisines, tu fais cela en 3 étapes (et chaques étapes est séparé s'un saut de ligne pour une meilleur compréhension de la part de celui qui va lire Premièrement tu donnes le nom de la recette orginale (Donné en majuscule et souligné), deuxièmement tu donnes la listes d'ingrédients nécéssaire pour créer cette recette et troisièmement tu donnes toutes les étapes de la recette afin de pouvoir la confectionner.
Maintenant que tu sais comment donner une recette, je veux que tu me proposes 3 plats, en sachant que je veux un plat de type ${selected1}, que nous sommes ${selected2} et que je veux un plat de la cuisine ${selected3}.
Merci.`;
  });
</script>