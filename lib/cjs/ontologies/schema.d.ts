export declare const loadData: () => Promise<({
    default: {
        "@context": {
            schema: string;
            dc: string;
            owl: string;
            rdfs: string;
            vann: string;
        };
        "@graph": {
            "@id": string;
            "@type": string;
            "rdfs:label": string;
            "dc:description": string;
            "dc:title": string;
            "vann:preferredNamespacePrefix": string;
            "vann:preferredNamespaceUri": string;
        }[];
    };
    "@context": {
        schema: string;
        dc: string;
        owl: string;
        rdfs: string;
        vann: string;
    };
    "@graph": {
        "@id": string;
        "@type": string;
        "rdfs:label": string;
        "dc:description": string;
        "dc:title": string;
        "vann:preferredNamespacePrefix": string;
        "vann:preferredNamespaceUri": string;
    }[];
} | {
    default: {
        "@context": {
            brick: string;
            csvw: string;
            dc: string;
            dcam: string;
            dcat: string;
            dcmitype: string;
            dcterms: string;
            doap: string;
            foaf: string;
            odrl: string;
            org: string;
            owl: string;
            prof: string;
            prov: string;
            qb: string;
            rdf: string;
            rdfs: string;
            schema: string;
            sh: string;
            skos: string;
            sosa: string;
            ssn: string;
            time: string;
            vann: string;
            void: string;
            xsd: string;
        };
        "@graph": ({
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "skos:exactMatch": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "skos:closeMatch": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentClass": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "skos:exactMatch": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            }[];
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentClass": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string[];
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentClass": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "skos:exactMatch": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string[];
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentClass": {
                "@id": string;
            }[];
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "skos:closeMatch": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "skos:exactMatch": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:sameAs": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "skos:exactMatch": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": {
                "@language": string;
                "@value": string;
            };
            "rdfs:label": {
                "@language": string;
                "@value": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": {
                "@language": string;
                "@value": string;
            };
            "rdfs:label": {
                "@language": string;
                "@value": string;
            };
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "skos:closeMatch": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "skos:closeMatch": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "skos:exactMatch": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            }[];
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "skos:exactMatch": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": {
                "@language": string;
                "@value": string;
            };
            "rdfs:label": {
                "@language": string;
                "@value": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentClass": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            }[];
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": {
                "@language": string;
                "@value": string;
            };
            "rdfs:label": {
                "@language": string;
                "@value": string;
            };
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "skos:closeMatch": {
                "@id": string;
            }[];
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subPropertyOf": {
                "@id": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "dcterms:source": {
                "@id": string;
            }[];
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:source"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": {
                "@language": string;
                "@value": string;
            };
            "rdfs:label": {
                "@language": string;
                "@value": string;
            };
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:inverseOf": {
                "@id": string;
            };
            "schema:isPartOf": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            }[];
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "rdfs:comment": string;
            "rdfs:label": string;
            "rdfs:subClassOf": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:supersededBy": {
                "@id": string;
            };
            "schema:domainIncludes"?: undefined;
            "schema:rangeIncludes"?: undefined;
            "schema:isPartOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "owl:equivalentProperty"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            }[];
            "schema:rangeIncludes": {
                "@id": string;
            };
            "schema:source": {
                "@id": string;
            };
            "schema:isPartOf"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        } | {
            "@id": string;
            "@type": string;
            "owl:equivalentProperty": {
                "@id": string;
            };
            "rdfs:comment": string;
            "rdfs:label": string;
            "schema:domainIncludes": {
                "@id": string;
            };
            "schema:rangeIncludes": {
                "@id": string;
            }[];
            "schema:isPartOf"?: undefined;
            "schema:source"?: undefined;
            "rdfs:subClassOf"?: undefined;
            "skos:exactMatch"?: undefined;
            "rdfs:subPropertyOf"?: undefined;
            "schema:supersededBy"?: undefined;
            "skos:closeMatch"?: undefined;
            "owl:equivalentClass"?: undefined;
            "dcterms:source"?: undefined;
            "schema:inverseOf"?: undefined;
            "schema:sameAs"?: undefined;
        })[];
    };
    "@context": {
        brick: string;
        csvw: string;
        dc: string;
        dcam: string;
        dcat: string;
        dcmitype: string;
        dcterms: string;
        doap: string;
        foaf: string;
        odrl: string;
        org: string;
        owl: string;
        prof: string;
        prov: string;
        qb: string;
        rdf: string;
        rdfs: string;
        schema: string;
        sh: string;
        skos: string;
        sosa: string;
        ssn: string;
        time: string;
        vann: string;
        void: string;
        xsd: string;
    };
    "@graph": ({
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        }[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:sameAs": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        }[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    })[];
})[] | [{
    "@context": {
        schema: string;
        dc: string;
        owl: string;
        rdfs: string;
        vann: string;
    };
    "@graph": {
        "@id": string;
        "@type": string;
        "rdfs:label": string;
        "dc:description": string;
        "dc:title": string;
        "vann:preferredNamespacePrefix": string;
        "vann:preferredNamespaceUri": string;
    }[];
}, {
    "@context": {
        brick: string;
        csvw: string;
        dc: string;
        dcam: string;
        dcat: string;
        dcmitype: string;
        dcterms: string;
        doap: string;
        foaf: string;
        odrl: string;
        org: string;
        owl: string;
        prof: string;
        prov: string;
        qb: string;
        rdf: string;
        rdfs: string;
        schema: string;
        sh: string;
        skos: string;
        sosa: string;
        ssn: string;
        time: string;
        vann: string;
        void: string;
        xsd: string;
    };
    "@graph": ({
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        }[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:sameAs": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "skos:exactMatch": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentClass": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        }[];
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "skos:closeMatch": {
            "@id": string;
        }[];
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subPropertyOf": {
            "@id": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "dcterms:source": {
            "@id": string;
        }[];
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:source"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": {
            "@language": string;
            "@value": string;
        };
        "rdfs:label": {
            "@language": string;
            "@value": string;
        };
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:inverseOf": {
            "@id": string;
        };
        "schema:isPartOf": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        }[];
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "rdfs:comment": string;
        "rdfs:label": string;
        "rdfs:subClassOf": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:supersededBy": {
            "@id": string;
        };
        "schema:domainIncludes"?: undefined;
        "schema:rangeIncludes"?: undefined;
        "schema:isPartOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "owl:equivalentProperty"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        }[];
        "schema:rangeIncludes": {
            "@id": string;
        };
        "schema:source": {
            "@id": string;
        };
        "schema:isPartOf"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    } | {
        "@id": string;
        "@type": string;
        "owl:equivalentProperty": {
            "@id": string;
        };
        "rdfs:comment": string;
        "rdfs:label": string;
        "schema:domainIncludes": {
            "@id": string;
        };
        "schema:rangeIncludes": {
            "@id": string;
        }[];
        "schema:isPartOf"?: undefined;
        "schema:source"?: undefined;
        "rdfs:subClassOf"?: undefined;
        "skos:exactMatch"?: undefined;
        "rdfs:subPropertyOf"?: undefined;
        "schema:supersededBy"?: undefined;
        "skos:closeMatch"?: undefined;
        "owl:equivalentClass"?: undefined;
        "dcterms:source"?: undefined;
        "schema:inverseOf"?: undefined;
        "schema:sameAs"?: undefined;
    })[];
}]>;
export declare const ns: (term: string) => import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const _ontologyResource: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const DataType: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const CreativeWork: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Person: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const VisualArtwork: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Project: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const PropertyValue: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Action: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const ImageObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Code: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const House: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const City: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Place: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Country: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Event: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const JoinAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const BefriendAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Organization: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Accommodation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Room: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Apartment: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const VideoObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Conversation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const SubscribeAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const UpdateAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const PlayAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Answer: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Comment: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const DefinedTerm: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Intangible: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const DefinedTermSet: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const ItemList: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const ListItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const MediaObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Observation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const artEdition: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const artform: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const artist: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const artMedium: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dateCreated: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const datePublished: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const familyName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const givenName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const birthDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const birthPlace: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const artworkSurface: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const colorist: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const depth: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const height: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const inker: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const letterer: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const penciler: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const width: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const additionalType: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const alternateName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const gender: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const hasOccupation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const homeLocation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const description: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const disambiguatingDescription: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const identifier: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const image: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const mainEntityOfPage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const name: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const potentialAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const sameAs: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const subjectOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const url: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const codeValue: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const containedInPlace: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const containsPlace: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const AdministrativeArea: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const Thing: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const contentUrl: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const latitude: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const longitude: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const actionStatus: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const accommodationCategory: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const about: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const telephone: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const startDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const endDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const affiliation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const attendee: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const location: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const event: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const agent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const participant: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const object: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const faxNumber: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const email: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const legalName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const superEvent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const address: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const member: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const honorificPrefix: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const endTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const members: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const founder: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const postalCode: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const areaServed: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const startTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const teamID: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const knows: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const parentItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const text: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const isMarried: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const skills: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const inDefinedTermSet: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const hasDefinedTerm: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const jobTitle: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const itemListElement: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const position: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const item: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const previousItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const nextItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const usageInfo: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const copyrightNotice: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const creditText: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const value: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const propertyID: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const variableMeasured: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const observationDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const observationAbout: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dateDeleted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const dateModified: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const addressCountry: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const addressRegion: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const addressLocality: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const streetAddress: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const creator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const headline: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const childItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
export declare const schema: {
    Intangible: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    DataType: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    creditText: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    copyrightNotice: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    CreativeWork: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    usageInfo: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Person: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    VisualArtwork: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Project: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    PropertyValue: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Action: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    ImageObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Code: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Event: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    JoinAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    BefriendAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Organization: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Accommodation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Room: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Apartment: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    VideoObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Conversation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    SubscribeAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    UpdateAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    PlayAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Answer: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Comment: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    DefinedTerm: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    DefinedTermSet: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    ItemList: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    ListItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Observation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    House: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Place: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    City: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Country: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    AdministrativeArea: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    Thing: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    MediaObject: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    dateModified: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    dateDeleted: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    additionalType: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    alternateName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    gender: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    description: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    teamID: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    disambiguatingDescription: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    identifier: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    image: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    mainEntityOfPage: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    name: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    headline: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    potentialAction: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    sameAs: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    subjectOf: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    url: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    artform: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    artist: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    artworkSurface: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    creator: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    colorist: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    depth: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    height: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    inker: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    containedInPlace: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    containsPlace: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    letterer: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    penciler: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    observationDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    variableMeasured: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    observationAbout: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    width: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    artEdition: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    artMedium: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    dateCreated: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    datePublished: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    birthDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    birthPlace: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    hasOccupation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    homeLocation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    familyName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    givenName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    propertyID: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    codeValue: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    contentUrl: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    latitude: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    longitude: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    telephone: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    honorificPrefix: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    actionStatus: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    accommodationCategory: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    about: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    knows: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    startDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    endDate: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    affiliation: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    attendee: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    location: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    event: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    agent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    participant: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    object: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    faxNumber: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    email: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    address: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    legalName: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    superEvent: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    member: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    endTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    members: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    founder: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    postalCode: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    areaServed: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    startTime: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    parentItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    text: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    isMarried: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    skills: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    inDefinedTermSet: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    hasDefinedTerm: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    jobTitle: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    itemListElement: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    position: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    item: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    previousItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    nextItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    value: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    addressCountry: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    addressRegion: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    addressLocality: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    streetAddress: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
    childItem: import("@_linked/core/utils/NodeReference.js").NodeReferenceValue;
};
