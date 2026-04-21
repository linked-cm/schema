import { Person } from '../shapes/Person.js';
import React from 'react';
import { linkedComponent } from '../package.js';
// export const PersonOverview = linkedSetComponent(Person.request((person,query) =>
//   query.select(person.name,person.knows.first().name,person.birthPlace)
// ))
//
const request = Person.select((person) => {
    var _a;
    return ({
        name: person.name,
        knows: person.knows,
        birthPlace: person.birthPlace,
        bpName: (_a = person.birthPlace) === null || _a === void 0 ? void 0 : _a.name,
    });
});
export const SinglePersonOverview = linkedComponent(request, (props) => {
    const { name, knows, birthPlace, bpName, id } = props;
    return (React.createElement("div", { className: 'test' },
        React.createElement("div", { className: 'asdf', key: id },
            React.createElement("div", null,
                "Name: ", name === null || name === void 0 ? void 0 :
                name.toString()),
            React.createElement("div", null,
                "Knows: ", knows === null || knows === void 0 ? void 0 :
                knows.toString()),
            React.createElement("div", null,
                "Birthplace: ", birthPlace === null || birthPlace === void 0 ? void 0 :
                birthPlace.toString()))));
});
//# sourceMappingURL=PersonView.js.map