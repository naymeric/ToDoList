

let taskList = document.getElementById("taskList")
let saisie = document.getElementById("saisie")
let addButton = document.getElementById("addButton")
let finishButton = document.getElementById("finishButton")
let saisieEntree = saisie.value


//Affichr la date du jour
let aujourdhui = new Date()

let dateperso = aujourdhui.toLocaleString('fr-FR', {  //pour que la date soit en français
  weekday: 'long',
  day: 'numeric',
  month: 'long',
  year: '2-digit',
})

document.getElementById('dateUn').textContent = dateperso



//Permet de laiser l'arriere plan vert au bouton "termine" quand on relache le bouton après le clic 
finishButton.addEventListener('click', () => {
  finishButton.classList.toggle('active'); // Ajoute ou retire la classe 'active' au clic

  // Sélectionne toutes les checkboxes
  const checkboxes = document.querySelectorAll('.checkboxTask');

  checkboxes.forEach(checkbox => {
    // Si la checkbox est cochée, on lui ajoute la classe 'hidden' et/ou la classe 'appears'
    if (checkbox.checked) {
    } else {
      checkbox.parentElement.classList.toggle('hidden'); // Cache le label entier
    }
  });
});



//Permet de créer les li et e les remplir avec le contenu de l'input "saisie"
let li = document.createElement("li")
li.textContent = saisie.value


//Permet de créer les li quand on appuie sur le bouton "ajouter une tâche"
function ajouterTache() {

  //Div qui se créé pour englober les li et la oubelle afin de placer les élémets en display pour qu'ils sont en ligne
  let taskDiv = document.createElement("div")
  taskDiv.classList.add("taskDiv")
  taskList.appendChild(taskDiv)


  //Permet de créer les checkbox de tache terminée
  let checkbox = document.createElement("input")
  checkbox.type = "checkbox"
  checkbox.className = ('checkboxTask')

  taskDiv.appendChild(checkbox);




  //Permet de créer les li
  let li = document.createElement("li")
  li.textContent = saisie.value
  taskDiv.appendChild(li)
  saisie.value = ""



  //***************************Creation du bouton poubelle lorsqu'une li se créé (attention : le laisser dans la fonction AjouterTache)*****

  //creation du bouton poubelle
  let poubelleButton = document.createElement("button")
  poubelleButton.className = ('poubelle')



  //ajout de l'icone poubelle sur le bouton précédemment créé)
  let iconePoubelle = document.createElement('ion-icon');
  iconePoubelle.className = ('iconePoubelle')
  iconePoubelle.setAttribute('name', 'trash-outline');
  iconePoubelle.classList.add('delete');


  //supprime la tâche quand on clique sur le bouton poubelle
  poubelleButton.addEventListener('click', () => {
    taskDiv.remove(); // Supprime l'élément de la liste
  });


  poubelleButton.appendChild(iconePoubelle);

  taskDiv.appendChild(poubelleButton);


}

//***********************fin de la fonction AjouterTache**************** */



//Permet de créer les li quand on appie sur la touche "entrée" du clavier
document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    //event.preventDefault();
    addButton.click();
  }
});



//Lancer la fonction "ajouter une tache" quand on clique sur le bouton "ajouter une tâche"
document.getElementById("addButton").addEventListener("click", ajouterTache)



