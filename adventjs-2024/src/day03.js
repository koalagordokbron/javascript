// Day 03 of AdventJS 2024
function organizeInvetory(inventory) {
  if (!inventory) {
    return {}
  }

  const organizedInventory = {}

  inventory.map(({ name, quantity, category}) => {
    organizedInventory[category] ??= {}
    organizedInventory[category][name] = (organizedInventory[category][name] || 0) + quantity
  })
  
  return organizedInventory
}