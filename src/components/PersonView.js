"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglePersonOverview = void 0;
var Person_js_1 = require("../shapes/Person.js");
var react_1 = __importDefault(require("react"));
var package_js_1 = require("../package.js");
// export const PersonOverview = linkedSetComponent(Person.request((person,query) =>
//   query.select(person.name,person.knows.first().name,person.birthPlace)
// ))
//
var request = Person_js_1.Person.select(function (person) {
    var _a;
    return ({
        name: person.name,
        knows: person.knows,
        birthPlace: person.birthPlace,
        bpName: (_a = person.birthPlace) === null || _a === void 0 ? void 0 : _a.name,
    });
});
exports.SinglePersonOverview = (0, package_js_1.linkedComponent)(request, function (props) {
    var name = props.name, knows = props.knows, birthPlace = props.birthPlace, bpName = props.bpName, id = props.id;
    return (react_1.default.createElement("div", { className: 'test' },
        react_1.default.createElement("div", { className: 'asdf', key: id },
            react_1.default.createElement("div", null,
                "Name: ", name === null || name === void 0 ? void 0 :
                name.toString()),
            react_1.default.createElement("div", null,
                "Knows: ", knows === null || knows === void 0 ? void 0 :
                knows.toString()),
            react_1.default.createElement("div", null,
                "Birthplace: ", birthPlace === null || birthPlace === void 0 ? void 0 :
                birthPlace.toString()))));
});
//# sourceMappingURL=PersonView.js.map