// find maximun ID and then +1 to generate unique id
// ? should we move to the Person Shape? if yes, which Shapes?
import { QueryShape } from '@_linked/core/queries/SelectQuery';
import { Shape } from '@_linked/core/shapes/Shape';

/**
 * Get a new incremental ID for a shape class. E.g., if the current maximum ID is 5, it returns 6.
 * @param shapeClass The shape class to get the ID for.
 * @param getIdFn A function to extract the ID from a shape instance.
 * @returns A promise that resolves to the new incremental ID.
 */
export async function getNewIncrementalId(
  shapeClass: typeof Shape,
  getIdFn?: (s: QueryShape<any>) => any
) {
  let maximum = 0;
  const instances = await (shapeClass as any).select((s) => {
    return {
      identifier: getIdFn ? getIdFn(s) : s.identifier,
    };
  });
  instances.forEach((instance) => {
    const id = instance.identifier;
    // only consider purely numeric identifiers (e.g., "656", not "blablabla-2025-team")
    if (/^\d+$/.test(id)) {
      let identifier = parseInt(id);
      if (identifier > maximum) {
        maximum = identifier;
      }
    }
  });

  return maximum + 1;
}
