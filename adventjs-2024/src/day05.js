function organizeShoes(shoes) {
  const stock = {}
  const result = []
  for (const { type, size } of shoes) {
    if (!stock[size]) stock[size] = { I: 0, R: 0 }
    stock[size][type]++
    if (stock[size].I > 0 && stock[size].R > 0) {
      result.push(size)
      stock[size].I--
      stock[size].R--
    }
  }
  return result
}

const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]
organizeShoes(shoes)