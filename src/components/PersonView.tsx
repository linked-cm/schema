import { Person } from '../shapes/Person.js';
import React from 'react';
import { ShapeSet } from '@_linked/core/collections/ShapeSet';
import { linkedComponent } from '../package.js';

// export const PersonOverview = linkedSetComponent(Person.request((person,query) =>
//   query.select(person.name,person.knows.first().name,person.birthPlace)
// ))
//
const request = Person.select((person) => ({
  name: person.name,
  knows: person.knows,
  birthPlace: person.birthPlace,
  bpName: person.birthPlace?.name,
}));

type SinglePersonOverviewData = {
  id?: string;
  name?: string;
  knows?: ShapeSet<Person>;
  birthPlace?: Person['birthPlace'];
  bpName?: string;
};

export const SinglePersonOverview = linkedComponent(
  request,
  (props: SinglePersonOverviewData) => {
    const { name, knows, birthPlace, bpName, id } = props;
    return (
      <div className={'test'}>
        <div className={'asdf'} key={id}>
          <div>Name: {name?.toString()}</div>
          <div>Knows: {knows?.toString()}</div>
          <div>Birthplace: {birthPlace?.toString()}</div>
        </div>
      </div>
    );
  }
);
