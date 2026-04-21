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
import { linkedShape, packageName } from '../package.js';
import { xsd } from '@_linked/xsd/ontologies/xsd';
import { Thing } from './Thing.js';
let CreativeWork = class CreativeWork extends Thing {
    get creator() {
        return null;
    }
    get creditText() {
        return '';
    }
    //@TODO: remove this once weve got a better solution for circular dependencies (see Thing get/set Image)
    get usageInfo() {
        return '';
    }
    get copyrightNotice() {
        return '';
    }
    get text() {
        return '';
    }
    get dateCreated() {
        return null;
    }
    get dateModified() {
        return null;
    }
    get headline() {
        return '';
    }
};
CreativeWork.targetClass = schema.CreativeWork;
__decorate([
    objectProperty({
        path: schema.creator,
        maxCount: 1,
        shape: [packageName, 'Person'],
    }),
    __metadata("design:type", Object),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "creator", null);
__decorate([
    literalProperty({
        path: schema.creditText,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "creditText", null);
__decorate([
    literalProperty({
        path: schema.usageInfo,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "usageInfo", null);
__decorate([
    literalProperty({
        path: schema.copyrightNotice,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "copyrightNotice", null);
__decorate([
    literalProperty({
        path: schema.text,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "text", null);
__decorate([
    literalProperty({
        path: schema.dateCreated,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "dateCreated", null);
__decorate([
    literalProperty({
        path: schema.dateModified,
        maxCount: 1,
        datatype: xsd.dateTime,
    }),
    __metadata("design:type", Date),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "dateModified", null);
__decorate([
    literalProperty({
        path: schema.headline,
        maxCount: 1,
    }),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [])
], CreativeWork.prototype, "headline", null);
CreativeWork = __decorate([
    linkedShape({
        description: 'A work or composition that is the result of creative effort. Represents content with creator, dates, and copyright info. (content, work, creation)',
    })
], CreativeWork);
export { CreativeWork };
//# sourceMappingURL=CreativeWork.js.map