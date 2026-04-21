"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SinglePersonOverview = void 0;
const Person_js_1 = require("../shapes/Person.js");
const react_1 = __importDefault(require("react"));
const package_js_1 = require("../package.js");
// export const PersonOverview = linkedSetComponent(Person.request((person,query) =>
//   query.select(person.name,person.knows.first().name,person.birthPlace)
// ))
//
const request = Person_js_1.Person.select((person) => {
    var _a;
    return ({
        name: person.name,
        knows: person.knows,
        birthPlace: person.birthPlace,
        bpName: (_a = person.birthPlace) === null || _a === void 0 ? void 0 : _a.name,
    });
});
exports.SinglePersonOverview = (0, package_js_1.linkedComponent)(request, (props) => {
    const { name, knows, birthPlace, bpName, id } = props;
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