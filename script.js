// Cálculo de calorias
document.getElementById("calorie-form").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const gender = document.getElementById("gender").value;
    const activity = parseFloat(document.getElementById("activity").value);
    const goal = parseInt(document.getElementById("goal").value);
  
    // Fórmula de Cálculo da Taxa Metabólica Basal
    let tmb;
    if (gender === "male") {
      tmb = 10 * weight + 6.25 * height - 5 * age + 5; // Fórmula para homens
    } else {
      tmb = 10 * weight + 6.25 * height - 5 * age - 161; // Fórmula para mulheres
    }
  
    // Ajuste pela atividade física
    const maintenanceCalories = tmb * activity;
  
    // Ajuste pelo objetivo (perda, manutenção ou ganho)
    const totalCalories = maintenanceCalories + goal;
  
    // Exibir resultado
    document.getElementById("calories").textContent = `${Math.round(totalCalories)} kcal`;
  
    // Gerar sugestões de alimentos
    generateFoodSuggestions(Math.round(totalCalories));
  
    document.getElementById("result").classList.remove("hidden");
  });
  
  // Lista de alimentos e calorias por porção (exemplo: 100g ou 1 unidade)
  const foodDatabase = [
    { name: "Arroz (100g)", calories: 130 },
    { name: "Feijão (100g)", calories: 90 },
    { name: "Frango grelhado (100g)", calories: 165 },
    { name: "Ovo cozido (1 unidade)", calories: 68 },
    { name: "Maçã (1 unidade)", calories: 52 },
    { name: "Pão integral (1 fatia)", calories: 69 },
    { name: "Banana (1 unidade)", calories: 89 },
    { name: "Queijo cottage (100g)", calories: 98 },
    { name: "Batata doce (100g)", calories: 86 },
    { name: "Abacate (100g)", calories: 160 },
    { name: "Arroz integral (100g)", calories: 124 },
    { name: "Frango grelhado (100g)", calories: 165 },
    { name: "Ovo cozido (1 unidade)", calories: 68 },
    { name: "Batata doce (100g)", calories: 86 },
    { name: "Abacate (100g)", calories: 160 },
    { name: "Banana (1 unidade média)", calories: 89 },
    { name: "Maçã (1 unidade média)", calories: 52 },
    { name: "Brócolis cozido (100g)", calories: 35 },
    { name: "Peito de peru (100g)", calories: 111 },
    { name: "Queijo cottage (100g)", calories: 98 },
    { name: "Iogurte natural (100g)", calories: 61 },
    { name: "Atum em lata (100g)", calories: 116 },
    { name: "Quinoa (100g)", calories: 120 },
    { name: "Amêndoas (28g)", calories: 161 },
    { name: "Castanha-do-pará (28g)", calories: 190 },
    { name: "Leite desnatado (200ml)", calories: 72 },
    { name: "Aveia (100g)", calories: 389 },
    { name: "Cenoura (100g)", calories: 41 },
    { name: "Espinafre (100g)", calories: 23 },
    { name: "Tomate (100g)", calories: 18 },
    { name: "Pepino (100g)", calories: 15 },
    { name: "Lentilha cozida (100g)", calories: 116 },
    { name: "Grão-de-bico cozido (100g)", calories: 164 },
    { name: "Feijão preto (100g)", calories: 132 },
    { name: "Salmão grelhado (100g)", calories: 208 },
    { name: "Tilápia grelhada (100g)", calories: 129 },
    { name: "Pão integral (1 fatia)", calories: 69 },
    { name: "Batata inglesa cozida (100g)", calories: 77 },
    { name: "Mandioquinha (100g)", calories: 101 },
    { name: "Alface (100g)", calories: 14 },
    { name: "Morango (100g)", calories: 32 },
    { name: "Abóbora cozida (100g)", calories: 20 },
    { name: "Couve-flor cozida (100g)", calories: 25 },
    { name: "Chia (28g)", calories: 138 },
    { name: "Sementes de linhaça (28g)", calories: 150 },
    { name: "Melancia (100g)", calories: 30 },
    { name: "Mamão (100g)", calories: 43 },
    { name: "Torrada integral (1 unidade)", calories: 35 },
    { name: "Tapioca (100g)", calories: 159 },
    { name: "Queijo minas light (100g)", calories: 264 },
    { name: "Pasta de amendoim (28g)", calories: 190 },
    { name: "Coco fresco (100g)", calories: 354 },
    { name: "Repolho cozido (100g)", calories: 23 },
    { name: "Azeite de oliva (1 colher de sopa)", calories: 119 },
    { name: "Chocolate amargo (28g)", calories: 170 },
    { name: "Café sem açúcar (200ml)", calories: 2 },
    { name: "Suco de laranja natural (200ml)", calories: 90 },
    { name: "Frutas secas (100g)", calories: 359 },
    { name: "Amendoim (28g)", calories: 161 },
    { name: "Biscoito de arroz (1 unidade)", calories: 35 },
    { name: "Molho de tomate caseiro (100g)", calories: 29 },
    { name: "Frango desfiado (100g)", calories: 151 },
    { name: "Cuscuz de milho (100g)", calories: 112 },
    { name: "Peixe assado (100g)", calories: 170 },
    { name: "Carne bovina magra (100g)", calories: 250 },
    { name: "Iogurte grego natural (100g)", calories: 59 },
    { name: "Mel (1 colher de sopa)", calories: 64 },
    { name: "Panqueca de aveia (1 unidade)", calories: 120 },
    { name: "Pipoca sem óleo (100g)", calories: 387 },
    { name: "Suco de uva integral (200ml)", calories: 140 },
    { name: "Kefir (200ml)", calories: 80 },
    { name: "Tofu (100g)", calories: 76 },
    { name: "Hambúrguer caseiro (100g)", calories: 212 },
    { name: "Macarrão integral (100g)", calories: 124 },
    { name: "Milho verde cozido (100g)", calories: 96 },
    { name: "Queijo parmesão (28g)", calories: 110 },
    { name: "Sorvete de frutas (1 bola)", calories: 100 },
    { name: "Torrada de pão francês (1 unidade)", calories: 40 },
    { name: "Hambúrguer de grão-de-bico (100g)", calories: 164 },
    { name: "Berinjela assada (100g)", calories: 25 },
    { name: "Pimentão cozido (100g)", calories: 20 },
    { name: "Suco verde (200ml)", calories: 50 },
    { name: "Granola sem açúcar (100g)", calories: 489 },
    { name: "Açúcar mascavo (1 colher de sopa)", calories: 60 },
    { name: "Geleia sem açúcar (1 colher de sopa)", calories: 25 },
    { name: "Bolacha integral (1 unidade)", calories: 32 },
    { name: "Creme de ricota light (1 colher de sopa)", calories: 35 },
    { name: "Bebida vegetal (200ml)", calories: 50 },
    { name: "Molho pesto caseiro (1 colher de sopa)", calories: 80 },
    { name: "Panqueca de tapioca (1 unidade)", calories: 150 },
    { name: "Espetinho de legumes (1 unidade)", calories: 60 },
    { name: "Quiche de legumes (1 fatia)", calories: 180 },
    { name: "Gelatina light (100g)", calories: 10 },
    { name: "Polenta cozida (100g)", calories: 71 },
    { name: "Caldo de legumes caseiro (200ml)", calories: 40 },
    { name: "Filé de peixe grelhado (100g)", calories: 120 },
    { name: "Azeitonas verdes (10 unidades)", calories: 30 },
    { name: "Iogurte proteico (100g)", calories: 60 },
    { name: "Crepioca (1 unidade)", calories: 120 },
  ];
  
  // Função para gerar sugestões de alimentos
  function generateFoodSuggestions(calorieGoal) {
    const suggestions = [];
    let currentCalories = 0;
  
    while (currentCalories < calorieGoal && suggestions.length < 10) {
      // Escolher um alimento aleatório
      const food = foodDatabase[Math.floor(Math.random() * foodDatabase.length)];
  
      // Adicionar alimento às sugestões se não ultrapassar o limite
      if (currentCalories + food.calories <= calorieGoal) {
        suggestions.push(food);
        currentCalories += food.calories;
      }
    }
  
    // Exibir sugestões na interface
    const suggestionsList = document.getElementById("food-suggestions");
    suggestionsList.innerHTML = ""; // Limpar lista anterior
    suggestions.forEach((item) => {
      const listItem = document.createElement("li");
      listItem.textContent = `${item.name} - ${item.calories} kcal`;
      suggestionsList.appendChild(listItem);
    });
  }
  
  // Navegação de menu
  const menu = document.querySelector('.menu');
  const NavMenu = document.querySelector('.nav-menu');
  
  menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
  });
  