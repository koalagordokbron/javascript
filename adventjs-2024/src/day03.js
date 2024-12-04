// Day 03 of AdventJS 2024
function organizeInvetory(inventory) {
  const organizedInventory = {}

  inventory.map(({ name, quantity, category}) => {
    organizedInventory[category] ??= {}
    organizedInventory[category][name] = (organizedInventory[category][name] || 0) + quantity
  })
  
  return organizedInventory
}