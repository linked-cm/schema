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
import { objectProperty } from '@_linked/core/shapes/SHACL';
import { schema } from '../ontologies/schema.js';
import { linkedShape } from '../package.js';
import { Thing } from './Thing.js';
let Comment = class Comment extends Thing {
    get parentItem() {
        return null;
    }
    get childItem() {
        return null;
    }
    get childItems() {
        return new ShapeSet();
    }
};
Comment.targetClass = schema.Comment;
__decorate([
    objectProperty({
        path: schema.parentItem,
        shape: ['@_linked/schema', 'Comment'],
        maxCount: 1,
    }),
    __metadata("design:type", Comment),
    __metadata("design:paramtypes", [])
], Comment.prototype, "parentItem", null);
__decorate([
    objectProperty({
        path: schema.childItem,
        shape: ['@_linked/schema', 'Comment'],
        maxCount: 1,
    }),
    __metadata("design:type", Comment),
    __metadata("design:paramtypes", [])
], Comment.prototype, "childItem", null);
__decorate([
    objectProperty({
        path: schema.childItem,
        shape: ['@_linked/schema', 'Comment'],
    }),
    __metadata("design:type", ShapeSet),
    __metadata("design:paramtypes", [])
], Comment.prototype, "childItems", null);
Comment = __decorate([
    linkedShape({
        description: 'A comment on an item. Represents user feedback with parent-child relationships and threaded discussions. (feedback, remark, note)',
    })
], Comment);
export { Comment };
//# sourceMappingURL=Comment.js.map