// Reward values per kg
const rewardRates = {
    PET: 9,
    HDPE: 8,
    Aluminium: 22,
    Glass: 1.75,
    Mixed: 5
  };
  
  let totalReward = 0;
  
  const materialSelect = document.getElementById('material');
  const weightInput = document.getElementById('weight');
  const addItemBtn = document.getElementById('addItem');
  const totalRewardDisplay = document.getElementById('totalReward');
  const itemList = document.getElementById('itemList');
  
  const rvmBin = document.querySelector('.rvm-bin');
  const dropContainer = document.querySelector('.item-drop-container');
  
  addItemBtn.addEventListener('click', () => {
    const material = materialSelect.value;
    const weight = parseFloat(weightInput.value);
    if(weight <= 0) return;
  
    const reward = rewardRates[material] * weight;
    totalReward += reward;
    totalRewardDisplay.textContent = `R${totalReward.toFixed(2)}`;
  
    // Add to item list
    const li = document.createElement('li');
    li.textContent = `${weight} kg of ${material} = R${reward.toFixed(2)}`;
    itemList.appendChild(li);
  
    // Create item drop
    const itemDrop = document.createElement('div');
    itemDrop.className = 'item-drop';
    const xDrop = Math.random() * 80;
    itemDrop.style.left = `${xDrop}%`;
    dropContainer.appendChild(itemDrop);
  
    itemDrop.addEventListener('animationend', () => {
      dropContainer.removeChild(itemDrop);
    });
  
    // Create floating reward
    const rewardPopup = document.createElement('div');
    rewardPopup.className = 'reward-float';
    rewardPopup.textContent = `+R${reward.toFixed(2)}`;
    rewardPopup.style.left = `${50 + (Math.random() * 20 - 10)}%`;
    rewardPopup.style.top = '60px';
    rvmBin.appendChild(rewardPopup);
  
    rewardPopup.addEventListener('animationend', () => {
      rvmBin.removeChild(rewardPopup);
    });
  
    // Determine particle color based on material
    let particleColor;
    switch(material) {
      case 'PET': particleColor = '#4CAF50'; break;
      case 'HDPE': particleColor = '#8BC34A'; break;
      case 'Aluminium': particleColor = '#C0C0C0'; break;
      case 'Glass': particleColor = '#2196F3'; break;
      case 'Mixed': particleColor = '#FF9800'; break;
      default: particleColor = '#FFD700';
    }
  
    // Generate sparkles
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.backgroundColor
