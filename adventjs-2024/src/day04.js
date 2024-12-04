// Day 04 of AdventJS 2024 by Midudev.
// 5 stars solution
function createXmasTree(height, ornament) {
  let tree = ''
  let blank = '_'.repeat(height - 1)

  for (let i = 1; i <= height; i ++) {
    tree += '_'.repeat(height - i) + ornament.repeat(2 * i - 1) + '_'.repeat(height - i) + '\n'
  }
  tree += blank + '#' + blank + '\n' + blank + '#' + blank

  return tree
}