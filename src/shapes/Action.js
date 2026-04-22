"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Action = void 0;
var xsd_1 = require("@_linked/xsd/ontologies/xsd");
var SHACL_1 = require("@_linked/core/shapes/SHACL");
var actionConstants = __importStar(require("../constants.js"));
var schema_js_1 = require("../ontologies/schema.js");
var package_js_1 = require("../package.js");
var Person_js_1 = require("./Person.js");
var Place_js_1 = require("./Place.js");
var Thing_js_1 = require("./Thing.js");
var Action = /** @class */ (function (_super) {
    __extends(Action, _super);
    function Action() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Object.defineProperty(Action.prototype, "actionStatus", {
        /**
         * The status of an Action (enums).
         */
        get: function () {
            return 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "agent", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "participant", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "objects", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "location", {
        // @objectProperty({
        //   path: schema.object,
        //   shape: Thing,
        //   maxCount:1
        // })
        // get firstObject(): Thing {
        //   return this.objects.first();
        // }
        // set objects(objects: ShapeSet<Thing>) {
        //   objects.updateEach(schema.object, this.namedNode);
        // }
        // get object(): Thing {
        //   if (this.hasProperty(schema.object)) {
        //     return this.getOneAs(schema.object, Thing, true);
        //   } else {
        //     return null;
        //   }
        // }
        // set object(val: Thing) {
        //   this.overwrite(schema.object, val ? val.node : null);
        // }
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "startTime", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Action.prototype, "endTime", {
        get: function () {
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Action.targetClass = schema_js_1.schema.Action;
    Action.STATUS_ACTIVE = actionConstants.STATUS_ACTIVE;
    Action.STATUS_COMPLETED = actionConstants.STATUS_COMPLETED;
    Action.STATUS_POTENTIAL = actionConstants.STATUS_POTENTIAL;
    Action.STATUS_FAILED = actionConstants.STATUS_FAILED;
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.actionStatus,
            maxCount: 1,
            datatype: xsd_1.xsd.integer,
        }),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [])
    ], Action.prototype, "actionStatus", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.agent,
            shape: Person_js_1.Person,
            minCount: 1,
            maxCount: 1,
            description: 'The agent (person/organization) who performed the action',
        }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], Action.prototype, "agent", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.participant,
            shape: Person_js_1.Person,
            maxCount: 1,
        }),
        __metadata("design:type", Person_js_1.Person),
        __metadata("design:paramtypes", [])
    ], Action.prototype, "participant", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.object,
            shape: Thing_js_1.Thing,
        }),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Action.prototype, "objects", null);
    __decorate([
        (0, SHACL_1.objectProperty)({
            path: schema_js_1.schema.location,
            shape: Place_js_1.Place,
            maxCount: 1,
        }),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [])
    ], Action.prototype, "location", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.startTime,
            required: false,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], Action.prototype, "startTime", null);
    __decorate([
        (0, SHACL_1.literalProperty)({
            path: schema_js_1.schema.endTime,
            required: false,
            maxCount: 1,
            datatype: xsd_1.xsd.dateTime,
        }),
        __metadata("design:type", Date),
        __metadata("design:paramtypes", [])
    ], Action.prototype, "endTime", null);
    Action = __decorate([
        (0, package_js_1.linkedShape)({
            description: 'An action performed by a person or organization. Represents activities with agent, participant, location, and timing. (activity, operation, task)',
        })
    ], Action);
    return Action;
}(Thing_js_1.Thing));
exports.Action = Action;
//# sourceMappingURL=Action.js.map