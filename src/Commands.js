const CommandList = [
  {
    command: '\\frac{}{}',
    example: '\\frac{a}{b}',
    descriptions: ['fraction', 'division'],
  },{
    command: '\\sqrt{}',
    example: '\\sqrt{a}',
    descriptions: ['square root', 'root', 'sqrt'],
  },{
    command: '\\geq',
    example: '\\geq',
    descriptions: ['greater than or equal to', '>='],
  },{
    command: '\\leq',
    example: '\\leq',
    descriptions: ['less than or equal to', '<='],
  },{
    command: '<',
    example: '<',
    descriptions: ['less than', '<'],
  },{
    command: '>',
    example: '>',
    descriptions: ['greater than', '>'],
  },{
    command: '\\pm',
    example: '\\pm',
    descriptions: ['plus-minus', '+-'],
  },{
    command: '=',
    example: '=',
    descriptions: ['equals', 'is equal to'],
  },{
    command: '\\neq',
    example: '\\neq',
    descriptions: ['not equal to', '!='],
  },{
    command: '\\approx',
    example: '\\approx',
    descriptions: ['approximately equal to'],
  },{
    command: '\\nless',
    example: '\\nless',
    descriptions: ['not less than'],
  },{
    command: '\\ngtr',
    example: '\\ngtr',
    descriptions: ['not greater than'],
  },{
    command: '\\nleq',
    example: '\\nleq',
    descriptions: ['not less than or equal to'],
  },{
    command: '\\ngeq',
    example: '\\ngeq',
    descriptions: ['not greater than or equal to'],
  },{
    command: '\\infty',
    example: '\\infty',
    descriptions: ['infinity'],
  },{
    command: '\\cdot',
    example: '\\cdot',
    descriptions: ['dot', 'dot product'],
  },{
    command: '\\sqrt[n]{}',
    example: '\\sqrt[n]{a}',
    descriptions: ['nth root'],
  },{
    command: '^{}',
    example: 'x^{a}',
    descriptions: ['exponent', 'superscript', 'rasied to the power'],
  },{
    command: '_{}',
    example: 'x_{a}',
    descriptions: ['subscript'],
  },{
    command: '\\gg',
    example: '\\gg',
    descriptions: ['much greater than'],
  },{
    command: '\\ll',
    example: '\\ll',
    descriptions: ['much less than'],
  },{
    command: '\\mathbb{R}',
    example: '\\mathbb{R}',
    descriptions: ['R', 'Real Numbers'],
  },{
    command: '\\mathbb{Q}',
    example: '\\mathbb{Q}',
    descriptions: ['Q', 'Rational Numbers'],
  },{
    command: '\\mathbb{Z}',
    example: '\\mathbb{Z}',
    descriptions: ['Z', 'Integers'],
  },{
    command: '\\mathbb{N}',
    example: '\\mathbb{N}',
    descriptions: ['N', 'Natural Numbers'],
  },{
    command: '\\circ',
    example: 'g \\circ f',
    descriptions: ['Function Composition', 'g(f(x))', 'g of f'],
  },{
    command: '\\square',
    example: '\\square',
    descriptions: ['Square'],
  },{
    command: '\\blacksquare',
    example: '\\blacksquare',
    descriptions: ['Black Square'],
  },{
    command: '\\wedge',
    example: 'P \\wedge Q',
    descriptions: ['And'],
  },{
    command: '\\vee',
    example: 'P \\vee Q',
    descriptions: ['Or'],
  },{
    command: '\\neg{}',
    example: '\\neg{P}',
    descriptions: ['Negation', 'Not'],
  },{
    command: '\\implies',
    example: 'P \\implies Q',
    descriptions: ['Implies', 'If P then Q', 'Material Implication', 'Conditional'],
  },{
    command: '\\iff',
    example: 'P \\iff Q',
    descriptions: ['iff', 'If and only if', 'Material Equivalence'],
  },{
    command: '\\sin{}',
    example: '\\sin{x}',
    descriptions: ['sin', 'sine'],
  },{
    command: '\\cos{}',
    example: '\\cos{x}',
    descriptions: ['cos', 'cosine'],
  },{
    command: '\\tan{}',
    example: '\\tan{x}',
    descriptions: ['tan', 'tangent'],
  },{
    command: '\\csc{}',
    example: '\\csc{x}',
    descriptions: ['csc', 'cosec', 'cosecant'],
  },{
    command: '\\sec{}',
    example: '\\sec{x}',
    descriptions: ['sec', 'secant'],
  },{
    command: '\\cot{}',
    example: '\\cot{x}',
    descriptions: ['cot', 'cotan', 'cotangent'],
  },{
    command: '\\in',
    example: 'a \\in A',
    descriptions: ['is member of', 'in', 'belongs to set'],
  },{
    command: '\\ni',
    example: 'A \\ni a',
    descriptions: ['owns', 'has member', 'reverse in'],
  },{
    command: '\\notin',
    example: 'a \\notin A',
    descriptions: ['is not member of', 'not in', 'doesn\'t belong to set'],
  },{
    command: '\\subset',
    example: 'a \\subset A',
    descriptions: ['is subset of', 'proper subset'],
  },{
    command: '\\supset',
    example: 'A \\supset a',
    descriptions: ['is superset of', 'proper superset'],
  },{
    command: '\\supseteq',
    example: 'A \\supseteq a',
    descriptions: ['is superset of', 'improper superset'],
  },{
    command: '\\not\\subset',
    example: 'a \\not\\subset A',
    descriptions: ['is not subset of', 'not proper subset'],
  },{
    command: '\\subseteq',
    example: 'a \\subseteq A',
    descriptions: ['is subset or equivalent set', 'improper subset'],
  },{
    command: '\\nsubseteq',
    example: 'a \\nsubseteq A',
    descriptions: ['is not a subset or equivalent set', 'not improper subset'],
  },{
    command: '\\setminus',
    example: '\\mathbb{R} \\setminus \\mathbb{Q}',
    descriptions: ['subtract set'],
  },{
    command: '\\int_{a}^{b}',
    example: '\\int_{a}^{b}',
    descriptions: ['definite integral'],
  },{
    command: '\\int',
    example: '\\int',
    descriptions: ['indefinite integral', 'integral'],
  },{
    command: '\\iint',
    example: '\\iint',
    descriptions: ['double integral'],
  },{
    command: '\\iiint',
    example: '\\iiint',
    descriptions: ['triple integral'],
  },{
    command: '\\iiiint',
    example: '\\iiiint',
    descriptions: ['quadruple integral'],
  },{
    command: '\\oint',
    example: '\\oint',
    descriptions: ['contour integral'],
  },{
    command: '\\overline{}',
    example: '\\overline{I}',
    descriptions: ['Overline'],
  },{
    command: '\\underline{}',
    example: '\\underline{I}',
    descriptions: ['Underline'],
  },{
    command: '\\sum_{}^{}',
    example: '\\sum_{n=0}^{\\infty} x',
    descriptions: ['Sum', 'summation', 'Sigma'],
  },{
    command: '\\prod_{}^{}',
    example: '\\prod_{n=0}^{\\infty} x',
    descriptions: ['Product'],
  },{
    command: '\\pi',
    example: '\\pi',
    descriptions: ['Pi', '3.1415926535', '22/7'],
  },{
    command: 'e',
    example: 'e',
    descriptions: ['e', '2.71828'],
  },{
    command: '!',
    example: 'n!',
    descriptions: ['factorial'],
  },{
    command: '\\forall',
    example: '\\forall',
    descriptions: ['for all', 'given any', 'universal quantifier']
  },{
    command: '\\exists',
    example: '\\exists',
    descriptions: ['there exists', 'existential quantifier'],
  },{
    command: '\\nexists',
    example: '\\nexists',
    descriptions: ['there is no', 'there does not exist'],
  },{
    command: '\\exists!',
    example: '\\exists!',
    descriptions: ['there exists one and only one'],
  },{
    command: '\\hat{}',
    example: '\\hat{a}',
    descriptions: ['hat'],
  },{
    command: '\\widehat{}',
    example: '\\widehat{abc}',
    descriptions: ['widehat'],
  },{
    commnad: '\\nabla',
    example: '\\nabla',
    descriptions: ['nabla', 'differential'],
  },{
    command: '\\times',
    example: '\\times',
    descriptions: ['cross', 'cross product', 'multiply', 'x'],
  },{
    command: '\\div',
    example: '\\div',
    descriptions: ['divide', 'division', '/'],
  },{
    command: '\\cap',
    example: '\\cap',
    descriptions: ['intersection', 'set intersection'],
  },{
    command: '\\cup',
    example: '\\cup',
    descriptions: ['union', 'set union'],
  },{
    command: '\\emptyset',
    example: '\\emptyset',
    descriptions: ['null set', 'empty set'],
  }
]

const greekAlphabet = [
  {command: '\\alpha', example: '\\alpha', descriptions: ['Alpha']},
  {command: '\\beta', example: '\\beta', descriptions: ['Beta']},
  {command: '\\gamma', example: '\\gamma', descriptions: ['Gamma']},
  {command: '\\delta', example: '\\delta', descriptions: ['delta']},
  {command: '\\Delta', example: '\\Delta', descriptions: ['Delta']},
  {command: '\\epsilon', example: '\\epsilon', descriptions: ['Epsilon']},
  {command: '\\zeta', example: '\\zeta', descriptions: ['Zeta']},
  {command: '\\eta', example: '\\eta', descriptions: ['Eta']},
  {command: '\\theta', example: '\\theta', descriptions: ['Theta']},
  {command: '\\iota', example: '\\iota', descriptions: ['Iota']},
  {command: '\\kappa', example: '\\kappa', descriptions: ['Kappa']},
  {command: '\\lambda', example: '\\lambda', descriptions: ['Lambda']},
  {command: '\\mu', example: '\\mu', descriptions: ['Mu']},
  {command: '\\nu', example: '\\nu', descriptions: ['Nu']},
  {command: '\\omicron', example: '\\omicron', descriptions: ['Omicron']},
  // Pi in CommandList
  {command: '\\rho', example: '\\rho', descriptions: ['Rho']},
  {command: '\\sigma', example: '\\sigma', descriptions: ['Sigma']},
  {command: '\\tau', example: '\\tau', descriptions: ['Tau']},
  {command: '\\upsilon', example: '\\upsilon', descriptions: ['Upsilon']},
  {command: '\\phi', example: '\\phi', descriptions: ['Phi']},
  {command: '\\chi', example: '\\chi', descriptions: ['Chi']},
  {command: '\\psi', example: '\\psi', descriptions: ['Psi']},
  {command: '\\omega', example: '\\omega', descriptions: ['Omega']},
];

export default [...CommandList, ...greekAlphabet];