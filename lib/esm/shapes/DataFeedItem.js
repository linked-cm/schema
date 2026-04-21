var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { literalProperty, objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { xsd } from '@_linked/xsd/ontologies/xsd';
import { Intangible } from './Intangible.js';
import { Thing } from './Thing.js';
let DataFeedItem = class DataFeedItem extends Intangible {
    get dateCreated() {
        return null;
    }
    get dateDeleted() {
        return null;
    }
    get dateModified() {
        return null;
    }
    get item() {
        return null;
    }
};
DataFeedItem.targetClass = schema.CreativeWork;
__decorate([
    literalProperty({
        path: schema.dateCreated,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], DataFeedItem.prototype, "dateCreated", null);
__decorate([
    literalProperty({
        path: schema.dateDeleted,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], DataFeedItem.prototype, "dateDeleted", null);
__decorate([
    literalProperty({
        path: schema.dateModified,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], DataFeedItem.prototype, "dateModified", null);
__decorate([
    objectProperty({
        path: schema.item,
        shape: Thing,
    }),
    __metadata("design:type", Thing),
    __metadata("design:paramtypes", [])
], DataFeedItem.prototype, "item", null);
DataFeedItem = __decorate([
    linkedShape({
        description: 'A single item within a data feed. Represents feed entries with creation dates, modification tracking, and item relationships. (entry, feed item, record)',
    })
], DataFeedItem);
export { DataFeedItem };
//# sourceMappingURL=DataFeedItem.js.map