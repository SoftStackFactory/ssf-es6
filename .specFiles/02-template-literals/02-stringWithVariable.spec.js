const stringWithVariable = require('../../challenges/02-template-literals/02-stringWithVariable');
const templateLiteralTests = require('./template-literals-general.spec')

templateLiteralTests.resultIsAString(stringWithVariable);
templateLiteralTests.resultIsTemplateLiteral(stringWithVariable);
templateLiteralTests.resultUsesStringInterpolation(stringWithVariable);