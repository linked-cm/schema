var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { Shape } from '@_linked/core/shapes/Shape';
import { objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
let ItemList = class ItemList extends Shape {
    get itemListElements() {
        return new ShapeSet();
    }
    get items() {
        return new ShapeSet();
    }
};
ItemList.targetClass = schema.ItemList;
__decorate([
    objectProperty({
        path: schema.itemListElement,
        shape: ['@_linked/schema', 'ListItem'],
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], ItemList.prototype, "itemListElements", null);
__decorate([
    objectProperty({
        path: [schema.itemListElement, schema.item],
        // TODO: sortBy: [schema.itemListElement, schema.position]
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], ItemList.prototype, "items", null);
ItemList = __decorate([
    linkedShape({
        description: 'A list of items of any sort. Represents ordered collections with item list elements and position relationships. (list, collection, sequence)',
    })
], ItemList);
export { ItemList };
//# sourceMappingURL=ItemList.js.map