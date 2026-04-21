"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNewIncrementalId = void 0;
/**
 * Get a new incremental ID for a shape class. E.g., if the current maximum ID is 5, it returns 6.
 * @param shapeClass The shape class to get the ID for.
 * @param getIdFn A function to extract the ID from a shape instance.
 * @returns A promise that resolves to the new incremental ID.
 */
function getNewIncrementalId(shapeClass, getIdFn) {
    return __awaiter(this, void 0, void 0, function* () {
        let maximum = 0;
        const instances = yield shapeClass.select((s) => {
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
    });
}
exports.getNewIncrementalId = getNewIncrementalId;
//# sourceMappingURL=Identifier.js.map