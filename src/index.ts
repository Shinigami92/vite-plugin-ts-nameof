import tsNameof from 'ts-nameof';
import { Plugin } from 'vite';

export default (): Plugin => ({
  name: 'vite:ts-nameof',
  enforce: 'pre',
  transform(code, id) {
    if (code.includes('nameof')) {
      const { fileText, replaced } = tsNameof.replaceInText(id, code);
      if (replaced) {
        code = fileText ?? code;
      }
    }

    return code;
  },
});
