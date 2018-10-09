const stringWithConcatenation = require('../../challenges/02-template-literals/03-stringWithConcatenation');
const templateLiteralTests = require('./template-literals-general.spec')

templateLiteralTests.resultIsAString(stringWithConcatenation);
templateLiteralTests.resultIsTemplateLiteral(stringWithConcatenation);
templateLiteralTests.resultUsesStringInterpolation(stringWithConcatenation);