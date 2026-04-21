import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { CreativeWork } from './CreativeWork.js';

@linkedShape({
  description:
    'Computer programming source code. Represents code with text content, programming language, and creative work properties. (source code, program, script)',
})
export class Code extends CreativeWork {
  static targetClass = schema.Code;

  static fromText(text: string) {
    return Code.create({ text });
  }
}
