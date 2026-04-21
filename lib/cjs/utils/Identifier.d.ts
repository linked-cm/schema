import { QueryShape } from '@_linked/core/queries/SelectQuery';
import { Shape } from '@_linked/core/shapes/Shape';
/**
 * Get a new incremental ID for a shape class. E.g., if the current maximum ID is 5, it returns 6.
 * @param shapeClass The shape class to get the ID for.
 * @param getIdFn A function to extract the ID from a shape instance.
 * @returns A promise that resolves to the new incremental ID.
 */
export declare function getNewIncrementalId(shapeClass: typeof Shape, getIdFn?: (s: QueryShape<any>) => any): Promise<number>;
